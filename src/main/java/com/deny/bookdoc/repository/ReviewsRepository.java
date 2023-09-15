package com.deny.bookdoc.repository;

import com.deny.bookdoc.domain.Reviews;
import com.deny.bookdoc.dto.ReviewsDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, UUID> {
    @Query("Select new com.deny.bookdoc.dto.ReviewsDto(r) from Reviews r where r.id =?1")
    ReviewsDto findByID(UUID id);
}
