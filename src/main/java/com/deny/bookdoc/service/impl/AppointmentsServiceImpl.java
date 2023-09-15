package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.config.TwilioConfig;
import com.deny.bookdoc.domain.Appointments;
import com.deny.bookdoc.domain.Role;
import com.deny.bookdoc.domain.ServicePrice;
import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.dto.AppointmentsDto;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.WorkScheduleDto;
import com.deny.bookdoc.repository.AppointmentsRepository;
import com.deny.bookdoc.repository.ServicePriceRepository;
import com.deny.bookdoc.repository.UserRepository;
import com.deny.bookdoc.repository.WorkScheduleRepository;
import com.deny.bookdoc.security.CustomUserDetails;
import com.deny.bookdoc.service.AppointmentsService;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.joda.time.DateTime;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
@Transactional
public class AppointmentsServiceImpl implements AppointmentsService {

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ServicePriceRepository servicePriceRepository;

    @Autowired
    private WorkScheduleRepository workScheduleRepository;

    @PersistenceContext
    private EntityManager manager;

    @Autowired
    private TwilioConfig twilioConfig;

    @Override
    public AppointmentsDto saveOrUpdate(AppointmentsDto dto) {
        Appointments entity = null;
        if (dto.getId() != null) {
            entity = appointmentsRepository.findById(dto.getId()).orElse(null);
        }
        if (entity == null) {
            entity = new Appointments();
        }
        if (dto.getUser() != null) {
            User user = userRepository.findById(dto.getUser().getId()).orElse(null);
            if (user != null) {
                entity.setUser(user);
            }
        }
        if (dto.getServicePrice() != null) {
            ServicePrice servicePrice = servicePriceRepository.findById(dto.getServicePrice().getId()).orElse(null);
            if (servicePrice != null) {
                User doctor = userRepository.findById(dto.getServicePrice().getDoctor().getId()).orElse(null);
                if (doctor != null) {
                    Set<Role> userRoles = doctor.getListRoles();
                    boolean isDoctor = userRoles.stream().anyMatch(role -> role.getRoleName().name().equals("ROLE_DOCTOR"));
                    if (isDoctor) {
                        WorkScheduleDto workSchedule = workScheduleRepository.findByDoctor(doctor.getId());
                        if (dto.getAppointmentDateTime() != null && workSchedule != null) {
                            if (!checkLocalDateTimeInRange(dto.getAppointmentDateTime(), workSchedule.getStartTime(), workSchedule.getEndTime())) {
                                throw new IllegalArgumentException("Thời gian đặt lịch khám không nằm trong giờ làm của bác sĩ!");
                            }
                            entity.setAppointmentDateTime(dto.getAppointmentDateTime());
                        }
                    } else {
                        throw new IllegalArgumentException("Không phải bác sĩ!");
                    }
                }
                entity.setServicePrice(servicePrice);
            }
        }
        if (dto.getNotes() != null) {
            entity.setNotes(dto.getNotes());
        }
        if (dto.getStatus() != null) {
            entity.setStatus(dto.getStatus());
        }
        entity = appointmentsRepository.save(entity);

        //SMS thông báo
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails user = (CustomUserDetails) authentication.getPrincipal();
        PhoneNumber to = new PhoneNumber(user.getPhone());
        PhoneNumber from = new PhoneNumber(twilioConfig.getPhoneNumber());
        Message message = Message
                .creator(to, from, "Bạn đã đặt lịch khám bệnh vào " + dto.getAppointmentDateTime() + "! Hãy đợi phản hồi của bác sĩ.")
                .create();
        return new AppointmentsDto(entity);
    }

    @Override
    public AppointmentsDto findById(UUID id) {
        if (id != null) {
            return appointmentsRepository.findByID(id);
        }
        return null;
    }

