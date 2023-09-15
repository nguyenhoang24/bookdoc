import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { PopulationGroup } from 'src/app/_models/population-group.model';
import { PopulationGroupCreateUpdateComponent } from './population-group-create-update/population-group-create-update.component';
import { PopulationGroupService } from './population-group.service';

@Component({
  selector: 'vex-population-group',
  templateUrl: './population-group.component.html',
  styleUrls: ['./population-group.component.scss']
})
export class PopulationGroupComponent implements OnInit {

  rows: PopulationGroup[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    { name: 'Mã đối tượng', prop: 'code', visible: true },
    { name: 'Tên đối tượng', prop: 'name', visible: true },
  ];

  constructor(
    private service: PopulationGroupService,
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
    this.service.pagingPopulationGroup(this.searchForm.value)
      .subscribe({
        next: (response) => {
          this.rows = response?.content;
          this.totalElements = response?.totalElements || 0;
          this.totalPages = response?.totalPages || 0;
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      })
  }

  create() {
    this.dialog.open(PopulationGroupCreateUpdateComponent).afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  update(populationGroup: PopulationGroup) {
    this.service.getPopulationGroup(populationGroup.id).subscribe({
      next: (response) => {
        this.dialog.open(PopulationGroupCreateUpdateComponent, {
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
    this.service.deletePopulationGroup(id)
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
        title: "Are you sure want to remove this Occupation",
        text: "You will not be able to recover this Occupation!",
        onYesClick: () => { this.delete(id) }
      }
    });
  }
}
