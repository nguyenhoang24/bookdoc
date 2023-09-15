import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { xorBy } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { breadcrumb } from 'src/app/input.const';
import { AdministrativeUnit } from 'src/app/_models/administrative-unit.model';
import { HealthOrganization } from 'src/app/_models/health-organization.model';
import { UnitService } from '../unit.service';
const ENABLE_DISABLE: { emitEvent: boolean } = { emitEvent: false };

@Component({
  selector: 'unit-create-update',
  templateUrl: './unit-create-update.component.html',
  styleUrls: ['./unit-create-update.component.scss']
})

export class UnitCreateUpdateComponent implements OnInit {
  entity: any;

  isShowForm: boolean = false;

  id!: string;

  form?: UntypedFormGroup;

  listProvince: AdministrativeUnit[] = [];

  listDistrict: AdministrativeUnit[] = [];

  listCommune: AdministrativeUnit[] = [];

  listDistrictLocation: AdministrativeUnit[] = [];

  listCommuneLocation: AdministrativeUnit[] = [];

  listOrgOther: HealthOrganization[] = [];

  isCreateMode!: boolean;

  submitted = false;

  breadcrumbs = [] as breadcrumb[];

  constructor(
    private fb: UntypedFormBuilder,
     private cdr: ChangeDetectorRef,
     private service: UnitService,
     private route: ActivatedRoute,
     private router: Router,
     private toast: ToastrService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isCreateMode = !this.id;
    this.breadcrumbs = [
      {link: "setting/health-organization", text: 'Đơn vị y tế'},
      {link: null, text: this.isCreateMode ? 'Tạo mới' : 'Chỉnh sửa'}
    ];
    if (!this.isCreateMode) {
      //edit
      this.service.getOne(this.id).subscribe(x => {
        console.log(x);
        // this.form.patchValue(x);
        this.entity = x;
        this.initForm();
        this.getProvinceAdminUnit();
        this.getDistrictAdminUnit;
        this.getDistrictLocation();
        this.getProvinceLocation();
      })
    }
    if (this.isCreateMode) {
      this.entity = {};
      this.initForm();
    }

  }

  initForm(){
    this.service.getAllParent(1, 1000)
    .subscribe(x => {
      this.listProvince = x.content;
    });
    if(this.id){
      this.service.getAllOrgWithoutSeft(this.id)
      .subscribe(x => {
        this.listOrgOther = x || [];
      });
    }else{
      this.service.getAll()
      .subscribe(x => {
        this.listOrgOther = x || [];
      });
    }


    this.form = new FormGroup({
      id: new FormControl(this.entity?.id),
      code: new FormControl(this.entity?.code, Validators.required),
      shortName: new FormControl(this.entity?.shortName, Validators.required),
      description: new FormControl(this.entity?.description),
      provinceAdminunit: new FormControl(this.entity?.province || null),
      disctrictAdminunit: new FormControl(this.entity?.district || null),
      communeAdminunit: new FormControl(this.entity?.commune || null),
      streetAddress: new FormControl(this.entity?.location?.streetAddress),
      provinceLocation: new FormControl(this.entity?.location?.province || null),
      disctrictLocation: new FormControl(this.entity?.location?.district || null),
      communeLocation: new FormControl(this.entity?.location?.commune || null),
      fullName: new FormControl(this.entity?.fullName, Validators.required),
      possition: new FormControl(this.entity?.possition, Validators.required),
      phoneNumber: new FormControl(this.entity?.phoneNumber, Validators.required),
      parent: new FormControl(this.entity?.parent),
      email: new FormControl(this.entity?.email),
      donor: new FormControl(this.entity?.donor),
      otherInformation: new FormControl(this.entity?.otherInformation),
    });
    this.isShowForm = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      this.toast.warning("Lưu thông tin thất bại vì thông tin chưa đầy đủ. Vui lòng kiểm tra lại", 'Cảnh báo');
      return;
    }
    let data = this.form.getRawValue()
    data.adminUnit =   data.communeAdminunit || data.disctrictAdminunit || data.provinceAdminunit;
    data.adminUnitId = (data.provinceAdminunit?.id || null)|| (data.disctrictAdminunit?.id || null )|| (data.communeAdminunit?.id || null);
    data.location = { streetAddress:  data.streetAddress, commune: data.communeLocation, district: data.disctrictLocation, province: data.provinceLocation }
    console.log(data)
    this.service.save(data)
      .subscribe({
        next: (response) => {
          this.toast.success(this.isCreateMode ? "Thêm mới thành công!" : "Cập nhật thành công!", "Thông báo!");
          this.router.navigate(["list-unit"]);
        },
        error: (error) => {
          console.log(error)
          this.toast.error(this.isCreateMode ? "Thêm mới thất bại!" : "Cập nhật thất bại", "Thông báo");
        }
      })

  }

  get f() { return this.form?.controls; }

  getProvinceAdminUnit() {
    let val = this.form.get("provinceAdminunit").value
    const district = this.form.get("disctrictAdminunit");
    if (val) {
      this.service.getAllChildrenByParentId(val.id, 1, 1000 )
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

  getDistrictAdminUnit() {
    let val = this.form.get("disctrictAdminunit").value
    const commune = this.form.get("communeAdminunit");
    if (val) {
      this.service.getAllChildrenByParentId(val.id, 1, 1000 )
        .subscribe(x => {
          this.listCommune = x?.content || [];
          if (!x?.content?.some(item => item?.id === commune?.value?.id)) {
            commune.reset();
          }
        });
    } else {
      commune.reset();
    }
  }

  getProvinceLocation() {
    let val = this.form.get("provinceLocation").value
    const district = this.form.get("disctrictLocation");
    if (val) {
      this.service.getAllChildrenByParentId(val.id, 1, 1000 )
        .subscribe(x => {
          this.listDistrictLocation = x?.content || [];
          if (!x?.content?.some(item => item?.id === district?.value?.id)) {
            district.reset();
          }
        });
    } else {
      district.reset();
    }
  }

  getDistrictLocation() {
    let val = this.form.get("disctrictLocation").value
    const commune = this.form.get("communeLocation");
    if (val) {
      this.service.getAllChildrenByParentId(val.id, 1, 1000 )
        .subscribe(x => {
          this.listCommuneLocation = x?.content || [];
          if (!x?.content?.some(item => item?.id === commune?.value?.id)) {
            commune.reset();
          }
        });
    } else {
      commune.reset();
    }
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }
}
