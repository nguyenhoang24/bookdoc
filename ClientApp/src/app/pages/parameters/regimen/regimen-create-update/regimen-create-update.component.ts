import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LIST_REGIMEN_TYPE } from 'src/app/input.const';
import { AlertService } from 'src/app/_services/alert.service';
import { RegimenService } from '../regimen.service';

@Component({
  selector: 'regimen-create-update',
  templateUrl: './regimen-create-update.component.html',
  styleUrls: ['./regimen-create-update.component.scss']
})
export class RegimenCreateUpdateComponent implements OnInit {

  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;
  listRegimenType = LIST_REGIMEN_TYPE

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: RegimenService,
    private dialogRef: MatDialogRef<RegimenCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.defaults.id,
      code: [this.defaults.code, [Validators.required]],
      name: [this.defaults.name, [Validators.required]],
      line: [this.defaults.line, [Validators.required]],
      description: this.defaults.description,
      children: this.defaults.children,
      elder: this.defaults.elder,
      indexNumber: this.defaults.indexNumber,
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;

    this.service.saveRegimen(this.form.value)
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
