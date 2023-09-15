import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewInputComponent } from './components-overview-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ComponentsOverviewInputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
  ],
  exports: [ComponentsOverviewInputComponent]
})
export class ComponentsOverviewInputModule {
}
