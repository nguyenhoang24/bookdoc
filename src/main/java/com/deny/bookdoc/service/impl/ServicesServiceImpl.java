package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.domain.Services;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.ServicesDto;
import com.deny.bookdoc.repository.ServicesRepository;
import com.deny.bookdoc.service.ServicesService;
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
public class ServicesServiceImpl implements ServicesService {

    @Autowired
    private ServicesRepository servicesRepository;

    @PersistenceContext
    private EntityManager manager;

    @Override
    public ServicesDto saveOrUpdate(ServicesDto dto) {
        Services entity = null;
        if (dto.getId() != null) {
            entity = servicesRepository.findById(dto.getId()).orElse(null);
        }
        if (entity == null) {
            entity = new Services();
        }
        if (dto.getName() != null) {
            entity.setName(dto.getName());
        }
        if (dto.getDescription() != null) {
            entity.setDescription(dto.getDescription());
        }
        entity = servicesRepository.save(entity);
        return new ServicesDto(entity);
    }

    @Override
    public ServicesDto findById(UUID id) {
        if (id != null) {
            return servicesRepository.findByID(id);
        }
        return null;
    }

    @Override
    public boolean deleteById(UUID id) {
        if (id != null) {
            Services entity = servicesRepository.findById(id).orElse(null);
            if (entity != null) {
                servicesRepository.deleteById(id);
                return true;
            }
        }
        return false;
    }

    @Override
    public Page<ServicesDto> paging(PagingDto dto) {
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
        String sqlCount = "select count(entity.id) from Services as entity ";
        String sql = "select new com.deny.bookdoc.dto.ServicesDto(entity) from Services as entity ";

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

        Query q = manager.createQuery(sql, ServicesDto.class);
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
        List<ServicesDto> entities = q.getResultList();
        long count = (long) qCount.getSingleResult();

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<ServicesDto> result = new PageImpl<ServicesDto>(entities, pageable, count);

        return result;
    }
}
