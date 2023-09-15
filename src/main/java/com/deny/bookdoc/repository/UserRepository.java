package com.deny.bookdoc.repository;

import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("Select new com.deny.bookdoc.dto.UserDto(u) from User u")
    List<UserDto> getAll();

    @Query("Select new com.deny.bookdoc.dto.UserDto(u) from User u where u.id =?1")
    UserDto findByID(Long id);

    @Query("Select u from User u where u.username like %?1%")
    User findByUserName(String userName);
}
