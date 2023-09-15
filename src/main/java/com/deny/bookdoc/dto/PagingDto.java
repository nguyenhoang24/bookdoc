package com.deny.bookdoc.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PagingDto {
    private Integer pageIndex;
    private Integer pageSize;
    private String code;
    private String name;
    private String text;
    private Date fromDate;
    private Date toDate;
    private Date startDate;
    private Date endDate;
}
