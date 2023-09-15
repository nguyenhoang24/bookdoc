import { Component, Input } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'vex-secondary-toolbar',
  template: `
    <div class="secondary-toolbar-placeholder">&nbsp;</div>

    <div [ngClass]="{ 'fixed': fixed$ | async, 'w-full': !(fixed$ | async) }" class="secondary-toolbar shadow-b py-1 z-40 border-t flex">
      <div class="px-gutter flex items-center flex-auto" [class.container]="isVerticalLayout$ | async">
        <h1 *ngIf="current"
            class="subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3 flex-none">{{ current }}</h1>

        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./secondary-toolbar.component.scss']
})
export class SecondaryToolbarComponent {

  @Input() current: string;
  @Input() crumbs: string[];

  fixed$ = this.configService.config$.pipe(
    map(config => config.toolbar.fixed)
  );

  isVerticalLayout$: Observable<boolean> = this.configService.select(config => config.layout).pipe(
    map(layout => layout === 'vertical')
  );

  constructor(private readonly configService: ConfigService) { }
}
