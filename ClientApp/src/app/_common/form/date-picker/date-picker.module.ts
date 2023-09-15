import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobitsDatePickerComponent } from './date-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
// import { DateInputDirective } from './date-input.directive';



@NgModule({
  declarations: [
    GlobitsDatePickerComponent,
    // DateInputDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    GlobitsDatePickerComponent
  ]
})
export class GlobitsDatePickerModule { }
