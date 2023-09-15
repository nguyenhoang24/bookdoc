package com.deny.bookdoc.rest;

import com.deny.bookdoc.dto.WorkScheduleDto;
import com.deny.bookdoc.dto.response.MessageResponse;
import com.deny.bookdoc.service.WorkScheludeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/work-schedule")
public class RestWorkScheduleController {

    @Autowired
    private WorkScheludeService workScheludeService;

    @PostMapping("/saveOrUpdate")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<WorkScheduleDto> saveOrUpdate(@RequestBody WorkScheduleDto WorkScheduleDto) {
        WorkScheduleDto workSchedule = workScheludeService.saveOrUpdate(WorkScheduleDto);
        return new ResponseEntity<>(workSchedule, (workSchedule != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkScheduleDto> findById(@PathVariable("id") UUID id) {
        WorkScheduleDto workSchedule = workScheludeService.findById(id);
        return new ResponseEntity<>(workSchedule, (workSchedule != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('DOCTOR')")
    public ResponseEntity<?> delete(@PathVariable("id") UUID id) {
        if (!workScheludeService.deleteById(id)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error delete!"));
        }
        return ResponseEntity.ok().body(new MessageResponse("Delete sucessfully"));
    }

//    @PostMapping("/paging")
//    public ResponseEntity<Page<WorkScheduleDto>> paging(@RequestBody PagingDto pagingDto) throws Exception{
//        Page<WorkScheduleDto> result = workScheludeService.paging(pagingDto);
//        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
//    }
}
