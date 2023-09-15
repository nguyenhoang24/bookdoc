package com.deny.bookdoc.dto;

import com.deny.bookdoc.domain.ServicePrice;
import com.deny.bookdoc.domain.Services;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class ServicesDto extends BaseObjectDto {
    private String name; // tên dịch vụ
    private String description;
    private Set<ServicePriceDto> servicePrices;

    public ServicesDto(Services entity) {
        if(entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            this.name = entity.getName();
            this.description = entity.getDescription();
            if (entity.getServicePrices() != null && entity.getServicePrices().size() > 0) {
                this.servicePrices = new HashSet<>();
                for (ServicePrice servicePrice : entity.getServicePrices()) {
                    ServicePriceDto dto = new ServicePriceDto();
                    dto.setId(servicePrice.getId());
                    dto.setCreatedDate(servicePrice.getCreatedDate());
                    dto.setCreatedBy(servicePrice.getCreatedBy());
                    dto.setModifiedDate(servicePrice.getModifiedDate());
                    dto.setModifiedBy(servicePrice.getModifiedBy());
                    dto.setDoctor(new UserDto(servicePrice.getDoctor(), true));
                    dto.setPrice(servicePrice.getPrice());
                    dto.setCurrency(servicePrice.getCurrency());
                    this.servicePrices.add(dto);
                }
            }
        }
    }

    public ServicesDto(Services entity, boolean simple) {
        if(entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            this.name = entity.getName();
            this.description = entity.getDescription();
        }
    }
}
