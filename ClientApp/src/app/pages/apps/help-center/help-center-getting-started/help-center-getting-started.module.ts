import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterGettingStartedRoutingModule } from './help-center-getting-started-routing.module';
import { HelpCenterGettingStartedComponent } from './help-center-getting-started.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [HelpCenterGettingStartedComponent],
  imports: [
    CommonModule,
    HelpCenterGettingStartedRoutingModule,
    MatExpansionModule
  ]
})
export class HelpCenterGettingStartedModule {
}
