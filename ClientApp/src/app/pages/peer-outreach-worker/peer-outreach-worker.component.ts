import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { PeerOutreachWorker } from 'src/app/_models/peer-outreach-worker.model';
import { PeerOutreachWorkerCreateEditComponent } from './peer-outreach-worker-create-edit/peer-outreach-worker-create-edit.component';
import { PeerOutreachWorkerService } from './peer-outreach-worker.service';

@Component({
  selector: 'vex-peer-outreach-worker',
  templateUrl: './peer-outreach-worker.component.html',
  styleUrls: ['./peer-outreach-worker.component.scss']
})
export class PeerOutreachWorkerComponent implements OnInit {
  selected = [];
  selectionType = SelectionType;
  rows: PeerOutreachWorker[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  searchObject: SearchObject = {
    pageIndex: 1,
    pageSize: 10

  }
  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    { name: 'Họ & Tên đệm', prop: 'firstName', visible: true },
    { name: 'Tên', prop: 'lastName', visible: true },
    { name: 'Tên hiển thị', prop: 'displayName', visible: true },
  ];

  constructor(
    private service: PeerOutreachWorkerService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10
    })
    this.reloadTable();
  }


  submitSearch() {
    this.searchObject.keyword = this.searchForm.value.keyword;
    this.searchObject.pageIndex = 1;
    this.reloadTable();
  }

  public onLimitChange(event): void {
    this.searchObject.pageSize = parseInt(event.target.value, 10);
    this.searchObject.pageIndex = 1;
    this.reloadTable();
  }

  setPage(pageInfo) {
    if (pageInfo.offset >= 0) {
      this.searchObject.pageIndex = pageInfo.offset + 1;
      this.reloadTable();
    }
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible);
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  reloadTable() {
    this.isLoading = true;
    this.service.paging(this.searchObject)
      .subscribe({
        next: (response) => {
          this.rows = response?.content;
          this.totalElements = response?.totalElements;
          this.totalPages = response?.totalPages;
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      })
  }

  create() {
    this.dialog.open(PeerOutreachWorkerCreateEditComponent).afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  update(subject: PeerOutreachWorker) {
    this.service.getPeerOutreachWorker(subject.id).subscribe({
      next: (response) => {
        this.dialog.open(PeerOutreachWorkerCreateEditComponent, {
          data: response
        }).afterClosed().subscribe(result => {
          this.reloadTable();
        });
      }, error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    })
  }

  delete(id: string) {
    this.service.delete(id)
      .subscribe({
        next: () => {
          this.reloadTable();
          this.dialog.closeAll();
        },
        error: (error) => {
          console.log(error)
        }
      })
  }

  handleDelete(id: string) {
    this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
      width: '400px',
      data: {
        title: "Bạn có chắc chắn muốn xóa bản ghi này?",
        text: "Bạn sẽ không thể khôi phục bản ghi này.",
        onYesClick: () => { this.delete(id) }
      }
    });
  }

}
