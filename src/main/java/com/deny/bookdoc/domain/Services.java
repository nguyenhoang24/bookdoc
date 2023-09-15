package com.deny.bookdoc.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "tbl_services")
public class Services extends BaseObject{
    //Dịch vụ
    @Column(name = "name", unique = true)
    private String name; // tên dịch vụ

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "services", fetch = FetchType.LAZY)
    private Set<ServicePrice> servicePrices;
}
