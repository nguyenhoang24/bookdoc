import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Ethnics } from 'src/app/_models/ethnics.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from 'src/app/_services/alert.service';
import { EthnicsService } from '../ethnics.service';

@Component({
  selector: 'enthnics-create-update',
  templateUrl: './ethnics-create-update.component.html',
  styleUrls: ['./ethnics-create-update.component.scss']
})
export class EthnicsCreateUpdateComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: EthnicsService,
    private dialogRef: MatDialogRef<EthnicsCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as Ethnics;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      code: [this.defaults.code || '', [Validators.required]],
      name: [this.defaults.name || '', [Validators.required]],
      indexNumber: this.defaults.name || '',
      description: this.defaults.description || '',
      valueSetType: 1
    })
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const occupation = this.form.value;

    this.service.saveEthnics(occupation)
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