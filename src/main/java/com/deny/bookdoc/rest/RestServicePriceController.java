package com.deny.bookdoc.rest;

import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ServicePriceDto;
import com.deny.bookdoc.dto.response.MessageResponse;
import com.deny.bookdoc.service.ServicePriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/service-price")
public class RestServicePriceController {

    @Autowired
    private ServicePriceService servicePriceService;

    @PostMapping("/saveOrUpdate")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<ServicePriceDto> saveOrUpdate(@RequestBody ServicePriceDto servicePrice) {
        ServicePriceDto servicePriceDto = servicePriceService.saveOrUpdate(servicePrice);
        return new ResponseEntity<>(servicePriceDto, (servicePriceDto != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServicePriceDto> findById(@PathVariable("id") UUID id) {
        ServicePriceDto servicePrice = servicePriceService.findById(id);
        return new ResponseEntity<>(servicePrice, (servicePrice != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('DOCTOR')")
    public ResponseEntity<?> delete(@PathVariable("id") UUID id) {
        if (!servicePriceService.deleteById(id)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error delete!"));
        }
        return ResponseEntity.ok().body(new MessageResponse("Delete sucessfully"));
    }

    @PostMapping("/paging")
    public ResponseEntity<Page<ServicePriceDto>> paging(@RequestBody PagingDto pagingDto) throws Exception{
        Page<ServicePriceDto> result = servicePriceService.paging(pagingDto);
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
