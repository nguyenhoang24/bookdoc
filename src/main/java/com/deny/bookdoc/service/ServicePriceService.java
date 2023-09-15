package com.deny.bookdoc.service;

import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ServicePriceDto;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface ServicePriceService {
    ServicePriceDto saveOrUpdate(ServicePriceDto dto);

    ServicePriceDto findById(UUID id);

    boolean deleteById(UUID id);

    Page<ServicePriceDto> paging(PagingDto dto);
}
