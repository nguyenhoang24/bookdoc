import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    UserMenuComponent
  ],
  imports: [
    CommonModule,

    MatRippleModule,
    RouterModule,
    MatIconModule
  ]
})
export class UserMenuModule {
}
