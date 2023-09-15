import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { ToastrService } from 'ngx-toastr';
import { UnitService } from 'src/app/pages-vaac-report/list-unit/unit.service';
import { UserService } from 'src/app/pages/user/user.service';
import { AdministrativeUnit } from 'src/app/_models/administrative-unit.model';
import { HealthOrganization } from 'src/app/_models/health-organization.model';
import { UserHealthOrg } from 'src/app/_models/user-healthorg.model';
import { HealthOrgService } from '../../create-new-account/health-org.service';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'pop-up-choose-health-org',
  templateUrl: './pop-up-choose-health-org.component.html',
  styleUrls: ['./pop-up-choose-health-org.component.scss']
})


export class PopUpChooseHealthOrgComponent implements OnInit {
  title: string;
  confirmButtonText: string;
  cancelButtonText: string;
  listHealthOrg = [] as HealthOrganization[];
  form: UntypedFormGroup;
  newValueForm : any[] = [];
  listOfOrg = [];
  selectionType = SelectionType;
  selected = [];

  columns = [] as Object[];

  totalElements: number = 0;

  totalPages: number = 0;

  isLoading = false;

  listProvince: AdministrativeUnit[] = [];

  listDistrict: AdministrativeUnit[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private service: UserService,
    private toastr: ToastrService,
    private healthOrgService: HealthOrgService,
    private unitService: UnitService,
    private cdr: ChangeDetectorRef
  ) { }

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

  reloadTable(){
    this.isLoading = true;
    this.unitService.pagingOrg(this.form.value).subscribe({
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

  onSelect(selected) {
    this.selected = selected;
  }

  ngOnInit(): void {
    this.columns = columns;
    this.title = this.defaults.title;
    this.confirmButtonText = this.defaults.confirmButtonText || "Xác nhận";
    this.cancelButtonText = this.defaults.cancelButtonText || "Hủy";
    console.log(this.defaults);
    this.unitService.getAllParent(1, 1000)
    .subscribe(x => {
      this.listProvince = x.content;
    });
    this.initForm();
    this.reloadTable();
  }

  getProvinceAdminUnit() {
    let val = this.form.get("provinceId").value
    const district = this.form.get("districtId");
    if (val) {
      this.unitService.getAllChildrenByParentId(val, 1, 1000 )
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

  initForm() {
    // this.form = this.fb.group({
    //   userHealthOrgs: new FormControl(null, Validators.required),
    // })
    this.form = this.fb.group({
      nameOrg: null,
      provinceId: null,
      districtId: null,
      text: null,
      pageIndex: 1,
      pageSize: 10,
    })
    this.healthOrgService.getAllHealthOrg().subscribe(
      (value) => this.listHealthOrg = value
    )
  }

  ngAfterContentChecked(){
    this.cdr.detectChanges();
  }

  onSubmit(){
    let data = this.form.getRawValue();
    for(let item of this.selected){
      this.newValueForm.push({user: this.defaults?.data, healthOrg: item});
    }
    data.userHealthOrgs = this.newValueForm;
    if(this.form.valid){
      console.log(data)
      this.service.saveListUserHealOrg(this.newValueForm).subscribe({
        next: (response)=>{
          this.toastr.success('Chọn cơ sở y tế thành công', 'Thông báo');
          this.defaults.reloadTable();
          this.dialog.closeAll()
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  onNoClick() {
    this.dialog.closeAll()
  }

  close(answer: string) {
    this.dialog.closeAll();
  }

  get f(){
    return this.form.controls;
  }

  removeOrg(row) {
    const index = this.selected.findIndex(item => row?.id == item.id);
    if (index > -1) {
      this.selected.splice(index, 1);
    }
  }
}

export const columns = [
  { name: 'STT', prop: '', visible: true, width: 100 , render: (_, __, index) => index + 1},
  { name: 'Mã CSKCB', prop: 'code', visible: true, width: 100 },
  { name: 'Tên CSKCB', prop: 'shortName', visible: true, width: 100 },
  { name: 'Tỉnh thành', prop: 'location.province.name', visible: true, width: 100,},
  { name: 'Quận huyện', prop: 'location.district.name', visible: true, width: 100,},
];
