package com.deny.bookdoc.repository;

import com.deny.bookdoc.domain.WorkSchedule;
import com.deny.bookdoc.dto.WorkScheduleDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface WorkScheduleRepository extends JpaRepository<WorkSchedule, UUID> {

    @Query("Select new com.deny.bookdoc.dto.WorkScheduleDto(w) from WorkSchedule w where w.id =?1")
    WorkScheduleDto findByID(UUID id);

    @Query("Select new com.deny.bookdoc.dto.WorkScheduleDto(w) from WorkSchedule w where w.doctor.id =?1")
    WorkScheduleDto findByDoctor(Long id);
}
