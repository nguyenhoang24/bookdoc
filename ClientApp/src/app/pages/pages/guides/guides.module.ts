import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesComponent } from './guides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpCenterGuidesModule } from '../../apps/help-center/help-center-guides/help-center-guides.module';


@NgModule({
  declarations: [GuidesComponent],
  imports: [
    CommonModule,
    GuidesRoutingModule,
    MatButtonModule,

    MatListModule,
    MatIconModule,
    MatDialogModule,
    HelpCenterGuidesModule
  ]
})
export class GuidesModule {
}
