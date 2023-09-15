import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopulationGroup } from 'src/app/_models/population-group.model';
import { AlertService } from 'src/app/_services/alert.service';
import { PopulationGroupService } from '../population-group.service';

@Component({
  selector: 'population-group-create-update',
  templateUrl: './population-group-create-update.component.html',
  styleUrls: ['./population-group-create-update.component.scss']
})
export class PopulationGroupCreateUpdateComponent implements OnInit {

  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: PopulationGroupService,
    private dialogRef: MatDialogRef<PopulationGroupCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as PopulationGroup;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      code: [this.defaults.code || '', [Validators.required]],
      name: [this.defaults.name || '', [Validators.required]],
      description: this.defaults.description || '',
      indexNumber: this.defaults.indexNumber || '',
      type: 5
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;

    const populationGroup = this.form.value;

    this.service.savePopulationGroup(populationGroup)
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
