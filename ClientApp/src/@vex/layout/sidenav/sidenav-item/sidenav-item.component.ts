import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationDropdown, NavigationItem, NavigationLink } from '../../../interfaces/navigation-item.interface';
import { dropdownAnimation } from '../../../animations/dropdown.animation';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';
import { NavigationService } from '../../../services/navigation.service';
import { LayoutService } from 'src/@vex/services/layout.service';

@UntilDestroy()
@Component({
  selector: 'vex-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [dropdownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent implements OnInit, OnChanges {

  @Input() item: NavigationItem;
  @Input() level: number;
  @Input() collapsed: boolean = false;
  // @Input() accountType : number;
  isOpen: boolean;
  isActive: boolean;
  isAdminAccount: boolean = false;

  isLink = this.navigationService.isLink;
  isDropdown = this.navigationService.isDropdown;
  isSubheading = this.navigationService.isSubheading;

  constructor(private router: Router,
    private cd: ChangeDetectorRef,
    private navigationService: NavigationService,
    private layoutService: LayoutService,
  ) { }

  @HostBinding('class')
  get levelClass() {
    return `item-level-${this.level}`;
  }
  hasRoleAccept(roles: string[] | undefined | null, accountTypes: number[] | undefined | null): boolean {
    let existRole = false;
    let existType = false;
    if (roles && roles.length > 0) {
      let isHasRole = false;
      if (this.layoutService.currentUser?.roles && this.layoutService.currentUser?.roles.length > 0) {
        isHasRole = this.layoutService.currentUser?.roles.some(r => roles.includes(r));
      }
      existRole = isHasRole;
    } else {
      existRole = true
    }
    if (accountTypes && accountTypes.length > 0) {
      let isAcceptAccountType = false;
      // if (this.layoutService.currentUser?.accountType) {
      //   isAcceptAccountType = accountTypes.includes(this.layoutService.currentUser?.accountType);
      // }
      existType = isAcceptAccountType;
    } else {
      existType = true
    }
    return existRole && existType;
  }

  ngAfterContentChecked(){
    this.cd.detectChanges();
  }

  hasMenuAccept( item: any) {
    // console.log(item)

    // if (this.layoutService.rootRouter.includes('tt05') || this.isAdminAccount) {
    //   return true;
    // } else {
    //   let existRole = false;
    //   let menuType = false;
    //   if (roles && roles.length > 0) {
    //     let isHasRole = false;
    //     if (this.layoutService.currentUser?.roles && this.layoutService.currentUser?.roles.length > 0) {
    //       isHasRole = this.layoutService.currentUser?.roles.some(r => roles.includes(r));
    //     }
    //     existRole = isHasRole;
    //   }
    //   if (menuServiceCodes && menuServiceCodes.length > 0) {
    //     let isMenuType = false;
    //     if (this.layoutService.currentUser?.menuServiceCodes && this.layoutService.currentUser?.menuServiceCodes.length > 0) {
    //       isMenuType = this.layoutService.currentUser?.menuServiceCodes.some(r => menuServiceCodes.includes(r));
    //     }
    //     menuType = isMenuType;
    //   }
    //   return existRole && menuType;
    // }
    return true
  }

  // get accountType(): any {
  //   return this.layoutService.currentUser?.accountType
  // }
  // get isAdmin(): boolean {
  //   return this.layoutService.currentUser?.admin
  // }

  // get canEdit(): boolean {
  //   return this.layoutService.currentUser?.canEdit || this.layoutService.currentUser?.admin
  // }

  ngOnInit() {
    // console.log(this.layoutService.currentUser)
    // if (this.layoutService.currentUser?.roles && this.layoutService.currentUser?.roles.length > 0) {
    //   this.isAdminAccount = this.layoutService.currentUser?.roles.some(r => r === ROLE_HIV_INFO_ADMIN || r === ROLE_ADMIN_HIV_INFO || r === "0_ROLE_ADMIN" || r === ROLE_ADMIN);
    // }


    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.isDropdown(this.item)),
      untilDestroyed(this)
    ).subscribe(() => this.onRouteChange());

    this.navigationService.openChange$.pipe(
      filter(() => this.isDropdown(this.item)),
      untilDestroyed(this)
    ).subscribe(item => this.onOpenChange(item));

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
      this.onRouteChange();
    }
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
    this.cd.markForCheck();
  }

  onOpenChange(item: NavigationDropdown) {
    if (this.isChildrenOf(this.item as NavigationDropdown, item)) {
      return;
    }

    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      return;
    }

    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }

  onRouteChange() {
    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    }
  }

  isChildrenOf(parent: NavigationDropdown, item: NavigationDropdown) {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }

    return parent.children
      .filter(child => this.isDropdown(child))
      .some(child => this.isChildrenOf(child as NavigationDropdown, item));
  }

  hasActiveChilds(parent: NavigationDropdown) {
    return parent.children.some(child => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }

      if (this.isLink(child) && !this.isFunction(child.route)) {
        return this.router.isActive(child.route as string, false);
      }
    });
  }

  isFunction(prop: NavigationLink['route']) {
    return prop instanceof Function;
  }
}
