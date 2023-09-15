import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsIcRoutingModule } from './icons-ic-routing.module';
import { IconsIcComponent } from './icons-ic.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [IconsIcComponent],
  imports: [
    CommonModule,
    IconsIcRoutingModule,

    ScrollingModule,
    MatIconModule
  ]
})
export class IconsIcModule {
}
