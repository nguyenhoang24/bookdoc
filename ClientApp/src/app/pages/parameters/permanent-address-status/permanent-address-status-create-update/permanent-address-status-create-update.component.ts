import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PermanentAddressStatus } from 'src/app/_models/permanent-address-status.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from 'src/app/_services/alert.service';
import { PermanentAddressStatusService } from '../permanent-address-status.service';

@Component({
  selector: 'permanent-address-status-create-update',
  templateUrl: './permanent-address-status-create-update.component.html',
  styleUrls: ['./permanent-address-status-create-update.component.scss']
})
export class PermanentAddressStatusCreateUpdateComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: PermanentAddressStatusService,
    private dialogRef: MatDialogRef<PermanentAddressStatusCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as PermanentAddressStatus;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      code: [this.defaults.code || '', [Validators.required]],
      name: [this.defaults.name || '', [Validators.required]],
      description: this.defaults.description || '',
      indexNumber: this.defaults.indexNumber || '',
      valueSetType: 2,
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;

    const occupation = this.form.value;

    this.service.savePermanentAddressStatus(occupation)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(response);
          this.alertService.success(this.isCreateMode ? "Create Successful!" : "Update Successful");
        },
        error: (error) => {
          console.log(error.statusText)
          this.alertService.error(this.isCreateMode ? "Create Failed!" : "Update Failed");
        }
      })

  }

}
