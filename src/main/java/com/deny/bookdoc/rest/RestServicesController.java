package com.deny.bookdoc.rest;

import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ServicesDto;
import com.deny.bookdoc.dto.response.MessageResponse;
import com.deny.bookdoc.service.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/services")
public class RestServicesController {

    @Autowired
    private ServicesService servicesService;

    @PostMapping("/saveOrUpdate")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ServicesDto> saveOrUpdate(@RequestBody ServicesDto servicesDto) {
        ServicesDto services = servicesService.saveOrUpdate(servicesDto);
        return new ResponseEntity<>(services, (services != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServicesDto> findById(@PathVariable("id") UUID id) {
        ServicesDto services = servicesService.findById(id);
        return new ResponseEntity<>(services, (services != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('DOCTOR')")
    public ResponseEntity<?> delete(@PathVariable("id") UUID id) {
        if (!servicesService.deleteById(id)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error delete!"));
        }
        return ResponseEntity.ok().body(new MessageResponse("Delete sucessfully"));
    }

    @PostMapping("/paging")
    public ResponseEntity<Page<ServicesDto>> paging(@RequestBody PagingDto pagingDto) throws Exception{
        Page<ServicesDto> result = servicesService.paging(pagingDto);
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/test")
    public String test() {
        return "ok";
    }
}
