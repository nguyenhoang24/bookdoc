import { Component, OnInit } from '@angular/core';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { stagger80ms } from '../../../../../@vex/animations/stagger.animation';
import { colors } from '../../../../../static-data/colors';

@Component({
  selector: 'vex-components-buttons',
  templateUrl: './components-buttons.component.html',
  styleUrls: ['./components-buttons.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class ComponentsButtonsComponent implements OnInit {

  colors = colors;

  constructor() { }

  ngOnInit() {
  }

}
