import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { NgxSpinnerService } from 'ngx-spinner';
import { LayoutService } from 'src/@vex/services/layout.service';
import { breadcrumb } from 'src/app/input.const';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { AdministrativeUnit } from 'src/app/_models/administrative-unit.model';
import { AdministrativeUnitService } from './administrative-unit.service';

@Component({
  selector: 'administrative-unit',
  templateUrl: './administrative-unit.component.html',
  styleUrls: ['./administrative-unit.component.scss']
})
export class AdministrativeUnitComponent implements OnInit {
  rows: AdministrativeUnit[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  searchObject: SearchObject = {
    pageIndex: 1,
    pageSize: 10
  }
  titlePage: string = "Đơn vị hành chính";
  titleLevel: number = 0;
  rowSelected: AdministrativeUnit = new AdministrativeUnit();
  id: string = null;
  isGetChildren: boolean = false;
  level: number = null;
  breadcrumbs: breadcrumb[] = [];
  nameProvince: string = '';
  nameDistrict: string = '';
  urlCurrent: string = '';
  ColumnMode = ColumnMode;

  //  dataSource: MatTableDataSource<AdministrativeUnit> = new MatTableDataSource();
  // @Input()
  // columns: TableColumn<AdministrativeUnit>[] = [
  //   { label: 'Mã', property: 'code', type: 'text', visible: true },
  //   { label: 'Tên', property: 'name', type: 'text', visible: true },
  //   { label: 'Thứ tự', property: 'position', type: 'text', visible: true },
  //   { label: 'PQM', property: 'pqmCode', type: 'text', visible: true },
  //   { label: 'HTC Elog', property: 'elogCode', type: 'text', visible: true },
  //   { label: 'HIV Info', property: 'hivInfoCode', type: 'text', visible: true },
  //   { label: 'Hành Động', property: 'actions', type: 'button', visible: true },
  // ];

  @ViewChild(DatatableComponent) public table: DatatableComponent;
  @Input()
  columns = [
    { name: 'Mã', prop: 'code', visible: true },
    { name: 'Tên', prop: 'name', visible: true },
  ];


  constructor(
    private service: AdministrativeUnitService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService,
    private loading: NgxSpinnerService

  ) { }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
    this.urlCurrent = this.router.url;
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getAdministrativeUnit(this.id);
    }
    this.handleChangeUrl();
    this.searchForm = this.formBuilder.group({
      keyword: null,
      pageIndex: 1,
      pageSize: 10
    })
    this.reloadTable();
  }

  handleChangeUrl() {
    if (this.urlCurrent.includes("getDistrict")) {
      this.level = 1;
      this.titlePage = "Quản lý Quận/Huyện"
      this.nameProvince = this.rowSelected?.name;
      this.nameDistrict = null;
      // this.breadcrumbs = [this.nameProvince, 'Quản lý quận huyện'];
      this.breadcrumbs = [
        { link: "", text: this.nameProvince },
        { link: null, text: 'Quản lý quận huyện' }
      ];
    } else if (this.urlCurrent.includes("getCommune")) {
      this.level = 2;
      this.titlePage = "Quản lý Phường/Xã";
      this.nameDistrict = this.rowSelected?.name;
      this.nameProvince = this.rowSelected?.parentDto?.name
      // this.breadcrumbs = [this.nameProvince, this.nameDistrict,'Quản lý phường xã'];
      this.breadcrumbs = [
        { link: "", text: this.nameProvince },
        { link: "getDistrict/" + this.rowSelected?.parentDto?.id, text: this.nameDistrict },
        { link: null, text: 'Quản lý phường xã' }
      ];
    } else {
      this.level = 0;
      this.titlePage = "Quản lý Tỉnh/Thành Phố";
      this.nameDistrict = null;
      this.nameProvince = null;
      // this.breadcrumbs = ['Quản lý Tỉnh Thành'];
      this.breadcrumbs = [
        { link: null, text: 'Quản lý Tỉnh Thành' }
      ];
    }
  }

  submitSearch() {
    this.searchObject.keyword = this.searchForm.value.keyword;
    this.searchObject.pageIndex = 1;
    this.reloadTable();
  }
  onSelectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.loading.show();
      this.service.uploadExel(event.target.files[0]).subscribe(data => {
        this.loading.hide();
      })
    }
    this.reloadTable();
  }
  handlePageEvent(event: PageEvent) {
    this.searchObject.pageIndex = event.pageIndex + 1;
    this.searchObject.pageSize = event.pageSize;
    this.reloadTable();
  }

  getAdministrativeUnit(id: string) {
    this.service.getAdministrativeUnit(id)
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

  getAllParent() {
    this.isLoading = true;
    this.service.getAllParent(this.searchObject)
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

  reloadTable() {
    if (!this.id) {
      this.getAllParent();
    }
    else {
      this.getListChildren(this.id);
    }
  }

  delete(id: string) {
    this.service.deleteAdministrativeUnit(id)
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
        title: "Bạn có chắc muốn xóa bản ghi này?",
        text: "Bạn sẽ không thể khôi phục bản ghi này!",
        onYesClick: () => { this.delete(id) }
      }
    });
  }


  get visibleColumns() {
    return this.columns.filter(column => column.visible);
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }


  getListChildren(id: string) {
    this.service.getListChildren(id, this.searchObject)
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
  handleGetChildren(row: AdministrativeUnit) {
    this.id = row.id ? row.id : null;
    this.rowSelected = row;
    if (this.level == 0) {
      this.router.navigate([this.layoutService.rootRouter + "setting/location/getDistrict/" + row.id]);
    } else {
      this.router.navigate([this.layoutService.rootRouter + "setting/location/getCommune/" + row.id]);
    }
    this.reloadTable();
  }

  handleEdit(id: string) {
    this.router.navigate([this.layoutService.rootRouter + "setting/location/edit/" + id]);
  }
  handleCreate() {
    this.router.navigate([this.layoutService.rootRouter + "setting/location/create/" + (this.id ? this.id : "null")]);
  }


}
