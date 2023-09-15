import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../@vex/services/layout.service';
import { filter, map, startWith } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { checkRouterChildsData } from '../../@vex/utils/check-router-childs-data';
import { ConfigService } from '../../@vex/config/config.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SidebarComponent } from '../../@vex/components/sidebar/sidebar.component';
import { NavigationService } from 'src/@vex/services/navigation.service';


@UntilDestroy()
@Component({
  selector: 'vex-custom-layout-vaac',
  templateUrl: './custom-layout-vaac.component.html',
  styleUrls: ['./custom-layout-vaac.component.scss']
})
export class CustomLayoutVAACComponent implements OnInit {

  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
  isFooterVisible$ = this.configService.config$.pipe(map(config => config.footer.visible));
  isDesktop$ = this.layoutService.isDesktop$;

  toolbarShadowEnabled$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled))
  );

  @ViewChild('configpanel', { static: true }) configpanel: SidebarComponent;

  items = this.navigationService?.itemsTTYT

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    document.title = "VAAC Report";
    this.layoutService.rootRouter = 'ttyt/';
    this.layoutService.configpanelOpen$.pipe(
      untilDestroyed(this)
    ).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
  }
}
