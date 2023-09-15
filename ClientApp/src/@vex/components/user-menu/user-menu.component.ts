import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/@vex/services/layout.service';
import { AuthService } from 'src/app/_services/auth.service';
import { PopoverRef } from '../popover/popover-ref';
import { Router } from '@angular/router';
import { ProductManualService } from "../../../app/_services/product-manual.service";


@Component({
  selector: 'vex-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  menu: number;

  constructor(
    private productManualService: ProductManualService,
    private readonly popoverRef: PopoverRef,
    private authService: AuthService,
    private router: Router,
    private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.menu = this.popoverRef.data;
  }

  close(): void {
    setTimeout(() => this.popoverRef.close(), 250);
  }
  clickProfile() {
    this.close();
    this.router.navigate([this.layoutService.rootRouter + '/profile']);
  }
  downloadFileDocument() {
    this.close();
    // if (this.layoutService.currentUser?.accountType) {
    //   let url = "";
    //   if (this.layoutService.currentUser.accountType <= 3) {//tài khoản từ tỉnh trở lên
    //     url = "/docs-province";
    //   }
    //   if (this.layoutService.currentUser.accountType == 4) {//tài khoản dvtt tỉnh
    //     url = "/docs-dvtt-province";
    //   }
    //   if (this.layoutService.currentUser.accountType == 5) {//tài khoản huyện
    //     url = "/docs-district";
    //   }
    //   if (this.layoutService.currentUser.accountType == 6) {//tài khoản dvtt huyện
    //     url = "/docs-dvtt-district";
    //   }
    //   if (this.layoutService.currentUser.accountType == 7) {//tài khoản xã
    //     url = "/docs-commune";
    //   }
    //   this.productManualService.documentTT05(url).subscribe(blob => {
    //     if (blob && blob instanceof Blob) {
    //       const a = document.createElement('a');
    //       const objectUrl = URL.createObjectURL(blob);
    //       a.href = objectUrl;
    //       a.download = 'HDSD.docx';
    //       a.click();
    //       URL.revokeObjectURL(objectUrl);
    //     }

    //   })
    // }
  }
  downloadFileSlide() {
    this.close();
    // if (this.layoutService.currentUser?.accountType) {
    //   let url = "";
    //   if (this.layoutService.currentUser.accountType <= 3) {//tài khoản từ tỉnh trở lên
    //     url = "/slide-province";
    //   }
    //   if (this.layoutService.currentUser.accountType == 4) {//tài khoản dvtt tỉnh
    //     url = "/slide-dvtt-province";
    //   }
    //   if (this.layoutService.currentUser.accountType == 5) {//tài khoản huyện
    //     url = "/slide-district";
    //   }
    //   if (this.layoutService.currentUser.accountType == 6) {//tài khoản dvtt huyện
    //     url = "/slide-dvtt-district";
    //   }
    //   if (this.layoutService.currentUser.accountType == 7) {//tài khoản xã
    //     url = "/slide-commune";
    //   }
    //   this.productManualService.documentTT05(url).subscribe(blob => {
    //     if (blob && blob instanceof Blob) {
    //       const a = document.createElement('a');
    //       const objectUrl = URL.createObjectURL(blob);
    //       a.href = objectUrl;
    //       a.download = 'SLIDE_HDSD.pptx';
    //       a.click();
    //       URL.revokeObjectURL(objectUrl);
    //     }

    //   })
    // }
  }
  get isTT05() {
    return this.layoutService.rootRouter.includes("ttyt/");
  }

  logout(): void {
    this.close();
    this.authService.logout();
  }
}
