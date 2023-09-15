import { Component } from '@angular/core';

@Component({
    selector: 'icon-upload-file',
    styleUrls: ['./icon.component.scss'],
    template: `
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.20029 1V11.5M9.20029 1L12.2578 4M9.20029 1L6.1428 4M16.9616 13V15.5C16.9616 16.6046 16.1192 17.5 15.0801 17.5H3.3205C2.28136 17.5 1.43896 16.6046 1.43896 15.5V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
})
export class IconUploadFileComponent {
    // file missing
    constructor() {
    }
}
