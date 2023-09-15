import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { DataTablePagerComponent as SuperDataTablePagerComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'globits-datatable-pager',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'datatable-pager'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobitsPaginatorComponent extends SuperDataTablePagerComponent {
  @Input() pagerLeftArrowIcon: string = 'datatable-icon-left';
  @Input() pagerRightArrowIcon: string = 'datatable-icon-right';
  @Input() pagerPreviousIcon: string = 'datatable-icon-prev';
  @Input() pagerNextIcon: string = 'datatable-icon-skip';

  @Input() pageSizeOptions: number[] = [5, 10, 20, 50];
  @Input() pageSizeOptions1000: number[] = [10, 25, 50, 100, 250, 500, 1000];
  @Input() public isMax1000: boolean = false;

  @Output() limitChange = new EventEmitter();
  onLimitChange(event) {
    this.limitChange.emit(event);
    this.canPrevious()
  }

  @Input()
  set size(val: number) {
    this._size = val;
    this.pages = this.calcPages();
  }

  get size(): number {
    return this._size;
  }

  @Input()
  set count(val: number) {
    this._count = val;
    this.pages = this.calcPages();
  }

  get count(): number {
    return this._count;
  }

  @Input()
  set page(val: number) {
    this._page = val;
    this.pages = this.calcPages();
  }

  get page(): number {
    return this._page;
  }

  get totalPages(): number {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }

  @Output() change: EventEmitter<any> = new EventEmitter();

  public _visiblePagesCount: number = 5;

  public _breakPoint: number = Math.floor(this._visiblePagesCount / 2) + 1;

  @Input()
  set visiblePagesCount(val: number) {
    this._visiblePagesCount = val;
    this.pages = this.calcPages();
  }

  get visiblePagesCount(): number {
    return this._visiblePagesCount;
  }

  get firstOffset(): number {
    var firstOffset = 1;
    if (this._page > 1) {
      firstOffset = (this._page - 1) * this._size + 1;
    }
    return firstOffset;
  }

  get lastOffset(): number {
    var lastOffset = this._count;
    if ((this._page * this._size) < this._count) {
      lastOffset = this._page * this._size;
    }
    return lastOffset;
  }

  _count: number = 0;
  _page: number = 1;
  _size: number = 0;
  pages: any;

  showFirst(): boolean {
    if (this.totalPages <= this._visiblePagesCount) {
      return false;
    } else {
      return this.page > this._breakPoint;
    }


  }
  showLast(): boolean {
    if (this.totalPages <= this._visiblePagesCount) {
      return false;
    } else {
      return this.totalPages - this.page >= this._breakPoint;
    }

  }

  canPrevious(): boolean {
    this.selectPage(1);
    return this.page > 1;
  }

  canNext(): boolean {
    this.selectPage(this.totalPages);
    return this.page < this.totalPages;
  }

  prevPage(): void {
    this.selectPage(this.page - 1);
  }

  nextPage(): void {
    this.selectPage(this.page + 1);
  }

  selectPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;

      this.change.emit({
        page
      });
    }
  }

  calcPages(page?: number): any[] {
    const pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    const maxSize = this.visiblePagesCount;
    const isMaxSized = maxSize < this.totalPages;

    page = page || this.page;

    if (isMaxSized) {
      startPage = page - Math.floor(maxSize / 2);
      endPage = page + Math.floor(maxSize / 2);

      if (startPage < 1) {

        startPage = 1;
        endPage = Math.min(startPage + maxSize - 1, this.totalPages);
      } else if (endPage > this.totalPages) {

        startPage = Math.max(this.totalPages - maxSize + 1, 1);
        endPage = this.totalPages;
      }
    }

    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: <string><any>num
      });
    }

    return pages;
  }
}
