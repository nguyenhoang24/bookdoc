import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/_common/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'define',
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.scss']
})
export class DefineComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
    this.breadcrumbs = [
      { link: "/setting/role", text: "Bảo mật" },
      { link: "", text: "Định nghĩa hành động" },
    ];
  }

}
