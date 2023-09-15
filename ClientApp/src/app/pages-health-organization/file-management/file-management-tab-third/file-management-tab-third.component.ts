import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { FileManagementService } from '../file-management.service';

export const columns = [
  { name: 'STT', prop: '', visible: true, width: 100},
  { name: 'Loại File', prop: '', visible: true, width: 100 },
  { name: 'Ngày giờ tải lên', prop: '', visible: true, width: 100 },
  { name: 'Thao tác', prop: 'function', visible: true, width: 100,},
]

@Component({
  selector: 'file-management-tab-third',
  templateUrl: './file-management-tab-third.component.html',
  styleUrls: ['./file-management-tab-third.component.scss']
})
export class FileManagementTabThirdComponent implements OnInit {
  isLoading = false;

  form?: UntypedFormGroup;

  totalElements: number = 0;

  totalPages: number = 0;

  listOrg = [];

  searchForm: SearchObject | any = null;

  columns = [
    { name: 'STT', prop: '', visible: true, width: 100, render: (_, __, index) => index + 1},
    { name: 'Tên cơ sở', prop: 'name', visible: true, width: 100},
  ];

  constructor(private fb: UntypedFormBuilder,
    private cdr: ChangeDetectorRef,
    private loading: NgxSpinnerService,
    private service: FileManagementService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.columns = this.columns;
    this.initForm();
    this.reloadTable();
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  initForm(){
    this.searchForm = this.fb.group({
      nameOrg: null,
      pageIndex: 1,
      pageSize: 10,
    })
  }


  get f() {
    return this.searchForm?.controls;
  }

  reloadTable() {
    this.isLoading = true;
    this.service.searchHealthOrgBySucsess(this.searchForm.value).subscribe({
      next: (response) => {

        this.listOrg = response?.content;
        this.totalElements = response?.totalElements;
        this.totalPages = response?.totalPages;
        this.isLoading = false;

        // console.log(this.selected)
      },
      error: (error) => {
        this.isLoading = false;
      }
    })
  }


  public onLimitChange(event): void {
    this.searchForm.get('pageSize').setValue(parseInt(event.target.value, 10))
    this.searchForm.get('pageIndex').setValue(1)
    this.reloadTable();
  }

  setPage(pageInfo){
    if (pageInfo.offset >= 0) {
      this.searchForm.get('pageIndex').setValue(pageInfo.page)
      this.reloadTable();
    }
  }

}
