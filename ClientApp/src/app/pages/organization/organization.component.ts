import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { breadcrumb } from 'src/app/input.const';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Organization } from 'src/app/_models/organization.model';
import { OrganizationService } from './organization.service';

@Component({
  selector: 'vex-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  rows: Organization[] = [];
  rowSelected: Organization = new Organization();
  level: number = null;
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  searchObject: SearchObject = {
    pageIndex: 1,
    pageSize: 10
  }
  urlCurrent: string = '';
  id: string = null;
  breadcrumbs: breadcrumb[] = [];
  nameChilr: string = '';


  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent) public table: DatatableComponent;
  @Input()
  columns = [
    { name: 'Mã', prop: 'code', visible: true },
    { name: 'Cơ sở', prop: 'name', visible: true },
    // { name: 'Dịch vụ', prop: '', visible: true },
    { name: 'Cấp', prop: 'level', visible: true },
    // { name: 'Dự án	', prop: '', visible: true },
    // { name: 'Trạng thái', prop: '', visible: true },
  ];

  constructor(
    private service: OrganizationService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.urlCurrent = this.router.url;
    if (this.id) {
      this.getOrganization(this.id);
    }
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10
    })
    this.reloadTable();
    this.handleChangeUrl();
  }
  handleChangeUrl() {
    if (this.urlCurrent.includes("getChildren")) {
      this.level = 2;
      this.nameChilr = this.rowSelected.name;
      this.breadcrumbs = [
        { link: "unit/child", text: 'Cơ sở trực thuộc' },
        { link: null, text: this.rowSelected.name },
      ];
    } else {
      this.level = 1;
      this.breadcrumbs = [
        { link: "unit/child", text: 'Cơ sở trực thuộc' }
      ];
    }
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

  getOrganization(id: string) {
    this.service.getOrganization(id)
      .subscribe({
        next: (response) => {
          this.rowSelected = response;
          this.handleChangeUrl();
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  reloadTable() {

    if (!this.id) {
      // this.getAllParent();
      this.isLoading = true;
      this.searchObject.parentId = null;
      this.service.pagingOrganization(this.searchObject)
        .subscribe({
          next: (response) => {
            this.rows = response.content;
            this.totalElements = response?.totalElements;
            this.totalPages = response?.totalPages;
            this.isLoading = false;
          },
          error: (error) => {
            console.log(error);
            this.isLoading = false;
          }
        })

    } else {
      // this.getListChildren(this.id);
      this.searchObject.parentId = this.id;
      this.service.pagingOrganization(this.searchObject)
        .subscribe({
          next: (response) => {
            this.rows = response.content;
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
  }

  delete(id: string) {
    this.service.deleteOrganization(id)
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
        title: "Bạn có chắc chắn muốn xóa cơ sở trực thuộc này không?",
        text: "Bạn sẽ không thể khôi phục cơ sở trực thuộc này!",
        onYesClick: () => { this.delete(id) }
      }
    });
  }

  getAllParent() {
    this.isLoading = true;
    this.service.getAllParentOrganization()
      .subscribe({
        next: (response) => {
          this.rows = response;
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


  getListChildren(id: string) {
    this.service.getChildrenOrganization(id, this.searchObject)
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

  handleGetChildren(row: Organization) {
    this.id = row.id ? row.id : null;
    this.rowSelected = row;
    if (this.level == 1) {
      this.router.navigate(["unit/child/getChildren/" + row.id]);
    } else {
      this.router.navigate(["unit/child"]);
    }
    this.reloadTable();
  }
  handleCreate() {
    this.router.navigate(["unit/child/create/"]);
  }
  handleEdit(id: string) {
    this.router.navigate(["unit/child/edit/" + id]);
  }
}
