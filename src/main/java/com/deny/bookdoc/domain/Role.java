package com.deny.bookdoc.domain;

import com.deny.bookdoc.datatype.ERole;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
@Entity
@Table(name = "tbl_role")
public class Role extends AuditableBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "role_name", nullable = false)
    @Enumerated(EnumType.STRING)
    private ERole roleName;

    @ManyToMany(mappedBy = "listRoles", fetch = FetchType.LAZY)
    private Set<User> listUsers = new HashSet<>();
}
