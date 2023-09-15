package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.datatype.ERole;
import com.deny.bookdoc.dto.RoleDto;
import com.deny.bookdoc.repository.RoleRepository;
import com.deny.bookdoc.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Access;
import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public Optional<RoleDto> findByRoleName(ERole roleName) {
        return roleRepository.findByRoleName(roleName);
    }
}
