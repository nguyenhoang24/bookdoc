import { Component, OnInit } from '@angular/core';
import { friendSuggestions } from '../../../../../static-data/friend-suggestions';
import { FriendSuggestion } from '../social.component';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';

@Component({
  selector: 'vex-social-timeline',
  templateUrl: './social-timeline.component.html',
  styleUrls: ['./social-timeline.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class SocialTimelineComponent implements OnInit {

  suggestions = friendSuggestions;

  constructor() { }

  ngOnInit(): void {
  }

  addFriend(friend: FriendSuggestion) {
    friend.added = true;
  }

  removeFriend(friend: FriendSuggestion) {
    friend.added = false;
  }

  trackByName(index: number, friend: FriendSuggestion) {
    return friend.name;
  }
}
