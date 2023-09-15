import { Component } from '@angular/core';

@Component({
    selector: 'icon-back',
    styleUrls: ['./icon.component.scss'],
    template: `
   <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="icon-back">
      <path d="M19 12H5M12 19l-7-7 7-7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
})
export class IconBackComponent {
    constructor() { }
}
