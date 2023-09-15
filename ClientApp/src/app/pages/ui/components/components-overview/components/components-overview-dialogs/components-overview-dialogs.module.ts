import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewDialogsComponent, DemoDialogComponent } from './components-overview-dialogs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ComponentsOverviewDialogsComponent, DemoDialogComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [ComponentsOverviewDialogsComponent]
})
export class ComponentsOverviewDialogsModule {
}
