import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LayoutService } from 'src/@vex/services/layout.service';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { AdministrativeUnit } from 'src/app/_models/administrative-unit.model';
import { UnitService } from './unit.service';

@Component({
  selector: 'list-unit',
  templateUrl: './list-unit.component.html',
  styleUrls: ['./list-unit.component.scss']
})
export class ListUnitComponent implements OnInit {
  isLoading = false;

  breadcrumbs = [] as any;

  form: UntypedFormGroup;

  columns = [] as Object[];

  totalElements: number = 0;

  totalPages: number = 0;

  listOfOrg = [];

  listProvince: AdministrativeUnit[] = [];

  listDistrict: AdministrativeUnit[] = [];

  constructor(private fb: UntypedFormBuilder,
     private cdr: ChangeDetectorRef,
     private layoutService: LayoutService,
     private router: Router,
     private dialog: MatDialog,
     private service: UnitService,
     private toast: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllParent(1, 1000)
    .subscribe(x => {
      this.listProvince = x.content;
    });
    this.initForm();
    this.columns = columns;
    this.breadcrumbs = [
      { link: null, text: "Quản lý đơn vị" },
      { link: null, text: "Danh sách cơ sở" }
    ]
    this.reloadTable();
  }

  getProvinceAdminUnit() {
    let val = this.form.get("provinceId").value
    const district = this.form.get("districtId");
    if (val) {
      this.service.getAllChildrenByParentId(val, 1, 1000 )
        .subscribe(x => {
          this.listDistrict = x?.content || [];
          if (!x?.content?.some(item => item?.id === district?.value?.id)) {
            district.reset();
          }
        });
    } else {
      district.reset();
    }
  }


  reloadTable(){
    this.isLoading = true;
    this.service.pagingOrg(this.form.value).subscribe({
      next: (response) => {

        this.listOfOrg = response?.content;
        this.totalElements = response?.totalElements;
        this.totalPages = response?.totalPages;
        this.isLoading = false;

        // console.log(this.selected)
      },
      error: (error) => {
        this.isLoading = false;
      }
    })
  }

  onDelete(id: string){
    this.dialog.open(ConfirmDialogComponent,{
      width: '500px',
      data: {
        title: 'Xác nhận xoá lên',
        text: 'Bạn có muốn xoá cơ sở đã chọn ?',
        confirmButtonText: 'Xác nhận',
        cancelButtonText: 'Huỷ',
        onYesClick: () => {
          this.delete(id);
          //this.id == null;
        }
      }
    })
  }


  delete(id: string) {
    this.service.delete(id)
      .subscribe({
        next: () => {
          this.reloadTable();
          this.toast.success("Xoá cơ sở thành công");
          this.dialog.closeAll();
        },
        error: (error) => {

          this.toast.error("Xoá cơ sở thất bại");
        }
      })

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  initForm(){
    this.form = this.fb.group({
      nameOrg: null,
      provinceId: null,
      districtId: null,
      code: null,
      name: null,
      pageIndex: 1,
      pageSize: 10,
    })
  }

  onSubmit(){

  }

  printClick(){

  }

  public onLimitChange(event): void {
    this.form.get('pageSize').setValue(parseInt(event.target.value, 10))
    this.form.get('pageIndex').setValue(1)
    this.reloadTable();
  }

  setPage(pageInfo){
    if (pageInfo.offset >= 0) {
      this.form.get('pageIndex').setValue(pageInfo.page)
      this.reloadTable();
    }
  }

  handleCreate() {
    this.router.navigate([this.layoutService.rootRouter + "list-unit/create/"]);
  }

  handleView(){
    this.router.navigate([this.layoutService.rootRouter + "list-unit/edit/"]);
  }

  handleEdit(row: any){
    this.router.navigate([this.layoutService.rootRouter + "list-unit/edit/"+ row?.id], {state: {data: row}});
  }

  handleDelete(id: string){
    this.service.getOne(id).subscribe({

    })
  }
  get f(){
    return this.form?.controls;
  }
}

export const columns = [
  { name: 'STT', prop: '', visible: true, width: 100 , render: (_, __, index) => index + 1},
  { name: 'Mã CSKCB', prop: 'code', visible: true, width: 100 },
  { name: 'Tên CSKCB', prop: 'shortName', visible: true, width: 100 },
  { name: 'Tỉnh thành', prop: 'location.province.name', visible: true, width: 100,},
  { name: 'Quận huyện', prop: 'location.district.name', visible: true, width: 100,},
  { name: 'Thao tác', prop: 'function', visible: true, width: 100,},
];
