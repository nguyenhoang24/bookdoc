import { Component } from '@angular/core';

@Component({
    selector: 'icon-edit',
    styleUrls: ['./icon.component.scss'],
    template: `
    <div class="mr-3">
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9434 2.75L1.19336 13.5V17.5H5.19336L15.9434 6.75M11.9434 2.75L12.8649 1.82843C13.3954 1.29799 14.1148 1 14.8649 1C16.427 1 17.6934 2.26633 17.6934 3.82843C17.6934 4.57857 17.3954 5.29799 16.8649 5.82843L15.9434 6.75M11.9434 2.75L15.9434 6.75" stroke="#3699FF" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
    </div>
`
})
export class IconEditComponent {
    constructor() { }
}
