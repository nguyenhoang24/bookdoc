import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewTooltipComponent } from './components-overview-tooltip.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [ComponentsOverviewTooltipComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    HighlightModule,
    MatTooltipModule,
  ],
  exports: [ComponentsOverviewTooltipComponent]
})
export class ComponentsOverviewTooltipModule {
}
