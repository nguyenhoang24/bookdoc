import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarSearchComponent } from './toolbar-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ToolbarSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ToolbarSearchComponent]
})
export class ToolbarSearchModule {
}
