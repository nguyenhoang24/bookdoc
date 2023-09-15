import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { PermanentAddressStatus } from 'src/app/_models/permanent-address-status.model';
import { PermanentAddressStatusCreateUpdateComponent } from './permanent-address-status-create-update/permanent-address-status-create-update.component';
import { PermanentAddressStatusService } from './permanent-address-status.service';

@Component({
  selector: 'app-permanent-address-status',
  templateUrl: './permanent-address-status.component.html',
  styleUrls: ['./permanent-address-status.component.scss'],
})
export class PermanentAddressStatusComponent implements OnInit {
  rows: PermanentAddressStatus[] = [];
  selected = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    { name: 'Mã', prop: 'code', visible: true },
    { name: 'Tên', prop: 'name', visible: true },
    { name: 'Mô tả', prop: 'description', visible: true }
  ];

  constructor(
    private service: PermanentAddressStatusService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { };

  get visibleColumns() {
    return this.columns.filter(column => column.visible);
  }

  get f() { return this.searchForm.controls; }

  get searchObject() {
    return this.searchForm.value;
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10
    })

    this.reloadTable();
  };

  submitSearch() {
    this.searchForm.get('pageIndex').setValue(1);
    this.reloadTable();
  }

  public onLimitChange(event): void {
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

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  reloadTable() {
    this.isLoading = true;
    this.service.pagingPermanentAddressStatus(this.searchForm.value)
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
    this.dialog.open(PermanentAddressStatusCreateUpdateComponent).afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  update(occupation: PermanentAddressStatus) {
    this.service.getPermanentAddressStatus(occupation.id)
      .subscribe({
        next: (response) => {
          this.dialog.open(PermanentAddressStatusCreateUpdateComponent, {
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
    this.service.deletePermanentAddressStatus(id)
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
        title: "Bạn có chắc chắn muốn xóa nghề nghiệp này",
        text: "Bạn sẽ không thể khôi phục sau khi xóa nghề nghiệp này!",
        onYesClick: () => { this.delete(id) }
      }
    });
  }
}
