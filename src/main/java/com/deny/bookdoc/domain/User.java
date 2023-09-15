package com.deny.bookdoc.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
@Entity
@Table(name = "tbl_user")
public class User extends AuditableBase{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(name = "status", nullable = false)
    private Integer status;

    @Column(name = "email")
    private String email;

    @Column(name = "phone", unique = true ,nullable = false)
    private String phone;

    @Column(name = "address")
    private String address;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tbl_user_role", joinColumns = @JoinColumn(name = "user_id"),
                inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> listRoles = new HashSet<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Appointments> appointmentsUser;

    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY)
    private Set<ServicePrice> servicePrices;

    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY)
    private Set<WorkSchedule> workSchedules;
}
