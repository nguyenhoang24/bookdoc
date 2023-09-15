package com.deny.bookdoc.repository;

import com.deny.bookdoc.datatype.ERole;
import com.deny.bookdoc.domain.Role;
import com.deny.bookdoc.dto.RoleDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    @Query("Select new com.deny.bookdoc.dto.RoleDto(r) from Role r where r.roleName = ?1")
    Optional<RoleDto> findByRoleName(ERole roleName);
}
