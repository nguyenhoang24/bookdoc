import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterPricingRoutingModule } from './help-center-pricing-routing.module';
import { HelpCenterPricingComponent } from './help-center-pricing.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [HelpCenterPricingComponent],
  exports: [
    HelpCenterPricingComponent
  ],
  imports: [
    CommonModule,
    HelpCenterPricingRoutingModule,

    MatButtonModule,
    MatIconModule
  ]
})
export class HelpCenterPricingModule {
}
