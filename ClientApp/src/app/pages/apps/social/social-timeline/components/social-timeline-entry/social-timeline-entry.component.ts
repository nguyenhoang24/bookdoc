import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vex-profile-timeline-entry',
  templateUrl: './social-timeline-entry.component.html',
  styleUrls: ['./social-timeline-entry.component.scss']
})
export class SocialTimelineEntryComponent implements OnInit {

  @Input() avatarUrl: string;
  @Input() name: string;
  @Input() time: string;
  @Input() imageUrl: string;
  @Input() likes: string;
  @Input() comments: string;

  constructor() { }

  ngOnInit(): void {
  }

}
