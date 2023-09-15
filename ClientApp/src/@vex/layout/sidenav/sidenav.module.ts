import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavItemModule } from './sidenav-item/sidenav-item.module';
import { ScrollbarModule } from '../../components/scrollbar/scrollbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { UserMenuModule } from '../../components/user-menu/user-menu.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SidenavItemModule,
    ScrollbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRippleModule,
    UserMenuModule,
    SearchModalComponent
  ],
  exports: [SidenavComponent]
})
export class SidenavModule {
}
