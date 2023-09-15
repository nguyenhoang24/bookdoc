import { Component } from '@angular/core';

@Component({
    selector: 'icon-report',
    styleUrls: ['./icon.component.scss'],
    template: `
    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.75 6H2C1.44772 6 1 6.44772 1 7V16.5C1 17.0523 1.44772 17.5 2 17.5H5.75M5.75 6V17.5M5.75 6V2C5.75 1.44771 6.19772 1 6.75 1H9.75C10.3023 1 10.75 1.44772 10.75 2V10M10.75 10V17.5M10.75 10H14.5C15.0523 10 15.5 10.4477 15.5 11V16.5C15.5 17.0523 15.0523 17.5 14.5 17.5H10.75M10.75 17.5H5.75" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
`
})
export class IconReportComponent {
    constructor() { }
}
