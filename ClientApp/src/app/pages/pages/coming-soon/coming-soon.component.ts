import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ComingSoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
