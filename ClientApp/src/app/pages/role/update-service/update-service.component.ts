import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Breadcrumb } from 'src/app/_common/breadcrumbs/breadcrumbs.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];
  form: FormGroup;
  loading: boolean = false;
  apiChecked = false;
  aChecked = false;
  bChecked = false;
  cChecked = false;
  dChecked = false;
  type : number;
  constructor(
    private route: ActivatedRoute,

  ) {
    this.route.data.subscribe(e => this.type = e?.type);
   }

  ngOnInit(): void {
    if(this.type==1){
      this.breadcrumbs = [
        { link: "/setting/role", text: "Bảo mật" },
        { link: "setting/role/service", text: "Dịch vụ" },
        { link: "", text: "Định nghĩa quyền theo dịch vụ" },
      ];
    } else {
      this.breadcrumbs = [
        { link: "/setting/role", text: "Bảo mật" },
        { link: "", text: this.type == 2 ? 'Thêm quyền mới' : this.type == 3 ? 'Cập nhật quyền' : ''},
      ];
    }


    this.form = new FormGroup({
      api: new FormControl(null),
    });
    this.loading = true;
  }
  toggleApi() {
    if (this.apiChecked) {
      this.aChecked = true;
      this.bChecked = true;
      this.cChecked = true;
      this.dChecked = true;
    } else {
      this.aChecked = false;
      this.bChecked = false;
      this.cChecked = false;
      this.dChecked = false;
    }
  }
  onSubmit(){

  }

}
