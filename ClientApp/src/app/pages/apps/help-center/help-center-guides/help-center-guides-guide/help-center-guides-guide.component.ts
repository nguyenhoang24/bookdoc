import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Guide } from '../help-center-guides.component';

@Component({
  selector: 'vex-help-center-guides-guide',
  templateUrl: './help-center-guides-guide.component.html',
  styleUrls: ['./help-center-guides-guide.component.scss']
})
export class HelpCenterGuidesGuideComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public guide: Guide) { }

  ngOnInit() {
  }

}
