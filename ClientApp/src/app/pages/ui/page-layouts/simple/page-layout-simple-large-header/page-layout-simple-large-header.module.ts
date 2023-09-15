import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutSimpleLargeHeaderRoutingModule } from './page-layout-simple-large-header-routing.module';
import { PageLayoutSimpleLargeHeaderComponent } from './page-layout-simple-large-header.component';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { SecondaryToolbarModule } from '../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [PageLayoutSimpleLargeHeaderComponent],
  imports: [
    CommonModule,
    PageLayoutSimpleLargeHeaderRoutingModule,
    PageLayoutModule,
    PageLayoutDemoModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
  ]
})
export class PageLayoutSimpleLargeHeaderModule {
}
