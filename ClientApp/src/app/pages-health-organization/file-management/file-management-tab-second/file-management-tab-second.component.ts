import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { FileManagementService } from '../file-management.service';

@Component({
  selector: 'file-management-tab-second',
  templateUrl: './file-management-tab-second.component.html',
  styleUrls: ['./file-management-tab-second.component.scss']
})
export class FileManagementTabSecondComponent implements OnInit {
  isLoading = false;

  form?: UntypedFormGroup;

  totalElements: number = 0;

  totalPages: number = 0;

  listOfUploadFiles = [];

  searchForm: SearchObject | any = null;

  columns = [
    { name: 'STT', prop: '', visible: true, width: 100, render: (_, __, index) => index + 1},
    { name: 'Loại File', prop: '', visible: true, width: 100, render: (val) => 'Hồ sơ tổng hợp' },
    { name: 'Ngày giờ tải lên', prop: 'createDate', visible: true, width: 100, render: (val) => this.service.formatDate(val?.createDate) },
    { name: 'Thao tác', prop: 'function', visible: true, width: 100,},
  ];

  constructor(private fb: UntypedFormBuilder,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
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

  get f() {
    return this.searchForm?.controls;
  }

  initForm(){
    this.searchForm = this.fb.group({
      type: null,
      fromDate: null,
      toDate: null,
      pageIndex: 1,
      pageSize: 10,
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

  reloadTable() {
    this.isLoading = true;
    this.service.pagingFile(this.searchForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.listOfUploadFiles = response?.content;
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

  onDownload(id: string){
    console.log(id)
    this.dialog.open(ConfirmDialogComponent,{
      data: {
        title: 'Xác nhận tải xuống',
        text: 'Bạn có muốn tải xuống tập tin',
        confirmButtonText: 'Xác nhận',
        cancelButtonText: 'Huỷ',
        onYesClick: () => {
          this.download(id);
          // this.id == null;
        }
      }
    })
  }

  download(id: string) {

    this.service.downloadFile(id).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'file.xml';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });

  }


  onDelete(id: string){
    this.dialog.open(ConfirmDialogComponent,{
      width: '500px',
      data: {
        title: 'Xác nhận xoá lên',
        text: 'Bạn có muốn xoá tập tin này này',
        confirmButtonText: 'Xác nhận',
        cancelButtonText: 'Huỷ',
        onYesClick: () => {
          this.delete(id);
          //this.id == null;
        }
      }
    })
  }


  delete(id: string) {
    this.service.delete(id)
      .subscribe({
        next: () => {
          this.reloadTable();
          this.toast.success("Xoá tập tin thành công");
          this.dialog.closeAll();
        },
        error: (error) => {

          this.toast.error("Xoá tập tin thất bại");
        }
      })

  }


}
