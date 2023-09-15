import { Component } from '@angular/core';

@Component({
    selector: 'icon-add-file',
    styleUrls: ['./icon.component.scss'],
    template: `
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 17.5H3C1.89543 17.5 1 16.6046 1 15.5V3C1 1.89543 1.89543 1 3 1H8.5M8.5 1L13.5 6M8.5 1V6H13.5M13.5 6V8.5M10 15.2501H13.25M13.25 15.2501H16.5M13.25 15.2501V12M13.25 15.2501V18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
`
})
export class IconAddFileComponent {
    // file missing
    constructor() {
    }
}
