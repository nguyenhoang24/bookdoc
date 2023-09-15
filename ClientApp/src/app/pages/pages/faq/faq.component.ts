import { Component, OnInit } from '@angular/core';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
