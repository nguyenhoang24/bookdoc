package com.deny.bookdoc.repository;

import com.deny.bookdoc.domain.ServicePrice;
import com.deny.bookdoc.dto.ServicePriceDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ServicePriceRepository extends JpaRepository<ServicePrice, UUID> {
    @Query("Select new com.deny.bookdoc.dto.ServicePriceDto(sp) from ServicePrice sp where sp.id =?1")
    ServicePriceDto findByID(UUID id);
}
