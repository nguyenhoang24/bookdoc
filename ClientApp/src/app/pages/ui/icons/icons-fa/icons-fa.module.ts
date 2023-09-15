import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsFaRoutingModule } from './icons-fa-routing.module';
import { IconsFaComponent } from './icons-fa.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [IconsFaComponent],
  imports: [
    CommonModule,
    IconsFaRoutingModule,

    ScrollingModule,
    MatIconModule
  ]
})
export class IconsFaModule {
}
