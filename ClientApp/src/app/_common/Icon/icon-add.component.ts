import { Component } from '@angular/core';

@Component({
    selector: 'icon-add',
    styleUrls: ['./icon.component.scss'],
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
        <path d="M6.25 17.25H2.75C1.64543 17.25 0.75 16.3546 0.75 15.25V2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H8.25M8.25 0.75L13.25 5.75M8.25 0.75V5.75H13.25M13.25 5.75V8.25M9.75 15.0001H13M13 15.0001H16.25M13 15.0001V11.75M13 15.0001V18.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
})
export class IconAddComponent {
    constructor() { }
}
