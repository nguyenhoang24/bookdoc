import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { listTypeChoiceFieldColumn } from 'src/app/input.const';
import { AlertService } from 'src/app/_services/alert.service';
import { RegimenService } from './regimen.service';

@Component({
  selector: 'vex-country-create-update',
  templateUrl: './regimen-create-edit.component.html',
})
export class RegimenCreateEditComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;
  typeChoiceFieldColumn = listTypeChoiceFieldColumn;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: RegimenService,
    private dialogRef: MatDialogRef<RegimenCreateEditComponent>,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private toast: ToastrService,
    private alertService : AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} ;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      name: [this.defaults.name , [Validators.required]],
      code: [this.defaults.code , [Validators.required]],
    })
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const country = this.form.value;
    debugger

    if(!this.defaults?.id){
      this.service.saveRegimen(country)
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
    }else{
      this.service.updateRegimen(country, this.defaults?.id)
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
}
