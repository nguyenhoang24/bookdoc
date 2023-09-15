package com.deny.bookdoc.dto;

import com.deny.bookdoc.domain.Reviews;
import lombok.Data;
import org.springframework.util.ObjectUtils;

@Data
public class ReviewsDto extends BaseObjectDto {
    private AppointmentsDto appointments;
    private Integer rating; //điểm đánh giá từ 1-5
    private String comment;

    public ReviewsDto() {

    }

    public ReviewsDto(Reviews entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            if(!ObjectUtils.isEmpty(entity.getAppointments())) {
                this.appointments = new AppointmentsDto(entity.getAppointments(), false);
            }
            this.rating = entity.getRating();
            this.comment = entity.getComment();
        }
    }
}
