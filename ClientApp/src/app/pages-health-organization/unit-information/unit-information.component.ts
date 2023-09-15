import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { breadcrumb } from 'src/app/input.const';

@Component({
  selector: 'unit-information',
  templateUrl: './unit-information.component.html',
  styleUrls: ['./unit-information.component.scss']
})
export class UnitInformationComponent implements OnInit {

  form?: UntypedFormGroup;

  breadcrumbs = [] as breadcrumb[];

  constructor(private fb: UntypedFormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.breadcrumbs = [
      {link: null, text: 'Quản lý cơ sở'},
      {link: null, text: 'Thông tin cơ sở'},
    ];
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({});
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  onSubmit(){

  }

}
