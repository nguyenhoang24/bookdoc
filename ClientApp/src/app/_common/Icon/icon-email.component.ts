import { Component } from '@angular/core';

@Component({
    selector: 'icon-email',
    styleUrls: ['./icon.component.scss'],
    template: `
    <svg width="19" height="15" viewBox="0 0 19 15" fill="none">
      <path d="M17.5 3V11.5C17.5 12.6046 16.6046 13.5 15.5 13.5H3C1.89543 13.5 1 12.6046 1 11.5V3M17.5 3C17.5 1.89543 16.6046 1 15.5 1H3C1.89543 1 1 1.89543 1 3M17.5 3L9.25 7.75L1 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
})
export class IconEmailComponent {
    constructor() { }
}
