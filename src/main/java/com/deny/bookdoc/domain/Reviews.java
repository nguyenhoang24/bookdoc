package com.deny.bookdoc.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "tbl_reviews")
public class Reviews extends BaseObject{

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "appointments_id")
    private Appointments appointments;

    @Column(name = "rating")
    private Integer rating; //điểm đánh giá từ 1-5

    @Column(name = "comment", columnDefinition = "TEXT")
    private String comment; // bình luận đánh giá
}
