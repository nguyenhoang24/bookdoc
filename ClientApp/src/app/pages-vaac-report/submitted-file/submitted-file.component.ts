import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LayoutService } from 'src/@vex/services/layout.service';
import { FileManagementService } from 'src/app/pages-health-organization/file-management/file-management.service';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'submitted-file',
  templateUrl: './submitted-file.component.html',
  styleUrls: ['./submitted-file.component.scss']
})
export class SubmittedFileComponent implements OnInit {

  breadcrumbs = [] as any;

  form: UntypedFormGroup;

  columns = [] as Object[];

  totalElements: number = 1;

  totalPages: number = 0;

  @ViewChild('button', { read: TemplateRef }) buttonTemplate: TemplateRef<any>;

  listOfFiles = [
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' '
  ] as any;

  constructor(private fb: UntypedFormBuilder, private cdr: ChangeDetectorRef, private service: FileManagementService,  private router: Router, private layoutService: LayoutService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.columns = [
      { name: 'Mã CSKCB', prop: 'healthFacilityCode', visible: true, width: 100},
      { name: 'Tên CSKCB', prop: 'healthOrgDto.shortName', visible: true, width: 100 },
      { name: 'Tỉnh thành', prop: 'healthOrgDto.location.province.name', visible: true, width: 100 },
      { name: 'Quận huyện', prop: 'healthOrgDto.location.district.name', visible: true, width: 100,},
      { name: 'Loại file', prop: 'null', visible: true, width: 100, render: () => 'Hồ sơ tổng hợp'},
      { name: 'Thời gian nộp', prop: 'submitDate', visible: true, width: 100, render: (val) => this.service.formatDate(val?.submitDate)},
      { name: 'Thao tác', prop: 'function', visible: true, width: 100},
    ];
    this.initForm();
    this.breadcrumbs = [
      { link: null, text: "Danh sách các tệp tin đã nộp" }
    ]
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

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  initForm(){
    this.form = this.fb.group({
      type: null,
      fromDate: null,
      toDate: null,
      pageIndex: 1,
      pageSize: 10,
    });
    this.reloadTable();
  }

  reloadTable(){
    this.service.pagingFile(this.form.value).subscribe({
      next: (response) => {
        this.listOfFiles = response?.content;
        this.totalElements = response?.totalElements;
        this.totalPages = response?.totalPages;
      },
      error: (err) => {

      }
    })
  }

  onSubmit(){

  }

  printClick(){

  }

  redirectPatientInfo(row: any) {
    this.router.navigate([this.layoutService.rootRouter + "list-patient/"+row?.id], { state: { data: row } });
  }

  setPage(event){
    if (event.offset >= 0) {
      this.form.get('pageIndex').setValue(event.page)
      this.reloadTable();
    }
  }

  onLimitChange(event){
    this.form.get('pageSize').setValue(parseInt(event.target.value, 10))
    this.form.get('pageIndex').setValue(1)
    this.reloadTable();
  }

  get f(){
    return this.form?.controls;
  }
}
