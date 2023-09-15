import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { dropdownAnimation } from '../../../../../../@vex/animations/dropdown.animation';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: [
    '../../../../../../../node_modules/quill/dist/quill.snow.css',
    './mail-compose.component.scss'
  ],
  animations: [
    dropdownAnimation
  ],
  encapsulation: ViewEncapsulation.None
})
export class MailComposeComponent implements OnInit {

  dropdownOpen = false;

  constructor(private cd: ChangeDetectorRef,
              private dialogRef: MatDialogRef<MailComposeComponent>) { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.cd.markForCheck();
  }

  submit() {
    this.dialogRef.close();
  }
}
