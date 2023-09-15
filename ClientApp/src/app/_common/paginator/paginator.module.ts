import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobitsPaginatorComponent } from './paginator.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  declarations: [GlobitsPaginatorComponent],
  exports: [GlobitsPaginatorComponent]
})

export class GlobitsPaginatorModule {

}
