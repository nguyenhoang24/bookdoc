import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewProgressSpinnerComponent } from './components-overview-progress-spinner.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewProgressSpinnerComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    HighlightModule
  ],
  exports: [
    ComponentsOverviewProgressSpinnerComponent
  ]
})
export class ComponentsOverviewProgressSpinnerModule {
}
