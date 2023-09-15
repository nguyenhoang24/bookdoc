import { Component } from '@angular/core';

@Component({
    selector: 'icon-save',
    styleUrls: ['./icon.component.scss'],
    template: `
   <svg  width="20" height="21" viewBox="0 0 18 20" fill="none">
    <path d="M6.5 17.5H3C1.89543 17.5 1 16.6046 1 15.5V3C1 1.89543 1.89543 1 3 1H8.5M8.5 1L13.5 6M8.5 1V6H13.5M13.5 6V8.5M12.0937 18.5H10V16.4063L13.9726 12.4336C14.5508 11.8555 15.4882 11.8555 16.0664 12.4336C16.6445 13.0118 16.6445 13.9492 16.0664 14.5274L12.0937 18.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
})
export class IconSaveComponent {
    constructor() { }
}
