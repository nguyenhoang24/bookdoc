package com.deny.bookdoc.service;

import com.deny.bookdoc.dto.WorkScheduleDto;

import java.util.UUID;

public interface WorkScheludeService {

    WorkScheduleDto saveOrUpdate(WorkScheduleDto dto);

    WorkScheduleDto findById(UUID id);

    boolean deleteById(UUID id);
}
