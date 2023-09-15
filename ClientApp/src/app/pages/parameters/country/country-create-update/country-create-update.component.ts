import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from 'src/app/_services/alert.service';
import { Country } from 'src/app/_models/country.model';
import { CountryService } from '../country.service';

@Component({
  selector: 'vex-country-create-update',
  templateUrl: './country-create-update.component.html',
  styleUrls: ['./country-create-update.component.scss']
})
export class CountryCreateUpdateComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private service: CountryService,
    private dialogRef: MatDialogRef<CountryCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as Country;
    }

    this.form = this.fb.group({
      id: this.defaults.id || '',
      code: [this.defaults.code || '', [Validators.required]],
      name: [this.defaults.name || '', [Validators.required]],
      indexNumber: this.defaults.name || '',
      description: this.defaults.description || '',
      valueSetType: 8
    })
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const country = this.form.value;

    this.service.saveCountry(country)
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
