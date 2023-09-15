import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobitsSelectComponent } from './select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MtxSelectModule } from '@ng-matero/extensions/select';
// import { MtxFormFieldModule } from '@ng-matero/extensions/form-field';


@NgModule({
  declarations: [
    GlobitsSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MtxSelectModule,
    // MtxFormFieldModule,
  ],
  exports: [GlobitsSelectComponent]
})
export class GlobitsSelectModule { }
