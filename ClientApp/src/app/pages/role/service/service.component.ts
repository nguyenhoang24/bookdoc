import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_common/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['../role.component.scss']
})
export class ServiceComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
    this.breadcrumbs = [
      { link: "/setting/role", text: "Bảo mật" },
      { link: "", text: "Dịch vụ" },
    ];
  }

}
