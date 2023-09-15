package com.deny.bookdoc.service;

import com.deny.bookdoc.datatype.ERole;
import com.deny.bookdoc.dto.RoleDto;

import java.util.Optional;

public interface RoleService {
    Optional<RoleDto> findByRoleName(ERole roleName);
}
