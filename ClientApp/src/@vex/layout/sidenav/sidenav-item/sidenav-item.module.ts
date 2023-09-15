import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './sidenav-item.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [SidenavItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule,

  ],
  exports: [SidenavItemComponent]
})
export class SidenavItemModule {
}
