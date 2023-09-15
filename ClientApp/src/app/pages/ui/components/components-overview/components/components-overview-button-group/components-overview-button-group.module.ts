import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewButtonGroupComponent } from './components-overview-button-group.component';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [ComponentsOverviewButtonGroupComponent],
  imports: [
    CommonModule,
    HighlightModule,
    MatTabsModule,
    MatIconModule,

    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [ComponentsOverviewButtonGroupComponent]
})
export class ComponentsOverviewButtonGroupModule {
}
