import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vex-components-overview-input',
  templateUrl: './components-overview-input.component.html',
  styleUrls: ['./components-overview-input.component.scss']
})
export class ComponentsOverviewInputComponent implements OnInit {

  inputHTML =
    `<mat-form-field>
  <button *ngIf="!visible" type="button" mat-icon-button matPrefix (click)="show()">
    <mat-icon matPrefix>lock</mat-icon>
  </button>
  <button *ngIf="visible" type="button" mat-icon-button matPrefix (click)="hide()">
    <mat-icon matPrefix>lock_open</mat-icon>
  </button>
  <mat-label>Password</mat-label>
  <input matInput [type]="inputType">
  <button *ngIf="!visible" type="button" mat-icon-button matSuffix (click)="show()">
    <mat-icon>visibility</mat-icon>
  </button>
  <button *ngIf="visible" type="button" mat-icon-button matSuffix (click)="hide()">
    <mat-icon>visibility_off</mat-icon>
  </button>
</mat-form-field>`;
  inputType = 'password';
  visible = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  show() {
    this.inputType = 'text';
    this.visible = true;
    this.cd.markForCheck();
  }

  hide() {
    this.inputType = 'password';
    this.visible = false;
    this.cd.markForCheck();
  }
}
