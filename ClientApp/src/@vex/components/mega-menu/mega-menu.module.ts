import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuComponent } from './mega-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MegaMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,

    RouterModule,
    MatIconModule
  ],
  exports: [MegaMenuComponent]
})
export class MegaMenuModule { }
