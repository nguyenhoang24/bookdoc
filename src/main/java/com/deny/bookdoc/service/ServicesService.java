package com.deny.bookdoc.service;

import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ServicesDto;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface ServicesService {

    ServicesDto saveOrUpdate(ServicesDto dto);

    ServicesDto findById(UUID id);

    boolean deleteById(UUID id);

    Page<ServicesDto> paging(PagingDto dto);
}
