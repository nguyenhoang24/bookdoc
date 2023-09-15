import { Component } from '@angular/core';

@Component({
    selector: 'icon-search',
    styleUrls: ['./icon.component.scss'],
    template: `
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12.7012 12.5L17.4512 17.25M14.4512 7.5C14.4512 11.2279 11.4291 14.25 7.70117 14.25C3.97325 14.25 0.951172 11.2279 0.951172 7.5C0.951172 3.77208 3.97325 0.75 7.70117 0.75C11.4291 0.75 14.4512 3.77208 14.4512 7.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
})
export class IconSearchComponent {
    constructor() { }
}
