import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/@vex/services/layout.service';
import { FileManagementService } from 'src/app/pages-health-organization/file-management/file-management.service';
import { ConfirmDialogComponent } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.component';
import { ListPatientService } from './list-patient.service';

@Component({
  selector: 'list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  id!: string;

  breadcrumbs = [] as any;

  form: UntypedFormGroup;

  columns = [] as Object[];

  totalElements: number = 1;

  totalPages: number = 0;

  @ViewChild('button', { read: TemplateRef }) buttonTemplate: TemplateRef<any>;

  state: any;

  listOfFiles = [
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' '
  ] as any;

  constructor(private fb: UntypedFormBuilder,
    private cdr: ChangeDetectorRef,
    private service: ListPatientService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private layoutService: LayoutService,
    private serviceFile: FileManagementService,) { }

  ngOnInit(): void {
    this.state = history.state.data;
    // Access the data properties
    // console.log(this.state);

    this.id = this.route.snapshot.params['id'];

    this.columns = [
      { name: 'Mã bệnh nhân', prop: 'code', visible: true, width: 100 },
      { name: 'Họ tên', prop: 'displayName', visible: true, width: 100 },
      { name: 'Số CCCD', prop: 'idCitizen', visible: true, width: 100 },
      { name: 'Ngày sinh', prop: 'birthDate', visible: true, width: 100, render: (val) => this.service.formatDate(val?.birthDate) },
      { name: 'Mã thẻ BHYT', prop: 'medicalInsurance', visible: true, width: 100, },
      { name: 'Thao tác', prop: 'function', visible: true, width: 100 },
    ];
    this.initForm();
    this.breadcrumbs = [
      { link: '/submitted-file', text: "Danh sách các tệp tin đã nộp" },
      { link: null, text: "Danh sách bệnh nhân" }
    ]
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  initForm() {
    this.form = this.fb.group({
      type: null,
      fromDate: null,
      toDate: null,
      pageIndex: 1,
      pageSize: 10,
    });
    this.reloadTable();
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

    this.serviceFile.downloadFileAssesment(id).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'file.zip';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });

  }

  reloadTable() {
    let data = this.form.getRawValue()
    data.idUUID = this.id;
    this.service.pagingPatient(data).subscribe({
      next: (response) => {
        this.listOfFiles = response?.content;
        this.totalElements = response?.totalElements;
        this.totalPages = response?.totalPages;
      },
      error: (err) => {

      }
    })
  }

  onSubmit() {

  }

  printClick() {

  }

  setPage(event) {
    if (event.offset >= 0) {
      this.form.get('pageIndex').setValue(event.page)
      this.reloadTable();
    }
  }

  onLimitChange(event) {
    this.form.get('pageSize').setValue(parseInt(event.target.value, 10))
    this.form.get('pageIndex').setValue(1)
    this.reloadTable();
  }

  redirectPatientInfo(row: any) {
    this.router.navigate([this.layoutService.rootRouter + "patient-information/"+row?.id], { state: { data: Object.assign(this.state, row )}});
  }

  backClicked() {
    this.location.back();
  }

  get f() {
    return this.form?.controls;
  }

}
