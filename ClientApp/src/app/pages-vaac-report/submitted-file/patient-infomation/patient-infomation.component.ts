import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'console';
import { LayoutService } from 'src/@vex/services/layout.service';
import { breadcrumb } from 'src/app/input.const';
import { ListPatientService } from '../list-patient/list-patient.service';
import { PatientService } from './patient-information.service';

@Component({
  selector: 'patient-infomation',
  templateUrl: './patient-infomation.component.html',
  styleUrls: ['./patient-infomation.component.scss']
})

export class PatientInfomationComponent implements OnInit {
  breadcrumbs = [] as breadcrumb[];

  form: UntypedFormGroup;

  defaultValue: any

  state: any;

  patientInformation: any;

  patient: any;

  detailedDrugCriteria: any;

  clinicalServices: any;

  detailedInformationParaclinical: any;

  detailedClinicalCourse: any;

  medicalRecord: any;

  id!: string;

  listType = [{value:1, name:'Bảng 1: Chỉ tiêu tổng hợp khám chữa bệnh'},
              {value: 2, name:'Bảng 2: Chỉ tiêu chi tiết thuốc'},
              {value: 3, name:'Bảng 3: Chỉ tiêu chi tiết dịch vụ kĩ thuật và vật tư y tế'},
              {value: 4, name:'Bảng 4: Thông tin chi tiết dịch vụ lâm sàng'},
              {value: 5, name:'Bảng 5: Chỉ tiêu chi tiết diễn biến lâm sàng'},
              {value: 6, name:'Bảng 6: Chỉ tiêu hồ sơ bệnh án chăm sóc điều trị HIV/AIDS'}]


  constructor(private fb: UntypedFormBuilder,
     private cdr: ChangeDetectorRef,
     private service: PatientService,
      private router: Router,
      private route: ActivatedRoute,
       private layoutService: LayoutService,
       private location: Location,
       ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.state = history.state.data;
    // Access the data properties
    console.log(this.state);
    this.service.findById(this.id).subscribe({
      next: (response) => {
        this.patientInformation = response;
        console.log( this.patientInformation);
        this.reloadTable1();
        this.reloadTable2();
        this.reloadTable3();
        this.reloadTable4();
        this.reloadTable5();
        this.reloadTable6();
      },
      error: (err) => {

      }
    })
    this.breadcrumbs = [
      { link: '/submitted-file', text: "Danh sách các tệp tin đã nộp" },
      { link: '/list-patient/'+this?.state?.id, text: "Danh sách bệnh nhân" },
      { link: null, text: "Thông tin bệnh nhân" }
    ]
    this.defaultValue = this.listType[0];
    this.initForm();

  }

  initForm() {
    this.form = this.fb.group({
      pageIndex: 1,
      pageSize: 10,
      sectedReport: new FormControl(null)
    })
  }

  reloadTable1() {
    let data = this.form.getRawValue()
    data.idUUID = this.patientInformation?.insuranceAssessmentFile?.xmlRelationshipCode;
    this.service.findByXML1(data.idUUID).subscribe({
      next: (response) => {
        this.patient = response;
      },
      error: (err) => {

      }
    })
  }

  reloadTable2() {
    let data = this.form.getRawValue()
    data.idUUID = this.patientInformation?.insuranceAssessmentFile?.xmlRelationshipCode;
    this.service.findByXML2(data.idUUID).subscribe({
      next: (response) => {
        this.detailedDrugCriteria = response;
      },
      error: (err) => {

      }
    })
  }

  reloadTable3() {
    let data = this.form.getRawValue()
    data.idUUID = this.patientInformation?.insuranceAssessmentFile?.xmlRelationshipCode;
    this.service.findByXML3(data.idUUID).subscribe({
      next: (response) => {
        this.clinicalServices = response;
      },
      error: (err) => {

      }
    })
  }

  reloadTable4() {
    let data = this.form.getRawValue()
    data.idUUID = this.patientInformation?.insuranceAssessmentFile?.xmlRelationshipCode;
    this.service.findByXML4(data.idUUID).subscribe({
      next: (response) => {
        this.detailedInformationParaclinical = response;
      },
      error: (err) => {

      }
    })
  }

  reloadTable5() {
    let data = this.form.getRawValue()
    data.idUUID = this.patientInformation?.insuranceAssessmentFile?.xmlRelationshipCode;
    this.service.findByXML5(data.idUUID).subscribe({
      next: (response) => {
        this.detailedClinicalCourse = response;
      },
      error: (err) => {

      }
    })
  }

  reloadTable6() {
    let data = this.form.getRawValue()
    data.idUUID = this.patientInformation?.insuranceAssessmentFile?.xmlRelationshipCode;
    this.service.findByXML6(data.idUUID).subscribe({
      next: (response) => {
        this.medicalRecord = response;
      },
      error: (err) => {

      }
    })
  }

  previousTab() {
    let index = this.listType.indexOf(this.form?.get('sectedReport').value);
    if (index == 0) {
      this.form?.get('sectedReport').setValue(this.listType[this.listType.length - 1])
      console.log( this.form?.get('sectedReport'));
    }
    else {
      this.form?.get('sectedReport').setValue(this.listType[index - 1])
      console.log( this.form?.get('sectedReport'));
    }

  }
  nextTab() {
    let index = this.listType.indexOf(this.form?.get('sectedReport').value);
    if (index === this.listType.length - 1) {
      this.form?.get('sectedReport').setValue(this.listType[0])
      console.log( this.form?.get('sectedReport'));
    }
    else {
      this.form?.get('sectedReport').setValue(this.listType[index + 1])
      console.log( this.form?.get('sectedReport'));
    }
  }

  backClicked() {
    this.location.back();
  }

}
