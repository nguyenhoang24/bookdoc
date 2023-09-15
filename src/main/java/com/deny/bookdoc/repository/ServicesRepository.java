package com.deny.bookdoc.repository;

import com.deny.bookdoc.domain.Services;
import com.deny.bookdoc.dto.ServicesDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ServicesRepository extends JpaRepository<Services, UUID> {
    @Query("Select new com.deny.bookdoc.dto.ServicesDto(s) from Services s where s.id =?1")
    ServicesDto findByID(UUID id);
}
