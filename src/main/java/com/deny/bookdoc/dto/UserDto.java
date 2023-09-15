package com.deny.bookdoc.dto;

import com.deny.bookdoc.domain.Appointments;
import com.deny.bookdoc.domain.Role;
import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.domain.WorkSchedule;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class UserDto extends AuditableBaseDto {
    private Long id;
    private String username;
    private String password;
    private String fullName;
    private Integer status;
    private String email;
    private String phone;
    private String address;
    private Set<String> listRoles = new HashSet<>();
    private Set<AppointmentsDto> appointmentsUser;
    private Set<ServicePriceDto> servicePrices;
    private Set<WorkScheduleDto> workSchedules;

    public UserDto() {

    }

    public UserDto(User entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            this.username = entity.getUsername();
            this.password = entity.getPassword();
            this.fullName = entity.getFullName();
            this.status = entity.getStatus();
            this.email = entity.getEmail();
            this.phone = entity.getPhone();
            this.address = entity.getAddress();
            if (entity.getListRoles() != null && entity.getListRoles().size() > 0) {
                this.listRoles = new HashSet<>();
                for (Role role : entity.getListRoles()) {
                    RoleDto dto = new RoleDto();
                    dto.setId(role.getId());
                    dto.setRoleName(role.getRoleName());
                }
            }
            if (entity.getAppointmentsUser() != null && entity.getAppointmentsUser().size() > 0) {
                this.appointmentsUser = new HashSet<>();
                for (Appointments appointments : entity.getAppointmentsUser()) {
                    AppointmentsDto dto = new AppointmentsDto();
                    dto.setId(appointments.getId());
                    dto.setCreatedDate(appointments.getCreatedDate());
                    dto.setCreatedBy(appointments.getCreatedBy());
                    dto.setModifiedDate(appointments.getModifiedDate());
                    dto.setModifiedBy(appointments.getModifiedBy());
                    dto.setServicePrice(new ServicePriceDto(appointments.getServicePrice(), false));
                    dto.setStatus(appointments.getStatus());
                    dto.setNotes(appointments.getNotes());
                    this.appointmentsUser.add(dto);
                }
            }
            if (entity.getWorkSchedules() != null && entity.getWorkSchedules().size() > 0) {
                this.workSchedules = new HashSet<>();
                for (WorkSchedule workSchedule : entity.getWorkSchedules()) {
                    WorkScheduleDto dto = new WorkScheduleDto();
                    dto.setId(workSchedule.getId());
                    dto.setCreatedDate(workSchedule.getCreatedDate());
                    dto.setCreatedBy(workSchedule.getCreatedBy());
                    dto.setModifiedDate(workSchedule.getModifiedDate());
                    dto.setModifiedBy(workSchedule.getModifiedBy());
                    dto.setStartTime(workSchedule.getStartTime());
                    dto.setEndTime(workSchedule.getEndTime());
                }
            }
        }
    }

    public UserDto(User entity, boolean simple) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            this.username = entity.getUsername();
            this.password = entity.getPassword();
            this.fullName = entity.getFullName();
            this.status = entity.getStatus();
            this.email = entity.getEmail();
            this.phone = entity.getPhone();
            this.address = entity.getAddress();
        }
    }
}
