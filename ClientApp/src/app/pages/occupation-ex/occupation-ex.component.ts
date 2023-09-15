import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Occupation } from 'src/app/_models/occupation.model';
import { OccupationExService } from './occupation-ex.service';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation-ex.component.html',
  styleUrls: ['./occupation-ex.component.scss']
})
export class OccupationExComponent implements OnInit, AfterViewInit {
  rows: Occupation[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  searchObject: SearchObject = {
    pageIndex: 1,
    pageSize: 10

  }
  // visibleColumns: string[];
  displayedColumns = ["code", "name", "description"];

  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  dataSource: MatTableDataSource<Occupation> = new MatTableDataSource();

  @Input()
  columns: TableColumn<Occupation>[] = [
    { label: 'Code', property: 'code', type: 'text', visible: true },
    { label: 'Name', property: 'name', type: 'text', visible: true },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  constructor(
    private service: OccupationExService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router
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

    this.dataSource = new MatTableDataSource();
    this.reloadTable();
  }

  submitSearch() {
    this.searchObject.keyword = this.searchForm.value.keyword;
    this.searchObject.pageIndex = 1;
    this.reloadTable();
  }

  handlePageEvent(event: PageEvent) {
    this.searchObject.pageIndex = event.pageIndex + 1;
    this.searchObject.pageSize = event.pageSize;
    this.reloadTable();
  }

  reloadTable() {
    this.isLoading = true;
    this.service.pagingOccupations(this.searchObject)
      .subscribe({
        next: (response) => {
          this.dataSource.data = response?.content;
          this.totalElements = response?.totalElements;
          // this.paginator.pageIndex = this.searchObject.pageIndex;
          // this.paginator.pageSize = this.searchObject.pageSize;
          // this.paginator.length = response.totalElements;
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      })
  }

  delete(id: string) {
    this.service.deleteOccupation(id)
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


  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  // trackByProperty<T>(index: number, column: TableColumn<T>) {
  //   return column.property;
  // }

}
