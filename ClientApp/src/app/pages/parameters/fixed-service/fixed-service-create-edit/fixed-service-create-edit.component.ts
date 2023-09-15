import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ValueSet} from 'src/app/_models/value-set.model';
import {AlertService} from 'src/app/_services/alert.service';
import {EthnicsCreateUpdateComponent} from '../../ethnics/ethnics-create-update/ethnics-create-update.component';
import {FixedServiceService} from "../fixed-service.service";

@Component({
  selector: 'vex-treatment-regimen-stage-create-edit',
  templateUrl: './fixed-service-create-edit.component.html',
  styleUrls: ['./fixed-service-create-edit.component.scss']
})
export class FixedServiceCreateEditComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EthnicsCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private alertService: AlertService,
    private service: FixedServiceService,
  ) {
  }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as ValueSet;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      code: [this.defaults.code || '', [Validators.required]],
      value: [this.defaults.name || '', [Validators.required]],
      type: 'fixed-service',
      position: 1,
      status:1,
      description:null
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const treatmentRegimenStage = this.form.value;
    this.service.saveFixedService(treatmentRegimenStage)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(response);
          this.alertService.success(this.isCreateMode ? "Thêm mới thành công!" : "Cập nhật thành công!");
        },
        error: (error) => {
          console.log(error.statusText)
          this.alertService.error(this.isCreateMode ? "Thêm mới thất bại!" : "Cập nhật thất bại!");
        }
      })

  }

}
