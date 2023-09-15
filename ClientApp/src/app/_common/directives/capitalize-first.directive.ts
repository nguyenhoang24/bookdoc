import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[capitalizeFirst]'
})
export class CapitalizeFirstDirective {

  constructor(private ref: ElementRef) {
  }

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    if (event.target.value.length > 0) { 
      const inputValue = event.target.value;
      const words = inputValue.split(/\s+/);
      const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.substring(1));
      const capitalizedValue = capitalizedWords.join(' ');
      this.ref.nativeElement.value = capitalizedValue;
    }
  }
}
