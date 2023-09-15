package com.deny.bookdoc.dto;

import com.deny.bookdoc.datatype.ERole;
import com.deny.bookdoc.domain.Role;
import com.deny.bookdoc.domain.User;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class RoleDto extends AuditableBaseDto{
    private Long id;
    private ERole roleName;
    private Set<UserDto> listUsers = new HashSet<>();

    public RoleDto() {

    }

    public RoleDto(Role entity) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            this.roleName = entity.getRoleName();
            if (entity.getListUsers() != null && entity.getListUsers().size() > 0) {
                this.listUsers = new HashSet<>();
                for (User user : entity.getListUsers()) {
                    UserDto dto = new UserDto();
                    dto.setId(user.getId());
                    dto.setCreatedDate(user.getCreatedDate());
                    dto.setCreatedBy(user.getCreatedBy());
                    dto.setModifiedDate(user.getModifiedDate());
                    dto.setModifiedBy(user.getModifiedBy());
                    dto.setUsername(user.getUsername());
                    dto.setPassword(user.getPassword());
                    dto.setFullName(user.getFullName());
                    dto.setStatus(user.getStatus());
                    dto.setEmail(user.getEmail());
                    dto.setPhone(user.getPhone());
                    dto.setAddress(user.getAddress());
                    this.listUsers.add(dto);
                }
            }
        }
    }

    public RoleDto(Role entity, boolean simple) {
        if (entity != null) {
            this.id = entity.getId();
            this.createdDate = entity.getCreatedDate();
            this.createdBy = entity.getCreatedBy();
            this.modifiedDate = entity.getModifiedDate();
            this.modifiedBy = entity.getModifiedBy();
            this.roleName = entity.getRoleName();
        }
    }

    public static Role conveterToEntity(RoleDto roleDto){
        Role entity = new Role();
        entity.setId(roleDto.getId());
        entity.setCreatedDate(roleDto.getCreatedDate());
        entity.setCreatedBy(roleDto.getCreatedBy());
        entity.setModifiedDate(roleDto.getModifiedDate());
        entity.setModifiedBy(roleDto.getModifiedBy());
        entity.setRoleName(roleDto.getRoleName());
        if (roleDto.getListUsers() != null && roleDto.getListUsers().size() > 0) {
            Set<User> listUsers = new HashSet<>();
            for (UserDto userDto : roleDto.getListUsers()) {
                User user = new User();
                user.setId(userDto.getId());
                user.setCreatedDate(userDto.getCreatedDate());
                user.setCreatedBy(userDto.getCreatedBy());
                user.setModifiedDate(userDto.getModifiedDate());
                user.setModifiedBy(userDto.getModifiedBy());
                user.setUsername(userDto.getUsername());
                user.setPassword(userDto.getPassword());
                user.setFullName(userDto.getFullName());
                user.setStatus(userDto.getStatus());
                user.setEmail(userDto.getEmail());
                user.setPhone(userDto.getPhone());
                user.setAddress(userDto.getAddress());
                listUsers.add(user);
            }
        }
        return entity;
    }
}
