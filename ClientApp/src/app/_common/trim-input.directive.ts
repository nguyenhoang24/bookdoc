import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[trimText]'
})
export class TrimDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/ /g,'');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
