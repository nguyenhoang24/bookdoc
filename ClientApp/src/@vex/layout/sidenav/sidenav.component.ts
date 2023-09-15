import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../config/config.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { NavigationLink } from '../../interfaces/navigation-item.interface';
import { PopoverService } from '../../components/popover/popover.service';
import { Observable, of } from 'rxjs';
import { UserMenuComponent } from '../../components/user-menu/user-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() collapsed: boolean;
  @Input() items = this.navigationService.items;
  @Input() title = 'PATH 130';

  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
  title$ = this.configService.config$.pipe(map(config => config.sidenav.title));
  imageUrl$ = this.configService.config$.pipe(map(config => config.sidenav.imageUrl));
  showCollapsePin$ = this.configService.config$.pipe(map(config => config.sidenav.showCollapsePin));
  userVisible$ = this.configService.config$.pipe(map(config => config.sidenav.user.visible));
  searchVisible$ = this.configService.config$.pipe(map(config => config.sidenav.search.visible));

  userMenuOpen$: Observable<boolean> = of(false);

  username: string;
  roles: string[];
  // isLoadComponent = false;
  constructor(
    private navigationService: NavigationService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private readonly popoverService: PopoverService,
    private readonly dialog: MatDialog,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.tokenStorage.getUser() != null) {
      this.username = this.tokenStorage.getUser().username;
      this.roles = this.tokenStorage.getUser().roles;
    }

    // if (!this.layoutService.currentUser) {
    //   this.layoutService.getCurrentUser().subscribe({
    //     next: (response) => {
    //       this.layoutService.currentUser = response;
    //       // this.isLoadComponent = true
    //     },
    //     error: ({ error }) => {
    //       this.router.navigate(['/login']);
    //     }
    //   })
    // }
    //  else {
    //   this.isLoadComponent = true
    // }
  }

  collapseOpenSidenav() {
    this.cd.detectChanges();
    this.layoutService.collapseOpenSidenav();
  }

  collapseCloseSidenav() {
    this.cd.detectChanges();
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }

  trackByRoute(index: number, item: NavigationLink): string {
    return item.route;
  }

  openProfileMenu(origin: HTMLDivElement): void {
    this.userMenuOpen$ = of(
      this.popoverService.open({
        content: UserMenuComponent,
        origin,
        offsetY: -8,
        width: origin.clientWidth,
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

  openSearch(): void {
    this.dialog.open(SearchModalComponent, {
      panelClass: 'vex-dialog-glossy',
      width: '100%',
      maxWidth: '600px'
    });
  }

  clickHome() {
    this.router.navigate([this.layoutService.rootRouter == "ttyt/" ? this.layoutService.rootRouter + "file-management" : this.layoutService.rootRouter + "file-management" ]);
  }
}
