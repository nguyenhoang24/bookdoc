import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutCardRoutingModule } from './page-layout-card-routing.module';
import { PageLayoutCardComponent } from './page-layout-card.component';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { SecondaryToolbarModule } from '../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PageLayoutCardComponent],
  imports: [
    CommonModule,
    PageLayoutCardRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    PageLayoutDemoModule,
    SecondaryToolbarModule,
    MatButtonModule,
    MatIconModule,

  ]
})
export class PageLayoutCardModule {
}
