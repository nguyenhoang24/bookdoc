package com.deny.bookdoc.rest;

import com.deny.bookdoc.dto.AppointmentsDto;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.response.MessageResponse;
import com.deny.bookdoc.service.AppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/appointments")
public class RestAppointmentsController {

    @Autowired
    private AppointmentsService appointmentsService;

    @PostMapping("/saveOrUpdate")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<AppointmentsDto> saveOrUpdate(@RequestBody AppointmentsDto appointmentsDto) {
        AppointmentsDto appointments = appointmentsService.saveOrUpdate(appointmentsDto);
        return new ResponseEntity<>(appointments, (appointments != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentsDto> findById(@PathVariable("id")UUID id) {
        AppointmentsDto appointments = appointmentsService.findById(id);
        return new ResponseEntity<>(appointments, (appointments != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('DOCTOR')")
    public ResponseEntity<?> delete(@PathVariable("id") UUID id) {
        if (!appointmentsService.deleteById(id)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error delete!"));
        }
        return ResponseEntity.ok().body(new MessageResponse("Delete sucessfully"));
    }

    @PostMapping("/paging")
    public ResponseEntity<Page<AppointmentsDto>> paging(@RequestBody PagingDto pagingDto) throws Exception{
        Page<AppointmentsDto> result = appointmentsService.paging(pagingDto);
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/confirm-appointments/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AppointmentsDto> confirmAppointments(@PathVariable UUID id) {
        AppointmentsDto appointments = appointmentsService.confirmAppointments(id);
        return new ResponseEntity<>(appointments, (appointments != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
