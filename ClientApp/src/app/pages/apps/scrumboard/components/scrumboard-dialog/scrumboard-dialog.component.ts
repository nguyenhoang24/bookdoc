import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScrumboardCard } from '../../interfaces/scrumboard-card.interface';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { scrumboardLabels, scrumboardUsers } from '../../../../../../static-data/scrumboard';
import { ScrumboardList } from '../../interfaces/scrumboard-list.interface';
import { Scrumboard } from '../../interfaces/scrumboard.interface';
import { ScrumboardAttachment } from '../../interfaces/scrumboard-attachment.interface';
import { DateTime } from 'luxon';
import { ScrumboardComment } from '../../interfaces/scrumboard-comment.interface';

@Component({
  selector: 'vex-scrumboard-dialog',
  templateUrl: './scrumboard-dialog.component.html',
  styleUrls: ['./scrumboard-dialog.component.scss']
})
export class ScrumboardDialogComponent implements OnInit {

  form = this.fb.group({
    title: null,
    description: null,
    dueDate: null,
    cover: null,
    attachments: this.fb.array([]),
    comments: this.fb.array([]),
    users: [],
    labels: []
  });

  commentCtrl = new UntypedFormControl();

  users = scrumboardUsers;
  labels = scrumboardLabels;

  list: ScrumboardList;
  board: Scrumboard;

  constructor(private dialogRef: MatDialogRef<ScrumboardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
                card: ScrumboardCard;
                list: ScrumboardList;
                board: Scrumboard;
              },
              private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.list = this.data.list;
    this.board = this.data.board;

    const card = this.data.card;

    this.form.patchValue({
      title: card.title,
      description: card.description,
      dueDate: card.dueDate || null,
      cover: card.cover || null,
      users: card.users || [],
      labels: card.labels || []
    });

    this.form.setControl('attachments', this.fb.array(card.attachments || []));
    this.form.setControl('comments', this.fb.array(card.comments || []));
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  isImageExtension(extension: string) {
    return extension === 'jpg' || extension === 'png';
  }

  makeCover(attachment: ScrumboardAttachment) {
    this.form.get('cover').setValue(attachment);
  }

  isCover(attachment: ScrumboardAttachment) {
    return this.form.get('cover').value === attachment;
  }

  remove(attachment: ScrumboardAttachment) {
    if (this.form.get('cover').value && attachment.id === this.form.get('cover').value.id) {
      this.form.get('cover').setValue(null);
    }

    this.form.setControl('attachments', this.fb.array(this.form.get('attachments').value.filter(a => a !== attachment)));
  }

  addComment() {
    if (!this.commentCtrl.value) {
      return;
    }

    const comments = this.form.get('comments') as UntypedFormArray;
    comments.push(new UntypedFormControl({
      from: {
        name: 'David Smith',
        imageSrc: 'assets/img/avatars/1.jpg'
      },
      message: this.commentCtrl.value,
      date: DateTime.local().minus({ seconds: 1 })
    } as ScrumboardComment));

    this.commentCtrl.setValue(null);
  }
}
