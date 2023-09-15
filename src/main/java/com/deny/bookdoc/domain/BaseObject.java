package com.deny.bookdoc.domain;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.UUID;

@MappedSuperclass
@Data
public abstract class BaseObject extends AuditableBase{

    @Id
    @GeneratedValue
    @Column(name = "id", columnDefinition = "VARCHAR(255)")
    @Type(type = "uuid-char")
    protected UUID id;

}
