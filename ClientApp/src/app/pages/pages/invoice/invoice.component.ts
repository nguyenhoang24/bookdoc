import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
