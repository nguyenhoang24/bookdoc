import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewRadioComponent } from './components-overview-radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewRadioComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    MatTabsModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewRadioComponent]
})
export class ComponentsOverviewRadioModule {
}
