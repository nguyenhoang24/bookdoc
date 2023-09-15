import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'vex-share-bottom-sheet',
  templateUrl: './share-bottom-sheet.component.html',
  styleUrls: ['./share-bottom-sheet.component.scss']
})
export class ShareBottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ShareBottomSheetComponent>) { }

  ngOnInit() {
  }

  close() {
    this._bottomSheetRef.dismiss();
  }
}
