import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './coming-soon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ComingSoonComponent],
  imports: [
    CommonModule,
    ComingSoonRoutingModule,

    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ComingSoonModule {
}
