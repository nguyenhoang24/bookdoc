import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { OccupationExService } from '../occupation-ex.service';

@Component({
  selector: 'vex-occupation-ex-create-edit',
  templateUrl: './occupation-ex-create-edit.component.html',
  styleUrls: ['./occupation-ex-create-edit.component.scss']
})
export class OccupationExCreateEditComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;
  constructor(
    private service: OccupationExService,
    private fb: UntypedFormBuilder,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isCreateMode = !this.id;

    this.form = this.fb.group({
      id: null,
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: null
    })

    if (!this.isCreateMode) {
      this.service.getOccupation(this.id)
        .subscribe(x => this.form.patchValue(x));
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid)
      return;

    const occupation = this.form.value;

    this.service.saveOrUpdateOccupation(occupation)
      .subscribe({
        next: (response) => {
          this.alertService.success(this.isCreateMode ? "Create Successful!" : "Update Successful");
          this.router.navigate(["setting/parameter-ex"]);
        },
        error: (error) => {
          console.log(error)
          this.alertService.error(this.isCreateMode ? "Create Failed!" : "Update Failed");
        }
      })

  }
}
