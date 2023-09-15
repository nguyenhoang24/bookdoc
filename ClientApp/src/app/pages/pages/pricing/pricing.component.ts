import { Component, OnInit } from '@angular/core';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