    @Override
    public boolean deleteById(UUID id) {
        if (id != null) {
            Appointments entity = appointmentsRepository.findById(id).orElse(null);
            if (entity != null) {
                appointmentsRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }

    @Override
    public Page<AppointmentsDto> paging(PagingDto dto) {
        if (dto == null) {
            return null;
        }
        int pageIndex = dto.getPageIndex();
        int pageSize = dto.getPageSize();

        if (pageIndex > 0) {
            pageIndex--;
        } else {
            pageIndex = 0;
        }
        String whereClause = " where (1=1) ";
        String sqlCount = "select count(entity.id) from Appointments as entity ";
        String sql = "select new com.deny.bookdoc.dto.AppointmentsDto(entity) from Appointments as entity ";

//		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
//			whereClause += " AND (entity.visitCode LIKE :text) ";
//		}

        if (dto.getFromDate() != null) {
            whereClause += " AND ( entity.createDate >= :fromDate) ";
        }

        if (dto.getToDate() != null) {
            whereClause += " AND ( entity.createDate <= :toDate) ";
        }
        sql += whereClause;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, AppointmentsDto.class);
        Query qCount = manager.createQuery(sqlCount);

//		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
//			q.setParameter("text", '%' + dto.getText().trim() + '%');
//			qCount.setParameter("text", '%' + dto.getText().trim() + '%');
//		}

        if (dto.getFromDate() != null) {
            DateTime dateTime = new DateTime(dto.getFromDate());
            LocalDateTime fromDate = dateTime.toLocalDateTime();
            DateTimeFormatter formatter = DateTimeFormat.forPattern("yyyy-MM-dd HH:mm:ss");
            q.setParameter("fromDate", fromDate);
            qCount.setParameter("fromDate", fromDate);
        }

        if (dto.getToDate() != null) {
            DateTime dateTime = new DateTime(dto.getToDate());
            LocalDateTime toDate = dateTime.toLocalDateTime();
            q.setParameter("toDate", toDate);
            qCount.setParameter("toDate", toDate);
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<AppointmentsDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<AppointmentsDto> result = new PageImpl<AppointmentsDto>(entities, pageable, count);

        return result;
    }

    @Override
    public AppointmentsDto confirmAppointments(UUID id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails doctorCheck = (CustomUserDetails) authentication.getPrincipal();
        Appointments appointments = appointmentsRepository.findById(id).orElse(null);
        if (appointments != null) {
            //check authen có phải là bác sĩ kh, và bác sĩ nào mới xác nhận được lịch đó thôi
            User doctor = appointments.getServicePrice().getDoctor();
            if (doctor != null) {
                if (doctorCheck.getUsername().equals(doctor.getUsername())) {
                    Set<Role> userRoles = doctor.getListRoles();
                    boolean isDoctor = userRoles.stream().anyMatch(role -> role.getRoleName().name().equals("ROLE_DOCTOR") || role.getRoleName().name().equals("ROLE_ADMIN"));
                    if (isDoctor && appointments.getStatus() == 0) {
                        appointments.setStatus(1);
                        appointments = appointmentsRepository.save(appointments);

                        //SMS
                        PhoneNumber to = new PhoneNumber(appointments.getUser().getPhone());
                        PhoneNumber from = new PhoneNumber(twilioConfig.getPhoneNumber());
                        Message message = Message
                                .creator(to, from, "[Book-doctor]Chúng tôi đã xác nhận thông tin từ bạn, rất mong bạn đến đúng giờ!")
                                .create();
                        return new AppointmentsDto(appointments);
                    }
                }
            }
        }
        return null;
    }

    @Override
    public AppointmentsDto cancelAppointments(UUID id) {
        return null;
    }

    private boolean checkLocalDateTimeInRange(LocalDateTime dateTime, LocalTime startTime, LocalTime endTime) {
        LocalTime localTime = dateTime.toLocalTime();
        return !localTime.isBefore(startTime) && !localTime.isAfter(endTime);
    }
}
