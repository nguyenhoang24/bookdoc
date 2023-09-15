import { Component, Input, OnInit, ElementRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'globits-grid',
  template: '<ng-content></ng-content>',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterContentChecked {
  @Input() xs: number = 12;
  @Input() sm: number = null;
  @Input() md: number = null;
  @Input() lg: number = null;
  @Input() xl: number = null;
  @Input() container: boolean = false;
  @Input() className: string = '';
  @Input() xsOld: number = null;
  @Input() smOld: number = null;
  @Input() mdOld: number = null;
  @Input() lgOld: number = null;
  @Input() xlOld: number = null;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    if (this.container) {
      this.el.nativeElement.classList = 'grid-container ' + this.className;
      return;
    }

    let { xs, sm, md, lg, xl, xsOld, smOld, mdOld, lgOld, xlOld } = this;
    if (xlOld != xl || lgOld != lg || mdOld != md || smOld != sm || xsOld != xs) {
      let newClass: string = 'grid-item';
      if (Boolean(xs)) {
        newClass += ` grid-xs-${xs}`;
        this.xsOld = xs;
      }
      if (Boolean(sm)) {
        newClass += ` grid-sm-${sm}`;
        this.smOld = sm;
      }
      if (Boolean(this.md)) {
        newClass += ` grid-md-${md}`;
        this.mdOld = md
      }
      if (Boolean(this.lg)) {
        newClass += ` grid-lg-${lg}`;
        this.lgOld = lg
      }
      if (Boolean(this.xl)) {
        newClass += ` grid-xl-${xl}`;
        this.xlOld = xl
      }
      this.el.nativeElement.classList = newClass + " " + this.className;
    }
  }
}
