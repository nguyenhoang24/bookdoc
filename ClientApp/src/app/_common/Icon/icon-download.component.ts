import { Component } from '@angular/core';

@Component({
    selector: 'icon-download',
    styleUrls: ['./icon.component.scss'],
    template: `
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 11.75V1.25M9.75 11.75L13 8.75M9.75 11.75L6.5 8.75M18 13.25V15.75C18 16.8546 17.1046 17.75 16 17.75H3.5C2.39543 17.75 1.5 16.8546 1.5 15.75V13.25" stroke="#00A76D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
})
export class IconDownloadComponent {
    constructor() { }
}
