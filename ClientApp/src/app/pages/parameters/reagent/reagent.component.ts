import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { breadcrumb } from 'src/app/input.const';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Reagent } from 'src/app/_models/reagent.model';
import { ReagentCreateEditComponent } from './reagent-create-edit/reagent-create-edit.component';
import { ReagentService } from './reagent.service';

@Component({
  selector: 'vex-reagent',
  templateUrl: './reagent.component.html',
  styleUrls: ['./reagent.component.scss']
})
export class ReagentComponent implements OnInit, AfterViewInit {
  breadcrumbs: breadcrumb[] = [];
  rows: Reagent[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;

  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    { name: 'Mã', prop: 'code', visible: true },
    { name: 'Tên', prop: 'name', visible: true },
  ];

  constructor(
    private service: ReagentService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10
    })
    this.reloadTable();
    this.breadcrumbs = [
      { link: "/setting/parameter/reagents", text: "Sinh phẩm" }
    ]
  }

  get f() { return this.searchForm.controls; };

  get searchObject() {
    return this.searchForm.value;
  };


  submitSearch() {
    this.searchForm.get('pageIndex').setValue(1);
    this.reloadTable();
  }

  onLimitChange(event): void {
    this.searchForm.get('pageSize').setValue(parseInt(event.target.value, 10));
    this.searchForm.get('pageIndex').setValue(1);
    this.reloadTable();
  }

  setPage(pageInfo) {
    if (pageInfo.offset >= 0) {
      this.searchForm.get('pageIndex').setValue(pageInfo.offset + 1);
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
    this.service.pagingReagent(this.searchObject)
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
    this.dialog.open(ReagentCreateEditComponent).afterClosed().subscribe(result => {
      this.reloadTable();
    })
  }

  update(reagent: Reagent) {
    this.service.getReagent(reagent.id)
      .subscribe({
        next: (response) => {
          this.dialog.open(ReagentCreateEditComponent, {
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
    this.service.deleteReagent(id)
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

  handlePageEvent(event: PageEvent) {
    this.searchObject.pageIndex = event.pageIndex + 1;
    this.searchObject.pageSize = event.pageSize;
    this.reloadTable();
  }

  handleDelete(id: string) {
    this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
      width: '400px',
      data: {
        title: "Bạn có chắc chắn muốn xóa Quốc gia này",
        text: "Bạn sẽ không thể khôi phục Quốc gia này!",
        onYesClick: () => { this.delete(id) }
      }
    });
  }
}
