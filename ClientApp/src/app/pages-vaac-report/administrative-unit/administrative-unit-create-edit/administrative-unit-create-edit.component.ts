import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/@vex/services/layout.service';
import { AdministrativeUnit } from 'src/app/_models/administrative-unit.model';
import { AlertService } from 'src/app/_services/alert.service';
import { AdministrativeUnitService } from '../administrative-unit.service';

@Component({
  selector: 'administrative-unit-create-edit',
  templateUrl: './administrative-unit-create-edit.component.html',
  styleUrls: ['./administrative-unit-create-edit.component.scss']
})
export class AdministrativeUnitCreateEditComponent implements OnInit {

  id!: string;
  parentId: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;
  urlCurrent: string;
  level: number;
  objForm: AdministrativeUnit = new AdministrativeUnit();
  constructor(
    private service: AdministrativeUnitService,
    private fb: UntypedFormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.parentId = this.route.snapshot.params['parentId'];
    this.isCreateMode = !this.id;

    this.form = this.fb.group({
      id: null,
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      level: [null],
      parentDto: [null],
    })

    this.getParentUnit(this.parentId);

    if (!this.isCreateMode) {
      this.service.getAdministrativeUnit(this.id)
        .subscribe(x => this.form.patchValue(x));
    }
    this.urlCurrent = this.router.url;
  }

  get f() { return this.form.controls; }

  getParentUnit(id: string) {
    if(id){
      console.log(id)
      if (id != 'null') {
        //tao huyen hoac phuong
        this.service.getAdministrativeUnit(id).subscribe({
          next: (res) => {
            if (res != null && res.parentDto != null) {
              this.level = 5;
              this.form.controls.level.setValue(5); // la xa
            }else{
              this.level = 4;
              this.form.controls.level.setValue(4); // la huyen
            }
          },
          error: (error) => {
            console.log(error);
            this.alertService.error("Đã có lỗi vui lòng thử lại!");
          }
        })
      } else {
        //tap tinh
        // this.form.value.level = 3;
        this.form.controls.level.setValue(3);
      }
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;
    this.objForm = this.form.value;
    if (this.parentId != "null" && this.parentId) {
      // trong trường hợp tạo mới huyện xã
        this.service.saveOrUpdateAdministrativeUnitByParentId(this.objForm, this.parentId)
          .subscribe({
            next: (response) => {
              this.alertService.success(this.isCreateMode ? "Thêm mới thành công!" : "Cập nhật thành công!");
              if (this.level == 5) {
                this.router.navigate([this.layoutService.rootRouter + "setting/location/getCommune/" + this.parentId]);

              } else if (this.level == 4) {
                this.router.navigate([this.layoutService.rootRouter + "setting/location/getDistrict/" + this.parentId]);
              }
            },
            error: (error) => {
              console.log(error)
              this.alertService.error(this.isCreateMode ? "Thêm mới thất bại!" : "Cập nhật thất bại");
            }
          })
      } else {
        // trong trường hợp sửa và tạo mới Tỉnh
        this.service.saveOrUpdateAdministrativeUnit(this.objForm)
          .subscribe({
            next: (response) => {
              this.alertService.success(this.isCreateMode ? "Thêm mới thành công!" : "Cập nhật thành công");
              if (this.isCreateMode) {
                this.router.navigate([this.layoutService.rootRouter + "setting/location"]);
              } else {
                // trong trường hợp sửa
                this.service.getAdministrativeUnit(this.id).subscribe({
                  next: (res) => {
                    if (res.level == 5 ) {
                      this.router.navigate([this.layoutService.rootRouter + "setting/location/getCommune/" + res.parentDto.id]);
                    } else  if (res.level == 4 ) {
                      this.router.navigate([this.layoutService.rootRouter + "setting/location/getDistrict/" + res.parentDto.id]);
                    } else {
                      this.router.navigate([this.layoutService.rootRouter + "setting/location"]);
                    }
                  },
                  error: (error) => {
                    console.log(error);
                  }
                })
              }
            },
            error: (error) => {
              console.log(error)
              this.alertService.error(this.isCreateMode ? "Thêm mới thất bại!" : "Cập nhật thất bại");
            }
          })
    }


  }}
