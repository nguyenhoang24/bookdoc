package com.deny.bookdoc.service;

import com.deny.bookdoc.dto.AppointmentsDto;
import com.deny.bookdoc.dto.PagingDto;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface AppointmentsService {
    AppointmentsDto saveOrUpdate(AppointmentsDto dto);

    AppointmentsDto findById(UUID id);

    boolean deleteById(UUID id);

    Page<AppointmentsDto> paging(PagingDto dto);

    AppointmentsDto confirmAppointments(UUID id);

    AppointmentsDto cancelAppointments(UUID id);
}
