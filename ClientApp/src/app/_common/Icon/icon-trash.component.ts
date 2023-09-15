import { Component } from '@angular/core';

@Component({
    selector: 'icon-trash',
    styleUrls: ['./icon.component.scss'],
    template: `
<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 4.25H15.75M5.25 4.25V3.25C5.25 2.14543 6.14543 1.25 7.25 1.25H9.75C10.8546 1.25 11.75 2.14543 11.75 3.25V4.25M10.75 8.25V13.75M6.25 8.25V13.75M2.25 4.25H14.75L14.1049 15.8609C14.0461 16.9208 13.1695 17.75 12.108 17.75H4.89197C3.8305 17.75 2.95393 16.9208 2.89505 15.8609L2.25 4.25Z" stroke="#FF0303" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
})
export class IconTrashComponent {
    constructor() { }
}
