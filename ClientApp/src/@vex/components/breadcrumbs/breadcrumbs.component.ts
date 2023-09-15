import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/@vex/services/layout.service';
import { trackByValue } from '../../utils/track-by';

@Component({
  selector: 'vex-breadcrumbs',
  template: `
    <div class="flex items-center" style="decoration: none; color: #3699FF; font-size : 20px; font-weight:600">
      <vex-breadcrumb>
        <a [routerLink]="['/']" style="text-decoration: none; color: #3699FF;">
          <mat-icon svgIcon="mat:home" class="icon-sm"></mat-icon>
        </a>
      </vex-breadcrumb>
      <ng-container>
        <vex-breadcrumb>
          <a [routerLink]="['/']" style="text-decoration: none; color: #3699FF;">Trang chủ</a>
        </vex-breadcrumb>
      </ng-container>
      <ng-container *ngFor="let crumb of crumbs; let last = last; trackBy: trackByValue">
        <!-- <div class="w-1 h-1 bg-gray rounded-full ltr:mr-2 rtl:ml-2"></div> -->
        <span style="color: #3699FF" class="ltr:mr-2 rtl:ml-2 mb-1"> > </span>
        <vex-breadcrumb>
          <a [routerLink]="[]" style="text-decoration: none; color: #3699FF">{{ crumb }}</a>
        </vex-breadcrumb>
      </ng-container>
    </div>
  `
})
export class BreadcrumbsComponent implements OnInit {

  @Input() crumbs: string[] = [];

  trackByValue = trackByValue;

  constructor(private router: Router, private layoutService: LayoutService) {
  }

  ngOnInit() {
  }
  clickHome() {
    this.router.navigate([this.layoutService.rootRouter == "ttyt/" ? this.layoutService.rootRouter + "file-management" : this.layoutService.rootRouter]);
  }
}
