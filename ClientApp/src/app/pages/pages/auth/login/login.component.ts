import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../_services/auth.service';
import { TokenStorageService, } from '../../../../_services/token-storage.service';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { AlertService } from 'src/app/_services/alert.service';
import { LayoutService } from 'src/@vex/services/layout.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {
  submitted = false;
  form: UntypedFormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  inputType = 'password';
  visible = false;
  errorMessage = '';
  roles: string[] = [];
  loading = false;
  returnUrl: string;
  isChecked = true;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService,
    // private layoutService: LayoutService,
    private loadingSpinner: NgxSpinnerService

  ) { }

  ngOnInit() {
    this.loadingSpinner.hide();
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  get f() { return this.form.controls; }

  login(): void {
    this.submitted = true;
    let isVaac = false;
    let isTtyt = false;
    if (this.form.invalid)
      return;
    this.loadingSpinner.show()
    this.authService.login(this.form.value)
      .subscribe({
        next: (response) => {
          this.loadingSpinner.hide()
          this.tokenStorage.signOut();
          this.tokenStorage.saveToken(response.token);
          this.tokenStorage.saveUser(response);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          // this.layoutService.getCurrentUser().subscribe({
          //   next: (value: any) => {
          //     if (value) {
          //       this.layoutService.currentUser = value;
          //       value?.roles.map(
          //         role => {
          //           if(role.name === 'ROLE_ADMIN'){
          //             isVaac = true;
          //             isTtyt = true;
          //           }
          //         }
          //       )
          //     }
          //     if(isVaac && isTtyt){
          //       this.tokenStorage.saveAccountIsVaac(true);
          //       this.tokenStorage.saveAccountIsTtyt(true);
          //       this.router.navigate(['/choose-view-account']);
          //     }else{
          //       this.tokenStorage.saveAccountIsTtyt(true);
          //       this.tokenStorage.saveAccountIsVaac(false);
          //       this.router.navigate(['/ttyt/file-management'])
          //     }
          //   }
          // })

          const roles = response.listRoles;
          // Kiểm tra xem có vai trò 'ROLE_ADMIN' trong danh sách không
          const isAdmin = roles.includes('ROLE_ADMIN');
          if (isAdmin) {
            this.tokenStorage.saveAccountIsVaac(true);
            this.tokenStorage.saveAccountIsTtyt(true);
            this.router.navigate(['/choose-view-account']);
          } else {
            this.tokenStorage.saveAccountIsTtyt(true);
            this.tokenStorage.saveAccountIsVaac(false);
            this.router.navigate(['/ttyt/file-management']);
          }
        },
        error: (error) => {
          this.loadingSpinner.hide()
          this.isLoginFailed = true;
          if (error.status === 401) {
            this.alertService.error("Tên đăng nhập hoặc mật khẩu không chính xác!");
          } else {
            this.alertService.error(error.statusText);
          }
        },
        complete: () => {
          isVaac = false;
          isTtyt = false;
        }
      })
  }

}
