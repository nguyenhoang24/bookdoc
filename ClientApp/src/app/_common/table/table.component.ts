import { Component, Input, Output, EventEmitter, ElementRef, TemplateRef, ViewChild } from '@angular/core';

export interface ColumnsTable {
  prop?: string;
  name: string;
  visible?: boolean;
  render?: (() => string) | any;
  renderHTML?: () => TemplateRef<any> | ElementRef;
  width?: number;
  textAlign?: string;
  classItem?: string;
  alignItem?: 'center' | 'left' | 'right';
};

interface ItemHeader {
  name: string,
  colSpan?: number;
  rowSpan?: number;
  classItem?: string
}

export type HeaderTable = Array<ItemHeader[]>

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  host: {
    class: 'ngx-datatable material'
  },
})
export class TableComponent {
  @Input() rows = [];
  @Input() listHeader: HeaderTable = []
  @Input() childTemplate: TemplateRef<any>;
  @Input() columns = [];
  @Input() selectRow = false;
  @Input() selection = false;
  @Input() selected = [];
  @Input() selectTableDataRow = false;
  @Input() totalElements = 0;
  @Input() pageIndex: number = 1;
  @Input() pageSize: number = 10;
  @Input() keywordChecked: string = 'id';
  @Input() selectionType: 'single' | 'multi' = 'single';
  @Input() isHiddenFooter: boolean = false;
  @Input() isMax1000: boolean = false;
  @Input() renderClassRow: (item) => string = null;
  @Output() select = new EventEmitter();
  @Output() selectDataRow = new EventEmitter();
  @Output() limitChange = new EventEmitter();
  @Output() change = new EventEmitter();
  @ViewChild('tableContainer') tableContainer: ElementRef = null;

  onSelect(item) {
    let newSelected = this.selected || []
    if (this.selectionType === 'single') {
      if (newSelected[0]?.[this.keywordChecked] !== item[this.keywordChecked]) {
        newSelected = [item]
      } else {
        newSelected = []
      }
    } else {
      const indexItem = newSelected?.findIndex(e => e[this.keywordChecked] === item[this.keywordChecked]);
      if (indexItem !== -1) {
        newSelected?.splice(indexItem, 1);
      } else {
        newSelected?.push(item)
      }
    }
    this.selected = newSelected
    this.select.emit(newSelected);
  }

  onSelectAll() {
    if (this.selected?.length !== this.rows?.length) {
      this.selected = this.rows.map(row => ({ ...row }));
    } else {
      this.selected = []
    }
    this.select.emit(this.selected);
  }

  checkSelected(item): boolean {
    return this.selected?.some(e => e[this.keywordChecked] === item[this.keywordChecked])
  }

  getIn(objValue: any, nameValue: string) {
    if (nameValue) {
      nameValue.split(/[.*+?^${}()|[\]\\]/g).forEach((item: string) => {
        if (item) {
          if (!isNaN(Number(item))) {
            objValue = objValue?.[Number(item)];
          } else {
            objValue = objValue?.[item]
          }
        }
      });
    }
    return objValue
  }

  onLimitChange(event) {
    this.limitChange.emit(event)
  }

  setPageSize(event) {
    this.change.emit({ offset: event?.page - 1, ...event })
  }

  startDragging(e) {
    const slider = this.tableContainer.nativeElement
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    e.target.style.cursor = 'grabbing';

    function handleMousemove(e) {
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    }

    this.tableContainer.nativeElement.addEventListener('mousemove', handleMousemove)

    const handleMouseup = (e) => {
      e.target.style.cursor = 'default';
      e.preventDefault();
      this.tableContainer.nativeElement.removeEventListener('mouseleave', handleMousemove);
      this.tableContainer.nativeElement.removeEventListener('mousemove', handleMousemove);
      this.tableContainer.nativeElement.removeEventListener('mouseup', handleMouseup);
    }
    this.tableContainer.nativeElement.addEventListener('mouseleave', handleMouseup, false);
    this.tableContainer.nativeElement.addEventListener('mouseup', handleMouseup, false);
  };
}
