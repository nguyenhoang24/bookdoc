import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { delayWhen, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'vex-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  value$: Observable<number> = this.loader.useRef('router').value$.pipe(
    delayWhen(value => value === 0 ? interval(200) : of(undefined))
  );

  constructor(public loader: LoadingBarService) { }

  ngOnInit() {
  }

}
