package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.domain.Appointments;
import com.deny.bookdoc.domain.Reviews;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ReviewsDto;
import com.deny.bookdoc.repository.AppointmentsRepository;
import com.deny.bookdoc.repository.ReviewsRepository;
import com.deny.bookdoc.service.ReviewsService;
import org.joda.time.DateTime;
import org.joda.time.LocalDateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ReviewsServiceImpl implements ReviewsService {

    @Autowired
    private ReviewsRepository reviewsRepository;

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @PersistenceContext
    private EntityManager manager;

    @Override
    public ReviewsDto saveOrUpdate(ReviewsDto dto) {
        Reviews entity = null;
        if (dto.getId() != null) {
            entity = reviewsRepository.findById(dto.getId()).orElse(null);
        }
        if (entity == null) {
            entity = new Reviews();
        }
        if (dto.getAppointments() != null) {
            Appointments appointments = appointmentsRepository.findById(dto.getAppointments().getId()).orElse(null);
            entity.setAppointments(appointments);
        }
        if (dto.getRating() != null) {
            entity.setRating(dto.getRating());
        }
        if (dto.getComment() != null) {
            entity.setComment(dto.getComment());
        }
        entity = reviewsRepository.save(entity);
        return new ReviewsDto(entity);
    }

    @Override
    public ReviewsDto findById(UUID id) {
        if (id != null) {
            return reviewsRepository.findByID(id);
        }
        return null;
    }

    @Override
    public boolean deleteById(UUID id) {
        if (id != null) {
            Reviews entity = reviewsRepository.findById(id).orElse(null);
            if (entity != null) {
                reviewsRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }

    @Override
    public Page<ReviewsDto> paging(PagingDto dto) {
        if (dto == null) {
            return null;
        }
        int pageIndex = dto.getPageIndex();
        int pageSize = dto.getPageSize();

        if (pageIndex > 0) {
            pageIndex--;
        } else {
            pageIndex = 0;
        }
        String whereClause = " where (1=1) ";
        String sqlCount = "select count(entity.id) from Reviews as entity ";
        String sql = "select new com.deny.bookdoc.dto.ReviewsDto(entity) from Reviews as entity ";

//		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
//			whereClause += " AND (entity.visitCode LIKE :text) ";
//		}

        if (dto.getFromDate() != null) {
            whereClause += " AND ( entity.createDate >= :fromDate) ";
        }

        if (dto.getToDate() != null) {
            whereClause += " AND ( entity.createDate <= :toDate) ";
        }
        sql += whereClause;
        sqlCount += whereClause;

        Query q = manager.createQuery(sql, ReviewsDto.class);
        Query qCount = manager.createQuery(sqlCount);

//		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
//			q.setParameter("text", '%' + dto.getText().trim() + '%');
//			qCount.setParameter("text", '%' + dto.getText().trim() + '%');
//		}

        if (dto.getFromDate() != null) {
            DateTime dateTime = new DateTime(dto.getFromDate());
            LocalDateTime fromDate = dateTime.toLocalDateTime();
            DateTimeFormatter formatter = DateTimeFormat.forPattern("yyyy-MM-dd HH:mm:ss");
            q.setParameter("fromDate", fromDate);
            qCount.setParameter("fromDate", fromDate);
        }

        if (dto.getToDate() != null) {
            DateTime dateTime = new DateTime(dto.getToDate());
            LocalDateTime toDate = dateTime.toLocalDateTime();
            q.setParameter("toDate", toDate);
            qCount.setParameter("toDate", toDate);
        }

        int startPosition = pageIndex * pageSize;
        q.setFirstResult(startPosition);
        q.setMaxResults(pageSize);
        List<ReviewsDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<ReviewsDto> result = new PageImpl<ReviewsDto>(entities, pageable, count);

        return result;
    }
}
