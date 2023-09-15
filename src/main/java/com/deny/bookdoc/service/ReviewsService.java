package com.deny.bookdoc.service;

import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ReviewsDto;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface ReviewsService {
    ReviewsDto saveOrUpdate(ReviewsDto dto);

    ReviewsDto findById(UUID id);

    boolean deleteById(UUID id);

    Page<ReviewsDto> paging(PagingDto dto);
}
