import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if(/^0*$/.test(this._el.nativeElement.value)){
      if(this._el.nativeElement.value.length>1){
        this._el.nativeElement.value = "0";
      }
    }else{
      this._el.nativeElement.value = this._el.nativeElement.value.replace(/^0+/, '');
    }
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
