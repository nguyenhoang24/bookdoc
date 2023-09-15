import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTreeComponent } from './select-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '../../Icon/icon.module';

@NgModule({
  declarations: [SelectTreeComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    IconModule
  ],
  exports: [SelectTreeComponent]
})
export class SelectTreeComponentModule { }