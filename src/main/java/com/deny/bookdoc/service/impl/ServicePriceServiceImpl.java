package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.domain.ServicePrice;
import com.deny.bookdoc.domain.Services;
import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ServicePriceDto;
import com.deny.bookdoc.repository.ServicePriceRepository;
import com.deny.bookdoc.repository.ServicesRepository;
import com.deny.bookdoc.repository.UserRepository;
import com.deny.bookdoc.service.ServicePriceService;
import org.joda.time.DateTime;
import org.joda.time.LocalDateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ServicePriceServiceImpl implements ServicePriceService {

    @Autowired
    private ServicePriceRepository servicePriceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ServicesRepository servicesRepository;

    @PersistenceContext
    private EntityManager manager;

    @Override
    public ServicePriceDto saveOrUpdate(ServicePriceDto dto) {
        ServicePrice entity = null;
        if (dto.getId() != null) {
            entity = servicePriceRepository.findById(dto.getId()).orElse(null);
        }
        if (entity == null) {
            entity = new ServicePrice();
        }
        if (dto.getDoctor() != null) {
            User doctor = userRepository.findById(dto.getDoctor().getId()).orElse(null);
            entity.setDoctor(doctor);
        }
        if (dto.getServices() != null) {
            Services services = servicesRepository.findById(dto.getServices().getId()).orElse(null);
            entity.setServices(services);
        }
        if (dto.getPrice() != null) {
            entity.setPrice(dto.getPrice());
        }
        if (dto.getCurrency() != null) {
            entity.setCurrency(dto.getCurrency());
        }
        entity = servicePriceRepository.save(entity);
        return new ServicePriceDto(entity);
    }

    @Override
    public ServicePriceDto findById(UUID id) {
        if (id != null) {
            return servicePriceRepository.findByID(id);
        }
        return null;
    }

    @Override
    public boolean deleteById(UUID id) {
        if (id != null) {
            ServicePrice entity = servicePriceRepository.findById(id).orElse(null);
            if (entity != null) {
                servicePriceRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }

    @Override
    public Page<ServicePriceDto> paging(PagingDto dto) {
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
        String sqlCount = "select count(entity.id) from ServicePrice as entity ";
        String sql = "select new com.deny.bookdoc.dto.ServicePriceDto(entity) from ServicePrice as entity ";

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

        Query q = manager.createQuery(sql, ServicePriceDto.class);
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
        List<ServicePriceDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<ServicePriceDto> result = new PageImpl<ServicePriceDto>(entities, pageable, count);

        return result;
    }
}
