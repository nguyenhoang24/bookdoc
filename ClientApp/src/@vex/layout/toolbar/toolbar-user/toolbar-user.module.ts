import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarUserComponent } from './toolbar-user.component';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RelativeDateTimeModule } from '../../../pipes/relative-date-time/relative-date-time.module';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [ToolbarUserComponent, ToolbarUserDropdownComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    RelativeDateTimeModule,
    RouterModule,
    MatTooltipModule,
  ],
  exports: [ToolbarUserComponent]
})
export class ToolbarUserModule {
}

