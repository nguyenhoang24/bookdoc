package com.deny.bookdoc.dto;

import com.deny.bookdoc.domain.WorkSchedule;
import lombok.Data;
import org.joda.time.LocalTime;
import org.springframework.util.ObjectUtils;


@Data
public class WorkScheduleDto extends BaseObjectDto{
    private UserDto doctor;
    private LocalTime startTime;
    private LocalTime endTime;

    public WorkScheduleDto() {

    }

    public WorkScheduleDto(WorkSchedule entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            if (!ObjectUtils.isEmpty(entity.getDoctor())) {
                this.doctor = new UserDto(entity.getDoctor(), false);
            }
            this.startTime = entity.getStartTime();
            this.endTime = entity.getEndTime();
        }
    }
}
