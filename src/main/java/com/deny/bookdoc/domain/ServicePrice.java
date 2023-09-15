package com.deny.bookdoc.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "tbl_service_price")
public class ServicePrice extends BaseObject{

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    private User doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "services_id")
    private Services services;

    @OneToMany(mappedBy = "servicePrice", fetch = FetchType.LAZY)
    private Set<Appointments> appointments;

    @Column(name = "price")
    private Double price; // giá dịch vụ

    @Column(name = "currency")
    private String currency; // đơn vị tiền tệ của giá dịch vụ
}
