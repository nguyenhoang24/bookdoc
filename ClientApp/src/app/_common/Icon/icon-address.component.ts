import { Component } from '@angular/core';

@Component({
    selector: 'icon-address',
    styleUrls: ['./icon.component.scss'],
    template: `
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
       <path
        d="M6.05273 14.25H4.30273C3.19816 14.25 2.30273 13.3546 2.30273 12.25V3.75C2.30273 2.64543 3.19816 1.75 4.30273 1.75H12.8027C13.9073 1.75 14.8027 2.64543 14.8027 3.75V5.5M8.30273 18.25H16.8027C17.9073 18.25 18.8027 17.3546 18.8027 16.25V7.75C18.8027 6.64543 17.9073 5.75 16.8027 5.75H8.30273C7.19816 5.75 6.30273 6.64543 6.30273 7.75V16.25C6.30273 17.3546 7.19817 18.25 8.30273 18.25Z"
        stroke="white" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
`
})
export class IconAddressComponent {
    constructor() { }
}
