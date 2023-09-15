package com.deny.bookdoc.dto;
import com.deny.bookdoc.domain.Appointments;
import com.deny.bookdoc.domain.ServicePrice;
import lombok.Data;
import org.springframework.util.ObjectUtils;

import java.util.HashSet;
import java.util.Set;

@Data
public class ServicePriceDto extends BaseObjectDto {
    private UserDto doctor;
    private ServicesDto services;
    private Set<AppointmentsDto> appointments;
    private Double price; // giá dịch vụ
    private String currency;

    public ServicePriceDto() {

    }

    public ServicePriceDto(ServicePrice entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            if (!ObjectUtils.isEmpty(entity.getDoctor())) {
                this.doctor = new UserDto(entity.getDoctor(), false);
            }
            if (!ObjectUtils.isEmpty(entity.getServices())) {
                this.services = new ServicesDto(entity.getServices(), false);
            }
            if (entity.getAppointments() != null && entity.getAppointments().size() > 0) {
                this.appointments = new HashSet<>();
                for (Appointments appointments : entity.getAppointments()) {
                    AppointmentsDto dto = new AppointmentsDto();
                    dto.setId(appointments.getId());
                    dto.setCreatedDate(appointments.getCreatedDate());
                    dto.setCreatedBy(appointments.getCreatedBy());
                    dto.setModifiedDate(appointments.getModifiedDate());
                    dto.setModifiedBy(appointments.getModifiedBy());
                    dto.setUser(new UserDto(appointments.getUser(), true));
                    dto.setAppointmentDateTime(appointments.getAppointmentDateTime());
                    dto.setNotes(appointments.getNotes());
                    dto.setStatus(appointments.getStatus());
                    this.appointments.add(dto);
                }
            }
            this.price = entity.getPrice();
            this.currency = entity.getCurrency();
        }
    }

    public ServicePriceDto(ServicePrice entity, boolean simple) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            if (!ObjectUtils.isEmpty(entity.getDoctor())) {
                this.doctor = new UserDto(entity.getDoctor(), false);
            }
            if (!ObjectUtils.isEmpty(entity.getServices())) {
                this.services = new ServicesDto(entity.getServices(), false);
            }
            this.price = entity.getPrice();
            this.currency = entity.getCurrency();
        }
    }
}
