import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RegimenCreateUpdateComponent } from './regimen-create-update.component';
import { GridModule } from 'src/app/_common/grid/grid.module';
import { GlobitsInputModule } from 'src/app/_common/form/input/input.module';
import { MatButtonModule } from '@angular/material/button';
import { GlobitsSelectModule } from 'src/app/_common/form/select/select.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    GlobitsInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    GridModule,
    MatDividerModule,
    MatButtonModule,
    GlobitsSelectModule,
    MatCheckboxModule,
  ],
  declarations: [RegimenCreateUpdateComponent],
  exports: [RegimenCreateUpdateComponent]
})
export class RegimenCreateUpdateModule {
}
