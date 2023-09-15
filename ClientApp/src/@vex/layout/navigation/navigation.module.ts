import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationItemModule } from '../../components/navigation-item/navigation-item.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,

    RouterModule,
    NavigationItemModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
