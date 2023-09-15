package com.deny.bookdoc.dto;

import com.deny.bookdoc.domain.BaseObject;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Data
public abstract class BaseObjectDto extends AuditableBaseDto {
    protected UUID id;

    public UUID getId() {
        return id;
    }

    public BaseObjectDto() {

    }

    public void setId(UUID id) {
        this.id = id;
    }


}
