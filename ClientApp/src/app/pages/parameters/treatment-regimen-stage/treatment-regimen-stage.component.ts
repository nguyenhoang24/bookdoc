import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { ValueSet } from 'src/app/_models/value-set.model';
import { TreatmentRegimenStageCreateEditComponent } from './treatment-regimen-stage-create-edit/treatment-regimen-stage-create-edit.component';
import {TreatmentRegimenStageService} from "./treatment-regimen-stage.service";

@Component({
  selector: 'treatment-regimen-stage',
  templateUrl: './treatment-regimen-stage.component.html',
  styleUrls: ['./treatment-regimen-stage.component.scss']
})
export class TreatmentRegimenStageComponent implements OnInit {

  rows: ValueSet[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input() columns = [
    { name: 'Mã', prop: 'code', visible: true },
    { name: 'Tên', prop: 'value', visible: true },
    { name: 'Mô tả', prop: 'description', visible: true }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private service: TreatmentRegimenStageService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10,
      type: 'treatment-regimen-stage',
    });
    this.reloadTable();
  }
  get f() { return this.searchForm.controls; }

  get visibleColumns() {
    return this.columns.filter(column => column.visible);
  }

  get searchObject() {
    return this.searchForm.value;
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
    this.service.pagingTreatmentRegimenStage(this.searchForm.value)
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
    this.dialog.open(TreatmentRegimenStageCreateEditComponent).afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  update(value: ValueSet) {
    // this.service.getTransmissionRoute(value.id).subscribe({
    //   next: (response) => {
    //     this.dialog.open(ResultAntiCreateEditComponent, {
    //       data: response
    //     }).afterClosed().subscribe(result => {
    //       this.reloadTable();
    //     });
    //   }, error: (error) => {
    //     console.log(error);
    //     this.isLoading = false;
    //   }
    // })
  }

  delete(id: string) {
    this.service.deleteTreatmentRegimenStage(id)
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
        title: "Bạn có chắc chắn muốn xóa hành vi này không?",
        text: "Bạn sẽ không thể khôi phục hành vi này!!",
        onYesClick: () => { this.delete(id) }
      }
    });
  }

}
