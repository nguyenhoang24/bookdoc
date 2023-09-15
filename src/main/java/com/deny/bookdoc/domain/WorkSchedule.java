package com.deny.bookdoc.domain;

import lombok.Getter;
import lombok.Setter;
import org.joda.time.LocalTime;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "tbl_work_schedule")
public class WorkSchedule extends BaseObject {
    // Bảng lịch làm việc

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id", unique = true)
    private User doctor;

    @Column(name = "start_time")
    private LocalTime startTime;

    @Column(name = "end_time")
    private LocalTime endTime;
}
