import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toFixed'})

export class ToFixedPipe implements PipeTransform {
  transform(value: number, digits: number): string {
    return value.toFixed(digits);
  }
}