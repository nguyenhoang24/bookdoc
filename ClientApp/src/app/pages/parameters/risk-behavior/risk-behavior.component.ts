import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { RiskBehavior } from 'src/app/_models/risk-behavior.model';
import { RiskBehaviorCreateUpdateComponent } from './risk-behavior-create-update/risk-behavior-create-update.component';
import { RiskBehaviorService } from './risk-behavior.service';

@Component({
  selector: 'risk-behavior',
  templateUrl: './risk-behavior.component.html',
  styleUrls: ['./risk-behavior.component.scss']
})
export class RiskBehaviorComponent implements OnInit {


  rows: RiskBehavior[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    { name: 'Mã hành vi', prop: 'code', visible: true },
    { name: 'Tên hành vi', prop: 'name', visible: true },
  ];

  constructor(
    private service: RiskBehaviorService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10
    })
    this.reloadTable();
  }


  get searchObject() {
    return this.searchForm.value;
  };

  get f() { return this.searchForm.controls; };

  get visibleColumns() {
    return this.columns.filter(column => column.visible);
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
      this.searchObject.pageIndex = pageInfo.offset + 1;
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
    this.service.pagingRiskBehavior(this.searchObject)
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
    this.dialog.open(RiskBehaviorCreateUpdateComponent).afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  update(riskBehavior: RiskBehavior) {
    this.service.getRiskBehavior(riskBehavior.id).subscribe({
      next: (response) => {
        this.dialog.open(RiskBehaviorCreateUpdateComponent, {
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
    this.service.deleteRiskBehavior(id)
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
