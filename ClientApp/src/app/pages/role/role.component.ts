import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'src/app/_common/breadcrumbs/breadcrumbs.component';
import { RoleService } from './role.service';
import { SearchObject } from 'src/app/_interfaces/search-object';

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  breadcrumbs: Breadcrumb[] = [];
  columns: any[];
  rows : any;
  isLoading = false;
  searchObject: SearchObject = {
    pageIndex: 1,
    pageSize: 10,
  }
  totalElements: number = 0;
  totalPages: number = 0;

  constructor(
    private router: Router,
    private service: RoleService,
  ) {
    this.breadcrumbs = [
      { link: "", text: "Quyền" },
    ];
   }

  ngOnInit(): void {
    this.pagingRoles()
  }

  pagingRoles() {
    this.isLoading = true;
    this.service.pagingRoles()
      .subscribe({
        next: (response) => {
          this.rows = response;
          this.totalElements = response?.totalElements;
          this.totalPages = response?.totalPages;
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        }
      })
  }

  onClickTabService(){
    this.router.navigate(["/setting/role/service"])

  }
}
