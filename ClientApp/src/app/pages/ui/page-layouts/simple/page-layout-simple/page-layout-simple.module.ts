import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutSimpleRoutingModule } from './page-layout-simple-routing.module';
import { PageLayoutSimpleComponent } from './page-layout-simple.component';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { SecondaryToolbarModule } from '../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PageLayoutSimpleComponent],
  imports: [
    CommonModule,
    PageLayoutSimpleRoutingModule,
    PageLayoutModule,
    PageLayoutDemoModule,
    SecondaryToolbarModule,
    MatButtonModule,
    BreadcrumbsModule,

    MatIconModule,
  ]
})
export class PageLayoutSimpleModule {
}
