import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RiskBehavior } from 'src/app/_models/risk-behavior.model';
import { AlertService } from 'src/app/_services/alert.service';
import { RiskBehaviorService } from '../risk-behavior.service';

@Component({
  selector: 'risk-behavior-create-update',
  templateUrl: './risk-behavior-create-update.component.html',
  styleUrls: ['./risk-behavior-create-update.component.scss']
})
export class RiskBehaviorCreateUpdateComponent implements OnInit {

  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: RiskBehaviorService,
    private dialogRef: MatDialogRef<RiskBehaviorCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as RiskBehavior;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      code: [this.defaults.code || '', [Validators.required]],
      name: [this.defaults.name || '', [Validators.required]],
      description: this.defaults.description || '',
      type: 3
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;

    const riskBehavior = this.form.value;

    this.service.saveRiskBehavior(riskBehavior)
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
