import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/@vex/services/layout.service';

export interface breadcrumb {
  link: string;
  text: string;
}

export interface Breadcrumb {
  link: string;
  text: string;
}
@Component({
  selector: 'globits-breadcrumbs',
  template: `
      <vex-secondary-toolbar [current]="current">
          <div class="flex items-center">
              <globits-breadcrumb>
                  <a style="color: #3F8DFD" [routerLink]="[]" (click)="clickHome()">
                      <mat-icon>home</mat-icon>
                  </a>
              </globits-breadcrumb>
              <ng-container>
                  <globits-breadcrumb>
                      <a style="color: #3F8DFD ; text-decoration: none;" [routerLink]="[]" (click)="clickHome()">Trang chủ</a>
                  </globits-breadcrumb>
              </ng-container>
              <ng-container *ngFor="let crumb of crumbs; let last = last">
                  <globits-breadcrumb>
                      <span style="color: #3F8DFD;"> > </span>
                      <a *ngIf="last;else notlast" style="color: #3F8DFD; font-weight: 700; text-decoration: none;" [routerLink]="[]"
                         (click)="handleClickCrumb(crumb.link)">{{ crumb.text }}</a>
                        <ng-template #notlast>
                        <a style="color: #3F8DFD ; text-decoration: none;" [routerLink]="[]"
                             (click)="handleClickCrumb(crumb.link)">{{ crumb.text }}</a>
                      </ng-template>
                  </globits-breadcrumb>
              </ng-container>
          </div>
      </vex-secondary-toolbar>
  `
})
export class BreadcrumbsComponent implements OnInit {

  @Input() crumbs: breadcrumb[] = [];
  @Input() current: string = '';

  constructor(private router: Router, private layoutService: LayoutService) {
  }
  handleClickCrumb(link: string) {
    if (link) {
      this.router.navigate([this.layoutService.rootRouter + link]);
    }
  }
  clickHome() {
    this.router.navigate([this.layoutService.rootRouter=="ttyt/"?this.layoutService.rootRouter+"file-management" : this.layoutService.rootRouter+"file-management"])
  }
  ngOnInit() {
  }
}
