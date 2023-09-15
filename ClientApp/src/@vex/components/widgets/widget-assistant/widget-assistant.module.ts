import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetAssistantComponent } from './widget-assistant.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [WidgetAssistantComponent],
  imports: [
    CommonModule,

    MatIconModule
  ],
  exports: [WidgetAssistantComponent]
})
export class WidgetAssistantModule {
}
