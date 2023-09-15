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

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  breadcrumbs: breadcrumb[] = [];
  rows: any[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  searchObject: any = {
    pageIndex: 1,
    pageSize: 10,
    parentId: null,
    provinceId: null,
    districtId: null,
    communeId: null,
  }
  titlePage: string = "Danh sách tài khoản";
  // rowSelected: User = new User();
  id: string = null;
  level: number = null;
  urlCurrent: string = '';
  @ViewChild(DatatableComponent) public table: DatatableComponent;

  @Input()
  columns = [
    {name: 'Tài khoản', prop: 'username', visible: true},
    {name: 'Tên', prop: 'displayName', visible: true},
    {name: 'Quyền', prop: 'roles', visible: true},
    {name: 'Email', prop: 'email', visible: true},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService,
    private toastr: ToastrService,
    private service: UserService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.breadcrumbs = [
      {text: "Quản lý tài khoản", link: null},
    ]

    this.searchForm = this.formBuilder.group({
      active: null,
      roles: null,
      groups: null,
      pageIndex: 1,
      pageSize: 10
    })

    this.reloadTable();
  }

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
    if (pageInfo.offset >= 0) {
      this.searchObject.pageIndex = pageInfo.offset + 1;
      this.reloadTable();
    }

  }

  pagingUsers() {
    this.isLoading = true;
    this.service.pagingUsers(this.searchForm.value)
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
    this.service.deleteUser(id).subscribe(
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

  // handleGetChildren(row: User){
  //   this.id = row.id ? row.id :null;
  //   this.rowSelected = row;
  //   this.router.navigate(["setting/healthOrganization/" + row.id]);
  //   this.reloadTable();
  // }

  handleEdit(id: string) {
    this.router.navigate([this.layoutService.rootRouter + "setting/account/edit/" + id]);
  }

  handleCreate() {
    this.router.navigate([this.layoutService.rootRouter + "setting/account/create"]);
  }

  handlePermission(id: string) {
    this.router.navigate([this.layoutService.rootRouter + "setting/account/permisson/" + id]);
  }

}
