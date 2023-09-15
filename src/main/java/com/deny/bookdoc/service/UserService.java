package com.deny.bookdoc.service;

import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.UserDto;
import org.springframework.data.domain.Page;

public interface UserService {
    UserDto saveOrUpdate(UserDto userDto);

    UserDto findById(Long id);

    User findByUserName(String username);

    boolean deleteById(Long id);

    Page<UserDto> pagingDoctor(PagingDto dto);

    UserDto getCurrentUser(String token);
}
