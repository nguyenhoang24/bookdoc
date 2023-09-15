import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AuthGuard } from './_guards/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout-hiv-info/custom-layout.module';
import { ConfigInitService } from './init/config-init.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AlertService } from './_services/alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomLayoutVAACModule } from './custom-layout-vaac/custom-layout-vaac.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { AuthGuardVaac } from "./_guards/auth-vaac.guard";
import { AuthGuardHIV } from "./_guards/auth-hiv.guard";
// import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import * as  Highcharts from 'highcharts';
import * as  HighchartsMap from 'highcharts/highmaps';
import More from 'highcharts/highcharts-more';
More(Highcharts);
More(HighchartsMap);
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);
Exporting(HighchartsMap);
import ExportData from 'highcharts/modules/export-data';
ExportData(Highcharts);
ExportData(HighchartsMap);
import Stock from 'highcharts/modules/stock';
Stock(Highcharts)
import Map from 'highcharts/modules/map';
Map(Highcharts)
import TreeMap from 'highcharts/modules/treemap';
TreeMap(Highcharts)
import NoData from 'highcharts/modules/no-data-to-display';
NoData(Highcharts)
NoData(HighchartsMap)
import Data from 'highcharts/modules/data';
Data(Highcharts)
Data(HighchartsMap)
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts)
Drilldown(HighchartsMap)
import Accessibility from 'highcharts/modules/accessibility';
Accessibility(Highcharts)

import { DATE_FORMATS } from "./_common/date-formats";
import { AuthTtytGuard } from './_guards/auth-ttyt.guard';
// import { AuthGuardTTYT } from './_guards/auth-ttyt.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Vex
    VexModule,
    CustomLayoutModule,
    CustomLayoutVAACModule,
    MatSnackBarModule,
    NgxSpinnerModule.forRoot({
      type: "ball-spin-clockwise-fade"
    }
    ),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: "decreasing",
      enableHtml: true,
      tapToDismiss: true,
    }),
    //keycloak
    // KeycloakAngularModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    authInterceptorProviders,
    AuthGuardVaac,
    AuthGuardHIV,
    AuthTtytGuard,
    // AuthGuardTTYT,
    // ConfigInitService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigInitService],
      useFactory: (appConfigService: ConfigInitService) => () => appConfigService.loadAppConfig()
    },
    { provide: MAT_DATE_LOCALE, useValue: 'vi' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
