import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterGuidesRoutingModule } from './help-center-guides-routing.module';
import { HelpCenterGuidesComponent } from './help-center-guides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HelpCenterGuidesGuideComponent } from './help-center-guides-guide/help-center-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [HelpCenterGuidesComponent, HelpCenterGuidesGuideComponent],
  imports: [
    CommonModule,
    HelpCenterGuidesRoutingModule,

    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class HelpCenterGuidesModule {
}
