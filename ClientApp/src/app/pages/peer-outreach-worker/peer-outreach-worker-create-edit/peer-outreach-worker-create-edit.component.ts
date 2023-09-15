import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PeerOutreachWorker } from 'src/app/_models/peer-outreach-worker.model';
import { AlertService } from 'src/app/_services/alert.service';
import { PeerOutreachWorkerService } from '../peer-outreach-worker.service';

@Component({
  selector: 'vex-peer-outreach-worker-create-edit',
  templateUrl: './peer-outreach-worker-create-edit.component.html',
  styleUrls: ['./peer-outreach-worker-create-edit.component.scss']
})
export class PeerOutreachWorkerCreateEditComponent implements OnInit {
  id!: string;
  form: UntypedFormGroup;
  isCreateMode!: boolean;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA)
  public defaults: any,
  private service: PeerOutreachWorkerService,
  private dialogRef: MatDialogRef<PeerOutreachWorkerCreateEditComponent>,
  private fb: UntypedFormBuilder,
  private snackBar: MatSnackBar,
  private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.defaults) {
      this.isCreateMode = false;
    } else {
      this.isCreateMode = true;
      this.defaults = {} as PeerOutreachWorker;
    }

    this.form = this.fb.group({
      id: [this.defaults.id || ''],
      firstName: [this.defaults.firstName || ''],
      lastName: [this.defaults.lastName || ''],
      displayName: [this.defaults.displayName || '']
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid)
      return;
    const peerOutreachWorker = this.form.value;
    
    this.service.savePeerOutreachWorker(peerOutreachWorker)
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
