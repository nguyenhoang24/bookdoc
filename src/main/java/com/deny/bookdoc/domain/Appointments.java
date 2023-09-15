package com.deny.bookdoc.domain;

import lombok.Getter;
import lombok.Setter;
import org.joda.time.LocalDateTime;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "tbl_appointments")
public class Appointments extends BaseObject{
    //Bảng lịch hẹn

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_price_id")
    private ServicePrice servicePrice;

    @OneToMany(mappedBy = "appointments", fetch = FetchType.LAZY)
    private Set<Reviews> reviews;

    @Column(name = "appointment_date_time")
    private LocalDateTime appointmentDateTime; // ngày giờ hẹn

    private String notes;

    @Column(name = "status")
    private Integer status; //Trạng thái xác nhận
}
