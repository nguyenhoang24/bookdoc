import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LOADING_BAR_CONFIG, LoadingBarConfig, LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    LoadingBarModule,
    LoadingBarRouterModule
  ],
  exports: [ProgressBarComponent],
  providers: [
    {
      provide: LOADING_BAR_CONFIG,
      useValue: {
        latencyThreshold: 80
      } as LoadingBarConfig
    }
  ]
})
export class ProgressBarModule {
}
