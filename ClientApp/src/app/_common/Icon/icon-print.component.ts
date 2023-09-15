import { Component } from '@angular/core';

@Component({
    selector: 'icon-print',
    styleUrls: ['./icon.component.scss'],
    template: `
<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4343 16H21.5732C21.8592 16 22.1336 15.8946 22.3359 15.7071C22.5382 15.5196 22.6518 15.2652 22.6518 15V7C22.6518 6.73478 22.5382 6.48043 22.3359 6.29289C22.1336 6.10536 21.8592 6 21.5732 6H4.31497C4.02889 6 3.75454 6.10536 3.55225 6.29289C3.34997 6.48043 3.23633 6.73478 3.23633 7V15C3.23633 15.2652 3.34997 15.5196 3.55225 15.7071C3.75454 15.8946 4.02889 16 4.31497 16H7.4538" stroke="#006778" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4153 21H6.47168L8.62896 10H17.2581L19.4153 21ZM18.3367 3H7.55032V6H18.3367V3Z" stroke="#006778" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
})
export class IconPrintComponent {
    constructor() { }
}
