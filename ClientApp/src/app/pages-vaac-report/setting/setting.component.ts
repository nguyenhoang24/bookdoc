import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  breadcrumbs = [] as any;

  form: UntypedFormGroup;

  columns = [] as Object[];

  totalElements: number = 1;

  listOfFiles = [
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' '
  ] as any;
  
  constructor(private fb: UntypedFormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initForm();
    this.columns = columns;
    this.breadcrumbs = [
      { link: null, text: "Quản lý đơn vị" },
      { link: null, text: "Quản lý thông tin đơn vị" }
    ]
  }
  
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  initForm(){
    this.form = this.fb.group({
      
    });
  }

  onSubmit(){

  }
  
  printClick(){

  }

  setPage(event){

  }

  onLimitChange(event){

  }
  
  // get f(){
  //   return this.form?.controls;
  // }
}

export const columns = [
  { name: 'Tài khoản', prop: '', visible: true, width: 100},
  { name: 'Tên', prop: '', visible: true, width: 100 },
  { name: 'Quyền', prop: '', visible: true, width: 100 },
  { name: 'Email', prop: '', visible: true, width: 100,},
  { name: 'Thao tác', prop: 'function', visible: true, width: 100,},
];