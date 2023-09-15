import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterRoutingModule } from './help-center-routing.module';
import { HelpCenterComponent } from './help-center.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [HelpCenterComponent],
  imports: [
    CommonModule,
    HelpCenterRoutingModule,
    PageLayoutModule,
    MatButtonModule,

    MatRippleModule,
    MatIconModule
  ]
})
export class HelpCenterModule {
}
