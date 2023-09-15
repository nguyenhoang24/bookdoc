import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewCheckboxComponent } from './components-overview-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewCheckboxComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTabsModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewCheckboxComponent]
})
export class ComponentsOverviewCheckboxModule {
}
