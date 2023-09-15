import { Component } from '@angular/core';

@Component({
    selector: 'icon-export-excel',
    styleUrls: ['./icon.component.scss'],
    template: `
<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M11 10L13 12L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 12V7M21 4V18.5C21 19.163 20.7366 19.7989 20.2678 20.2678C19.7989 20.7366 19.163 21 18.5 21C17.837 21 17.2011 20.7366 16.7322 20.2678C16.2634 19.7989 16 19.163 16 18.5V16H5V4C5 3.73478 5.10536 3.48043 5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4ZM16 18.5V16H3V18.5C3 19.163 3.26339 19.7989 3.73223 20.2678C4.20107 20.7366 4.83696 21 5.5 21H18.5C17.837 21 17.2011 20.7366 16.7322 20.2678C16.2634 19.7989 16 19.163 16 18.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
})
export class IconExportExcelComponent {
    constructor() { }
}
