package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.datatype.ERole;
import com.deny.bookdoc.domain.Role;
import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.RoleDto;
import com.deny.bookdoc.dto.UserDto;
import com.deny.bookdoc.repository.UserRepository;
import com.deny.bookdoc.service.RoleService;
import com.deny.bookdoc.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.joda.time.DateTime;
import org.joda.time.LocalDateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PersistenceContext
    private EntityManager manager;

    @Value("${ra.jwt.secret}")
    private String JWT_SECRET;

    @Override
    public UserDto saveOrUpdate(UserDto userDto) {
        User entity = null;
        if (userDto.getUsername() != null) {
            entity = userRepository.findByUserName(userDto.getUsername());
        }
        if (entity == null && userDto.getId() != null) {
            entity = userRepository.findById(userDto.getId()).orElse(null);
        }
        if (entity == null) {
            entity = new User();
        }
        if (userDto.getUsername() != null) {
            entity.setUsername(userDto.getUsername());
        }
        if (userDto.getPassword() != null) {
            entity.setPassword(passwordEncoder.encode(userDto.getPassword()));
        }
        if (userDto.getFullName() != null) {
            entity.setFullName(userDto.getFullName());
        }
        if (userDto.getStatus() != null) {
            entity.setStatus(userDto.getStatus());
        }
        if (userDto.getEmail() != null) {
            entity.setEmail(userDto.getEmail());
        }
        if (userDto.getPhone() != null) {
            entity.setPhone(userDto.getPhone());
        }
        if (userDto.getAddress() != null) {
            entity.setAddress(userDto.getAddress());
        }
        Set<RoleDto> listRoles = new HashSet<>();
        if (userDto.getListRoles() == null) {
            RoleDto role = roleService.findByRoleName(ERole.ROLE_USER).orElseThrow();
            listRoles.add(role);
        } else {
            userDto.getListRoles().forEach(roleDto -> {
                switch (roleDto) {
                    case "admin":
                        RoleDto roleAdmin = roleService.findByRoleName(ERole.ROLE_ADMIN).orElseThrow();
                        listRoles.add(roleAdmin);
                        break;
                    case "doctor":
                        RoleDto roleDoctor = roleService.findByRoleName(ERole.ROLE_DOCTOR).orElseThrow();
                        listRoles.add(roleDoctor);
                        break;
                    case "user":
                        RoleDto roleUser = roleService.findByRoleName(ERole.ROLE_USER).orElseThrow();
                        listRoles.add(roleUser);
                        break;
                }
            });
        }
        Set<Role> listRolesEntity = listRoles.stream()
                .map(RoleDto::conveterToEntity)
                .collect(Collectors.toSet());
        entity.setListRoles(listRolesEntity);
        entity = userRepository.save(entity);
        return new UserDto(entity);
    }

    @Override
    public UserDto findById(Long id) {
        if (id != null) {
            return userRepository.findByID(id);
        }
        return null;
    }

    @Override
    public User findByUserName(String username) {
        if (username != null && !username.equals("")) {
            return userRepository.findByUserName(username);
        }
        return null;
    }

    @Override
    public boolean deleteById(Long id) {
        // Đổi trạng thái (status = 0) chứ không xóa
        if (id != null) {
            User user = userRepository.findById(id).orElse(null);
            if (user != null) {
                user.setStatus(0);
                return true;
            }
        }
        return false;
    }

    @Override
    public Page<UserDto> pagingDoctor(PagingDto dto) {
        if (dto == null) {
            return null;
        }
        int pageIndex = dto.getPageIndex();
        int pageSize = dto.getPageSize();

        if (pageIndex > 0) {
            pageIndex--;
        } else {
            pageIndex = 0;
        }
        String whereClause = " where (1=1) ";
        String sqlCount = "select count(entity.id) from User as entity ";
        String sql = "select new com.deny.bookdoc.dto.UserDto(entity) from User as entity JOIN entity.listRoles r ON r.roleName = 'ROLE_DOCTOR' ";

//		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
//			whereClause += " AND (entity.visitCode LIKE :text) ";
//		}

        if (dto.getFromDate() != null) {
            whereClause += " AND ( entity.createDate >= :fromDate) ";
        }

        if (dto.getToDate() != null) {
            whereClause += " AND ( entity.createDate <= :toDate) ";
        }
        sql += whereClause;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, UserDto.class);
        Query qCount = manager.createQuery(sqlCount);

//		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
//			q.setParameter("text", '%' + dto.getText().trim() + '%');
//			qCount.setParameter("text", '%' + dto.getText().trim() + '%');
//		}

        if (dto.getFromDate() != null) {
            DateTime dateTime = new DateTime(dto.getFromDate());
            LocalDateTime fromDate = dateTime.toLocalDateTime();
            DateTimeFormatter formatter = DateTimeFormat.forPattern("yyyy-MM-dd HH:mm:ss");
            q.setParameter("fromDate", fromDate);
            qCount.setParameter("fromDate", fromDate);
        }

        if (dto.getToDate() != null) {
            DateTime dateTime = new DateTime(dto.getToDate());
            LocalDateTime toDate = dateTime.toLocalDateTime();
            q.setParameter("toDate", toDate);
            qCount.setParameter("toDate", toDate);
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<UserDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<UserDto> result = new PageImpl<UserDto>(entities, pageable, count);

        return result;
    }

    @Override
    public UserDto getCurrentUser(String token) {
        Claims claims = Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token).getBody();
        //Kiểm tra thông tin từ token
        String username = claims.getSubject();
        if (username == null) {
            return null;
        }
        User user = userRepository.findByUserName(username);
        UserDto userDto = null;
        if (user != null) {
            userDto = this.findById(user.getId());
            if (userDto != null) {
                return userDto;
            }
        }
        return null;
    }
}
