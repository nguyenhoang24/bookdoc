export class PagePaging<Values> {
    content: Values[] = [];
    pageable: PageAble = new PageAble();
    last: boolean = null;
    totalPages: number = null;
    totalElements: number = null;
    size: number = null;
    number: number = null;
    sort: SortPaging = new SortPaging();
    first: boolean = null;
    numberOfElements: number = null;
    empty: boolean = null;
};

export class PageAble {
    sort: SortPaging = new SortPaging();
    offset: number = null;
    pageNumber: number = null;
    pageSize: number = null;
    unpaged: boolean = null;
    paged: boolean = null;
}

export class SortPaging {
    empty: boolean = null;
    sorted: boolean = null;
    unsorted: boolean = null;
}