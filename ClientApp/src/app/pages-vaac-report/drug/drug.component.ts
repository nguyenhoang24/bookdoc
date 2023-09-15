import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { LayoutService } from 'src/@vex/services/layout.service';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { breadcrumb } from 'src/app/input.const';
import { UserService } from 'src/app/pages/user/user.service';
import { DrugService } from './drug.service';
import { DrugCreateEditComponent } from './drug-create-edit.component';
import { Drug } from 'src/app/_models/drug.model';
import { NgxSpinnerService } from 'ngx-spinner';
// import { WidgetLargeGoalChartComponent } from 'src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component';

@Component({
  selector: 'drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {
  breadcrumbs: breadcrumb[] = [];
  rows: any[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  searchObject: SearchObject = {
    pageIndex: 1,
    pageSize: 10,
  }
  titlePage: string = "Danh sách tài khoản";
  // rowSelected: User = new User();
  id: string = null;
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    {name: 'Mã', prop: 'code', visible: true},
    {name: 'Tên', prop: 'name', visible: true},
    {name: 'Thành phần', prop: 'activeIngredient', visible: true},

  ];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService,
    private toastr: ToastrService,
    private service: DrugService,
    private cdr: ChangeDetectorRef,
    private loading: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.breadcrumbs = [
      {text: "Quản lý danh mục thuốc", link: null},
    ]

    this.searchForm = this.formBuilder.group({
      text: null,
      pageIndex: 1,
      pageSize: 10
    })

    this.reloadTable();
  }

  get f() { return this.searchForm.controls; }


  ngAfterContentChecked(){
    this.cdr.detectChanges();
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

  public onLimitChange(event): void {
    this.searchObject.pageSize = parseInt(event.target.value, 10);
    this.searchObject.pageIndex = 1;
    this.reloadTable();
  }

  setPage(pageInfo) {
    console.log(pageInfo);
    this.searchForm.get('pageIndex').setValue(pageInfo.offset + 1)
    if (pageInfo.offset >= 0) {
      this.searchObject.pageIndex = pageInfo.offset + 1;
      this.reloadTable();
    }

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

  pagingUsers() {
    this.isLoading = true;
    this.service.pagingDrug(this.searchForm.value)
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
    this.pagingUsers();
  }

  delete(id: string) {
    this.service.deleteDrug(id).subscribe(
      {
        next: (response) => {
          this.toastr.success('Xoá bản ghi thành công', 'Thông báo')
          this.reloadTable();
        },
        error: (err) => {
          this.toastr.warning('Xoá bản ghi thất bại', 'Thông báo')
        }
      }
    )
  }

  handleDelete(id: string) {
    this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
      width: '400px',
      data: {
        title: "Bạn có chắc muốn xóa bản ghi này?",
        text: "Bạn sẽ không thể khôi phục bản ghi này!",
        onYesClick: () => {
          this.delete(id)
        }
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

  handleOpenPopupFormDrug(id?: string) {
    if (id) {
      this.service.getOne(id).subscribe((response) => {
        if (response) {
          this.dialog.open(DrugCreateEditComponent, {  height: '350px', width: '550px', data: response })
            .afterClosed().subscribe(this.onClosePopup);
        }
      });
    } else {
      this.dialog.open(DrugCreateEditComponent, { height: '350px', width: '550px', data: new Drug() })
            .afterClosed().subscribe(this.onClosePopup);
    }
  }

  onClosePopup = (result) => {
    if (result) {
      this.reloadTable()
    }
  }

  handleCreate() {
    this.router.navigate([this.layoutService.rootRouter + "setting/account/create"]);
  }
}
