import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { trackById } from '../../../../@vex/utils/track-by';
import { chats } from '../../../../static-data/chats';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { OnlineStatus } from '../../../../@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChatService } from './chat.service';

export interface Chat {
  id: number;
  imageSrc: string;
  from: string;
  status: string;
  message: string;
  unreadCount: number;
  timestamp: string;
}

export interface ChatMessage {
  id: number;
  from: 'me' | 'partner';
  message: string;
}


@UntilDestroy()
@Component({
  selector: 'vex-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class ChatComponent implements OnInit, OnDestroy {

  chats$: Observable<Chat[]> = of(chats).pipe(
    // Fix to allow stagger animations with static data
    delay(0)
  );

  mobileQuery = this.mediaMatcher.matchMedia('(max-width: 959px)');
  drawerOpen$ = this.chatService.drawerOpen$;

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: 'mat:check_circle',
      colorClass: 'text-green'
    },
    {
      id: 'away',
      label: 'Away',
      icon: 'mat:access_time',
      colorClass: 'text-orange'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: 'mat:do_not_disturb',
      colorClass: 'text-red'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: 'mat:offline_bolt',
      colorClass: 'text-gray'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  trackById = trackById;
  private _mobileQueryListener: () => void;

  constructor(private cd: ChangeDetectorRef,
              private router: Router,
              private mediaMatcher: MediaMatcher,
              private chatService: ChatService) { }

  ngOnInit() {
    this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
    this._mobileQueryListener = () => {
      this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
      this.cd.detectChanges();
    };
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.mobileQuery.matches),
      untilDestroyed(this)
    ).subscribe(() => this.closeDrawer());
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  drawerChange(drawerOpen: boolean) {
    this.chatService.drawerOpen.next(drawerOpen);
  }

  openDrawer() {
    this.chatService.drawerOpen.next(true);
    this.cd.markForCheck();
  }

  closeDrawer() {
    this.chatService.drawerOpen.next(false);
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
