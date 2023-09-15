package com.deny.bookdoc.dto;

import lombok.Data;

import java.util.Date;

@Data
public class AuditableBaseDto {
    protected Date createdDate;
    protected String createdBy;
    protected Date modifiedDate;
    protected String modifiedBy;
}
