import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CapitalizeFirstDirective } from '../../directives/capitalize-first.directive';

@NgModule({
    declarations: [InputComponent, CapitalizeFirstDirective],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [InputComponent]
})
export class InputComponentModule { }
