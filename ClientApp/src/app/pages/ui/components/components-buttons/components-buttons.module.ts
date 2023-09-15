import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsButtonsRoutingModule } from './components-buttons-routing.module';
import { ComponentsButtonsComponent } from './components-buttons.component';
import {
  ComponentsOverviewButtonsModule
} from '../components-overview/components/components-overview-buttons/components-overview-buttons.module';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ComponentsButtonsComponent],
  imports: [
    CommonModule,
    ComponentsButtonsRoutingModule,
    ComponentsOverviewButtonsModule,
    PageLayoutModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,

    MatButtonModule,
    MatIconModule
  ]
})
export class ComponentsButtonsModule {
}
