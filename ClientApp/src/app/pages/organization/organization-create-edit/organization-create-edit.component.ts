import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { OrganizationService } from '../organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/_models/organization.model';
import { SearchObject } from 'src/app/_interfaces/search-object';


@Component({
  selector: 'vex-organization-create-edit',
  templateUrl: './organization-create-edit.component.html',
  styleUrls: ['./organization-create-edit.component.scss']
})
export class OrganizationCreateEditComponent implements OnInit {

  id!: string;
  parentId!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  urlCurrent: string;
  level: number;

  submitted = false;
  specimenQualityControl: FormControl;
  disableTextbox = true;
  listParent: Organization[] = []
  listLevel: any[] = [
    { id: 0, name: "Cấp trung ương" },
    { id: 1, name: "Cấp tỉnh" },
    { id: 2, name: "Cấp huyện" },
    { id: 3, name: "Cấp xã" },
    { id: 4, name: "Viện khu vực" }
  ]
  searchObject: SearchObject = {
    pageIndex: 1,
    pageSize: 1000
  }


  constructor(
    private service: OrganizationService,
    private fb: UntypedFormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.parentId = this.route.snapshot.params['parentId'];
    this.urlCurrent = this.router.url;
    this.isCreateMode = !this.id;
    this.form = this.fb.group({
      id: null,
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      parentId: null,
      level: [null, [Validators.required]],
    })
    this.getOrganizationParent(this.parentId);
    if (!this.isCreateMode) {
      this.service.getOrganization(this.id)
        .subscribe(x => this.form.patchValue(x));
    }
    this.service.pagingOrganization(this.searchObject)
      .subscribe(x => {
        this.listParent = x.content;
      });
  }
  get f() { return this.form.controls; }
  getOrganizationParent(id: string) {
    if (id) {
      if (id != 'null') {
        this.service.getOrganization(id).subscribe({
          next: (res) => {
            console.log(res)
            this.level = 2;
          },
          error: (error) => {
            console.log(error);
            this.alertService.error("Đã có lỗi vui lòng thử lại!");
          }
        })
      } else {
        this.level = 1;
      }
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;

    const organization = this.form.value;
    this.service.saveOrUpdateOrganization(organization)
      .subscribe({
        next: (response) => {
          this.alertService.success(this.isCreateMode ? "Thêm mới thành công!" : "Sửa thành công");
          if (this.isCreateMode) {
            this.router.navigate(["unit/child"]);
            if (this.level == 2) {
              this.router.navigate(["unit/child/getChildren/" + this.parentId]);
            } else {
              this.router.navigate(["unit/child"]);
            }
          } else {
            // trong trường hợp sửa
            this.service.getOrganization(this.id).subscribe({
              next: (res) => {
                if (this.level == 2) {
                  this.router.navigate(["unit/child/getChildren/" + this.parentId]);
                } else {
                  this.router.navigate(["unit/child"]);
                }
              },
              error: (error) => {
                console.log(error);
              }
            })
          }
        }
      })
  }
}
