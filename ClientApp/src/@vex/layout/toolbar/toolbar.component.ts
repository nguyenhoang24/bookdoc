import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../config/config.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import { PopoverService } from '../../components/popover/popover.service';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import { Observable, of } from 'rxjs';
import { UserMenuComponent } from '../../components/user-menu/user-menu.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { User } from 'src/app/_models/user.model';

enum MENUTOOLBAR {
  USER = 1,
  HELP = 2,
}

@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  userMenuOpen$: Observable<boolean> = of(false);


  @Input() mobileQuery: boolean;
  @Input() isHiddenButtonVAAC: boolean = false
  @Input() linkOldVersion: string;
  @Input() collapsed: boolean;

  @Input()
  @HostBinding('class.shadow-b')
  hasShadow: boolean;

  navigationItems = this.navigationService.items;
  isHorizontalLayout$: Observable<boolean> = this.configService.config$.pipe(map(config => config.layout === 'horizontal'));
  isVerticalLayout$: Observable<boolean> = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
  isNavbarInToolbar$: Observable<boolean> = this.configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
  isNavbarBelowToolbar$: Observable<boolean> = this.configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));
  userVisible$: Observable<boolean> = this.configService.config$.pipe(map(config => config.toolbar.user.visible));

  megaMenuOpen$: Observable<boolean> = of(false);
  username: string;
  roles: string[];

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private navigationService: NavigationService,
    private popoverService: PopoverService,
    private tokenStorage: TokenStorageService) { }


  openQuickpanel(): void {
    this.layoutService.openQuickpanel();
  }

  ngOnInit() {
    if (this.tokenStorage.getUser() != null) {
      this.username = this.tokenStorage.getUser().username;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  get currentUser(): any {
    return this.layoutService.currentUser || new User()
  }

  openSidenav(): void {
    if (!this.mobileQuery) {
      this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
    } else {
      this.layoutService.openSidenav();
    }
  }
  openProfileMenu(origin: HTMLDivElement, menu: number): void {
    // console.log(origin);
    this.userMenuOpen$ = of(
      this.popoverService.open({
        content: UserMenuComponent,
        // content: HelpMenuComponent,
        data: menu,
        origin,
        offsetY: 62,
        width: 300,
        position: [
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom'
          }
        ]
      })
    ).pipe(
      switchMap(popoverRef => popoverRef.afterClosed$.pipe(map(() => false))),
      startWith(true),
    );
  }

  get isTT05() {
    return this.layoutService.rootRouter.includes("ttyt/");
  }

  // openMegaMenu(origin: ElementRef | HTMLElement): void {
  //   this.megaMenuOpen$ = of(
  //     this.popoverService.open({
  //       content: MegaMenuComponent,
  //       origin,
  //       offsetY: 12,
  //       position: [
  //         {
  //           originX: 'start',
  //           originY: 'bottom',
  //           overlayX: 'start',
  //           overlayY: 'top'
  //         },
  //         {
  //           originX: 'end',
  //           originY: 'bottom',
  //           overlayX: 'end',
  //           overlayY: 'top',
  //         },
  //       ]
  //     })
  //   ).pipe(
  //     switchMap(popoverRef => popoverRef.afterClosed$.pipe(map(() => false))),
  //     startWith(true),
  //   );
  // }

  openSearch(): void {
    this.layoutService.openSearch();
  }
}
