package com.deny.bookdoc.rest;

import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ReviewsDto;
import com.deny.bookdoc.dto.response.MessageResponse;
import com.deny.bookdoc.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/reviews")
public class RestReviewsController {

    @Autowired
    private ReviewsService reviewsService;

    @PostMapping("/saveOrUpdate")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<ReviewsDto> saveOrUpdate(@RequestBody ReviewsDto reviews) {
        ReviewsDto reviewsDto = reviewsService.saveOrUpdate(reviews);
        return new ResponseEntity<>(reviewsDto, (reviewsDto != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewsDto> findById(@PathVariable("id") UUID id) {
        ReviewsDto reviews = reviewsService.findById(id);
        return new ResponseEntity<>(reviews, (reviews != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('DOCTOR')")
    public ResponseEntity<?> delete(@PathVariable("id") UUID id) {
        if (!reviewsService.deleteById(id)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error delete!"));
        }
        return ResponseEntity.ok().body(new MessageResponse("Delete sucessfully"));
    }

    @PostMapping("/paging")
    public ResponseEntity<Page<ReviewsDto>> paging(@RequestBody PagingDto pagingDto) throws Exception{
        Page<ReviewsDto> result = reviewsService.paging(pagingDto);
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
