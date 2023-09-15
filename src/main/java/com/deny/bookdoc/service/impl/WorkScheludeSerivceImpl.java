package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.domain.WorkSchedule;
import com.deny.bookdoc.dto.WorkScheduleDto;
import com.deny.bookdoc.repository.UserRepository;
import com.deny.bookdoc.repository.WorkScheduleRepository;
import com.deny.bookdoc.service.WorkScheludeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
@Transactional
public class WorkScheludeSerivceImpl implements WorkScheludeService {

    @Autowired
    private WorkScheduleRepository workScheduleRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public WorkScheduleDto saveOrUpdate(WorkScheduleDto dto) {
        WorkSchedule entity = null;
        if (dto.getId() != null) {
            entity = workScheduleRepository.findById(dto.getId()).orElse(null);
        }
        if (entity == null) {
            entity = new WorkSchedule();
        }
        if (dto.getDoctor() != null) {
            User doctor = userRepository.findById(dto.getDoctor().getId()).orElse(null);
            entity.setDoctor(doctor);
        }
        if (dto.getStartTime() != null) {
            entity.setStartTime(dto.getStartTime());
        }
        if (dto.getEndTime() != null) {
            entity.setEndTime(dto.getEndTime());
        }
        entity = workScheduleRepository.save(entity);
        return new WorkScheduleDto(entity);
    }

    @Override
    public WorkScheduleDto findById(UUID id) {
        if (id != null) {
            return workScheduleRepository.findByID(id);
        }
        return null;
    }

    @Override
    public boolean deleteById(UUID id) {
        if (id != null) {
            WorkSchedule entity = workScheduleRepository.findById(id).orElse(null);
            if (entity != null) {
                workScheduleRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }
}
