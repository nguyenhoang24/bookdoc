import { Component } from '@angular/core';

@Component({
    selector: 'icon-arrow-down',
    styleUrls: ['./icon.component.scss'],
    template: `
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
      <path d="M0.75 0.75L6 6.25L11.25 0.750001" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
})
export class IconArrowDownComponent {
    constructor() { }
}
