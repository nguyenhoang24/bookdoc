import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewGridListComponent } from './components-overview-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewGridListComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatTabsModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewGridListComponent]
})
export class ComponentsOverviewGridListModule {
}
