import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { breadcrumb } from 'src/app/input.const';

@Component({
  selector: 'file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.scss']
})
export class FileManagementComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  breadcrumbs = [] as breadcrumb[];

  constructor() { }

  ngOnInit(): void {
    this.breadcrumbs = [
      {link: null, text: 'Quản lý tệp tin'},
      {link: null, text: 'Tải tệp tin'},
    ];
  }

  next(){
    this.tabGroup.selectedIndex = this.tabGroup.selectedIndex + 1;
  }

}
