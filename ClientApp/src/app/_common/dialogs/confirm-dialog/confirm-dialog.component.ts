import {Component, OnInit, Input, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  text: string;
  confirmButtonText: string;
  cancelButtonText: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>) {
  }

  ngOnInit(): void {
    this.title = this.defaults.title;
    this.text = this.defaults.text;
    this.confirmButtonText = this.defaults.confirmButtonText || "Đồng ý";
    this.cancelButtonText = this.defaults.cancelButtonText || "Hủy";
  }

  onYesClick() {
    this.defaults.onYesClick();
    this.dialogRef.close();
  }

  onNoClick() {
    this.dialogRef.close()
    if (this.defaults.onNoClick) {
      this.defaults.onNoClick();
    }
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

}
