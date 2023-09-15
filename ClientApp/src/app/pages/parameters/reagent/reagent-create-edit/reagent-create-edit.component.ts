import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reagent } from 'src/app/_models/reagent.model';
import { AlertService } from 'src/app/_services/alert.service';
import { ReagentService } from '../reagent.service';

@Component({
  selector: 'vex-reagent-create-edit',
  templateUrl: './reagent-create-edit.component.html',
  styleUrls: ['./reagent-create-edit.component.scss']
})
export class ReagentCreateEditComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: ReagentService,
    private dialogRef: MatDialogRef<ReagentCreateEditComponent>,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as Reagent;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      code: [this.defaults.code || '', [Validators.required]],
      name: [this.defaults.name || '', [Validators.required]],
      description: this.defaults.description || '',
      type: 6
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;
    const reagent = this.form.value;

    this.service.saveReagent(reagent)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(response);
          this.alertService.success(this.isCreateMode ? "Thêm mới thành công!" : "Cập nhật thành công");
        },
        error: (error) => {
          console.log(error.statusText)
          this.alertService.error(this.isCreateMode ? "Thêm mới thất bại!" : "Cập nhật nhất bại");
        }
      })
  }

}
