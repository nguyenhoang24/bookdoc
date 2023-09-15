import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HealthOrganization } from 'src/app/_models/health-organization.model';
import { User } from 'src/app/_models/user.model';
import { breadcrumb } from 'src/app/input.const';
import { UserService } from 'src/app/pages/user/user.service';
import { HealthOrgService } from './health-org.service';

@Component({
  selector: 'create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss']
})
export class CreateNewAccountComponent {

  form: UntypedFormGroup;

  breadcrumbs: any;

  listRole = [] as User[];

  listHealthOrg = [] as HealthOrganization[];

  id?: string;

  isAddingSuccess: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private service: UserService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private healthOrgService: HealthOrgService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.breadcrumbs = [
      {link: null, text: 'Quản lý tài khoản'},
      {link: null, text: this.id ? 'Cập nhật' : 'Tạo mới'}
    ];
    this.initForm();
    if(this.id){
      this.isAddingSuccess = true;
      // this.form.addControl('org', this.fb.control('', Validators.required))
      this.service.getUser(this.id).subscribe(
        (response) => {
          let role = [];
          this.form.patchValue(response);
          this.form.get('confirmPassword').setValue(this.form.get('password').value)
          response.roles.forEach(element => {
            role.push(element.id);
          });

          this.form.get('roles').setValue(role)
        }
      )
    }
  }

  initForm(){
    this.form = this.fb.group({
      displayName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password:  new FormControl(null, Validators.required),
      confirmPassword:  new FormControl(null, Validators.required),
      email:  new FormControl(null, [Validators.required, Validators.email], ),
      roles:  new FormControl(null, Validators.required),
      active: true,
    }, {validators: this.Validators()});
    this.service.getRole().subscribe(
      (value) => this.listRole = value
    )
    this.healthOrgService.getAllHealthOrg().subscribe(
      (value) => this.listHealthOrg = value
    )
  }

  ngAfterContentChecked(){
    this.cdr.detectChanges();
  }

  Validators(): ValidatorFn {
    return (f: AbstractControl) => {
      let password = f.get('password');
      let confirmPassword = f.get('confirmPassword');

      if(password?.value && confirmPassword?.value){
        if(password.value !== confirmPassword.value){
          confirmPassword.setErrors({'pwNotMath': true})
        }else{
          confirmPassword.setErrors(null)
        }
      }
      return null;
    }
  }

  getErrorMessage(controlName: string) {
    if(controlName === "confirmPassword" && this.form.get('confirmPassword').errors){
      if(this.form.get('confirmPassword').errors?.['pwNotMath']){
        return 'Mật khẩu không trùng khớp';
      }else if(this.form.get('confirmPassword').errors?.['required']){
        return 'Mật khẩu xác nhận không được để trống';
      }
    }else if(controlName === "password" && this.form.get('password').errors){
      if(this.form.get('password').errors?.['required']){
        return 'Mật khẩu không được để trống';
      }
    }else if(controlName === "email" && this.form.get('email').errors){
      if(this.form.get('email').errors?.['email']){
        return 'Email không đúng định dạng';
      }
    }else if(controlName === "displayName" && this.form.get('displayName').errors){
      if(this.form.get('displayName').errors?.['required']){
        return 'Họ và tên không được để trống';
      }
    }else if(controlName === "username" && this.form.get('username').errors){
      if(this.form.get('username').errors?.['required']){
        return 'Tên tài khoản không được để trống';
      }
    }
  }

  back(){
    this.router.navigate(['/setting/account']);
  }

  onSubmit(){
    debugger
    let roles = [];
    let body = this.form.getRawValue();
    body?.roles?.forEach(element => {
      roles.push({id: element})
    });
    body['roles'] = roles;
    // Cập nhật user nếu tồn tại id
    if(this.id){
      body['id'] = this.id
      if(this.form.valid){
        this.service.updateUser(body).subscribe(
          {
            next: (response)=>{
              this.toastr.success('Sửa tài khoản thành công!', 'Thông báo')
              this.router.navigate(['/setting/account'])
            },
            error: (err) => {
              this.toastr.warning('Sửa tài khoản thất bại!', 'Thông báo')
            }
          }
        )
      }
    }else{
      // Thêm một user mới
      if(this.form.valid){
        this.service.saveOrUpdateUser(body).subscribe(
          {
            next: (response)=>{
              this.isAddingSuccess = true;

              this.toastr.success('Thêm mới tài khoản thành công vui lòng chọn tổ chức y tế!', 'Thông báo')
              this.router.navigate([`/setting/account/edit/${response?.id}`]);
            },
            error: (err) => {
              this.isAddingSuccess = false;
              this.toastr.warning('Thêm mới tài khoản thất bại!', 'Thông báo')
            }
          }
        )
      }
    }
  }

  get f(){
    return this.form.controls;
  }

}
