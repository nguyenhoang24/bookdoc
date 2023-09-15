import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsCardComponent } from './contacts-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ContactsCardComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [ContactsCardComponent]
})
export class ContactsCardModule {
}
