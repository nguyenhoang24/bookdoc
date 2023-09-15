import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetQuickLineChartComponent } from './widget-quick-line-chart.component';
import { ChartModule } from '../../chart/chart.module';
import { MatIconModule } from '@angular/material/icon';
import { ShareBottomSheetModule } from '../../share-bottom-sheet/share-bottom-sheet.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [WidgetQuickLineChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatIconModule,

    ShareBottomSheetModule,
    MatButtonModule
  ],
  exports: [WidgetQuickLineChartComponent]
})
export class WidgetQuickLineChartModule {
}

