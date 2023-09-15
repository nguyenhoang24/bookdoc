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
import { PopUpChooseHealthOrgComponent } from './pop-up-choose-health-org/pop-up-choose-health-org.component';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
  breadcrumbs: breadcrumb[] = [];
  rows: any[] = [];
  searchForm: SearchObject | any = null;
  isLoading = false;
  totalElements: number = 0;
  totalPages: number = 0;
  user: User;
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
    { name: 'STT', prop: '', visible: true, width: 100 , render: (_, __, index) => index + 1},
    {name: 'Tên cơ sở', prop: 'healthOrg.shortName', visible: true},
    { name: 'Thao tác', prop: 'function', visible: true, width: 100 },
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
    this.id = this.route.snapshot.params['id'];
    this.service.getUser(this.id).subscribe({
      next: (response)=>{
        this.user = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.breadcrumbs = [
      {text: "Quản lý quyền tài khoản", link: null},
    ]

    this.searchForm = this.formBuilder.group({
      pageIndex: 1,
      pageSize: 10
    })

    this.reloadTable();
  }

  ngAfterContentChecked(){
    this.cdr.detectChanges();
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

  reloadTable() {
    this.isLoading = true;
    this.service.getListUserHealthOrg(this.id)
      .subscribe({
        next: (response) => {
          this.rows = response;
          console.log(this.rows)
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      })
  }

  handleOpenPopup() {
    this.dialog.open(PopUpChooseHealthOrgComponent, {
      disableClose: true,
      width: '1400px',
      data: {
        title: "Chọn cơ sở",
        confirmButtonText: "Lưu thông tin",
        data: this.user,
        reloadTable: () => {
          this.reloadTable();
        }
      }
    });
  }


  delete(id: string) {
    this.service.deleteUserHealOrg(id).subscribe(
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

  handlePermission() {
    this.router.navigate([this.layoutService.rootRouter + "setting/account/create"]);
  }

}
