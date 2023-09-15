import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from 'src/@vex/components/highlight/highlight.module';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [ConfirmDialogComponent]
})
export class ConfirmDialogModule { }
