import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import {AuthService} from "../../../../_services/auth.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {

  form = this.fb.group({
    email: [null, Validators.required],
    username: [null, Validators.required]
  });
  success = false;
  message = "";

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private loading : NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  send() {
    this.message = "";
    this.loading.show();
    this.authService.resetPassword(this.form.value).subscribe(data=>{
      this.loading.hide();
      let rs = data  as any;
      this.success = rs.body;
      this.message = rs.message;
    })
  }

  goBack() {
    window.history.back();
  }
}
