package com.deny.bookdoc.repository;

import com.deny.bookdoc.domain.Appointments;
import com.deny.bookdoc.dto.AppointmentsDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointments, UUID> {
    @Query("Select new com.deny.bookdoc.dto.AppointmentsDto(a) from Appointments a where a.id =?1")
    AppointmentsDto findByID(UUID id);
}
