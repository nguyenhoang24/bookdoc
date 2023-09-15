package com.deny.bookdoc.dto;

import com.deny.bookdoc.domain.Appointments;
import com.deny.bookdoc.domain.Reviews;
import lombok.Data;
import org.joda.time.LocalDateTime;
import org.springframework.util.ObjectUtils;

import java.util.HashSet;
import java.util.Set;

@Data
public class AppointmentsDto extends BaseObjectDto {

    private UserDto user;
    private ServicePriceDto servicePrice;
    private Set<ReviewsDto> reviews;
    private LocalDateTime appointmentDateTime; // ngày giờ hẹn
    private String notes;
    private Integer status;

    public AppointmentsDto() {

    }

    public AppointmentsDto(Appointments entity) {
        if(entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            if (!ObjectUtils.isEmpty(entity.getUser())) {
                this.user = new UserDto(entity.getUser(), false);
            }
            if (entity.getReviews() != null && entity.getReviews().size() > 0) {
                this.reviews = new HashSet<>();
                for (Reviews reviews : entity.getReviews()) {
                    ReviewsDto dto = new ReviewsDto();
                    dto.setId(reviews.getId());
                    dto.setCreatedDate(reviews.getCreatedDate());
                    dto.setCreatedBy(reviews.getCreatedBy());
                    dto.setModifiedDate(reviews.getModifiedDate());
                    dto.setModifiedBy(reviews.getModifiedBy());
                    dto.setRating(reviews.getRating());
                    dto.setComment(reviews.getComment());
                    this.reviews.add(dto);
                }
            }
            if (!ObjectUtils.isEmpty(entity.getServicePrice())) {
                this.servicePrice = new ServicePriceDto(entity.getServicePrice(), false);
            }
            this.notes = entity.getNotes();
            this.status = entity.getStatus();
        }
    }

    public AppointmentsDto(Appointments entity, boolean simple) {
        if(entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            if (!ObjectUtils.isEmpty(entity.getUser())) {
                this.user = new UserDto(entity.getUser(), false);
            }
            if (!ObjectUtils.isEmpty(entity.getServicePrice())) {
                this.servicePrice = new ServicePriceDto(entity.getServicePrice(), false);
            }
            this.notes = entity.getNotes();
            this.status = entity.getStatus();
        }
    }
}
