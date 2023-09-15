import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskBehaviorCreateUpdateModule } from './risk-behavior/risk-behavior-create-update/risk-behavior-create-update.module';
import { ConfirmDialogModule } from 'src/app/_common/dialogs/confirm-dialog/confirm-dialog.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobitsPaginatorModule } from 'src/app/_common/paginator/paginator.module';
import { TransmissionRouteComponent } from './transmission-route/transmission-route.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { EthnicsComponent } from './ethnics/ethnics.component';
import { PopulationGroupComponent } from './population-group/population-group.component';
import { RiskBehaviorComponent } from './risk-behavior/risk-behavior.component';
import { ReagentComponent } from './reagent/reagent.component';
import { OccupationComponent } from './occupation/occupation.component';
import { EthnicsCreateUpdateModule } from './ethnics/ethnics-create-update/ethnics-create-update.module';
import { OccupationCreateUpdateModule } from './occupation/occupation-create-update/occupation-create-update.module';
import { ProjectComponent } from './project/project.component';
import { PopulationGroupCreateUpdateModule } from './population-group/population-group-create-update/population-group-create-update.module';
import { ReagentCreateEditModule } from './reagent/reagent-create-edit/reagent-create-edit.module';
import { ProjectCreateUpdateModule } from './project/project-create-update/project-create-update.module';
import { ParametersComponent } from './parameters.component';
import { GridModule } from "../../_common/grid/grid.module";
import { GlobitsInputModule } from "../../_common/form/input/input.module";
import { QuicklinkModule } from 'ngx-quicklink';
import { BreadcrumbsModule } from "../../_common/breadcrumbs/breadcrumbs.module";
import { CountryComponent } from './country/country.component';
import { CountryCreateUpdateModule } from './country/country-create-update/country-create-update.module';
import { TransmissionCreateUpdateModule } from './transmission-route/transmission-route-create-edit/transmission-route-create-edit.module';
import { RegimenComponent } from './regimen/regimen.component';
import { RegimenCreateUpdateModule } from './regimen/regimen-create-update/regimen-create-update.module';
import { TableModule } from 'src/app/_common/table/table.module';
import { GlobitsSelectModule } from 'src/app/_common/form/select/select.module';
import { PermanentAddressStatusComponent } from './permanent-address-status/permanent-address-status.component';
import { PermanentAddressStatusCreateUpdateModule } from './permanent-address-status/permanent-address-status-create-update/permanent-address-status-create-update.module';
import {TreatmentRegimenStageComponent} from "./treatment-regimen-stage/treatment-regimen-stage.component";
import {
  TreatmentRegimenStageCreateEditComponent
} from "./treatment-regimen-stage/treatment-regimen-stage-create-edit/treatment-regimen-stage-create-edit.component";
import {
  TreatmentRegimenStageCreateUpdateModule
} from "./treatment-regimen-stage/treatment-regimen-stage-create-edit/treatment-regimen-stage-create-edit.module";
import {ResultAntiCreateEditComponent} from "./result-anti/result-anti-create-edit/result-anti-create-edit.component";
import {ResultAntiCreateUpdateModule} from "./result-anti/result-anti-create-edit/result-anti-create-edit.module";
import {ResultAntiComponent} from "./result-anti/result-anti.component";
import {TestMethodComponent} from "./test-method/test-method.component";
import {TestMethodCreateEditComponent} from "./test-method/test-method-create-edit/test-method-create-edit.component";
import {TestMethodCreateEditModule} from "./test-method/test-method-create-edit/test-method-create-edit.module";
import {
  HealthInsuranceCreateUpdateModule
} from "./health-insurance/health-insurance-create-edit/health-insurance-create-edit.module";
import {HealthInsuranceComponent} from "./health-insurance/health-insurance.component";
import {CustomerTypeComponent} from "./customer-type/customer-type.component";
import {
  CustomerTypeCreateUpdateModule
} from "./customer-type/customer-type-create-edit/customer-type-create-edit.module";
import {FixedServiceComponent} from "./fixed-service/fixed-service.component";
import {
  FixedServiceCreateUpdateModule
} from "./fixed-service/fixed-service-create-edit/fixed-service-create-edit.module";
import {ServiceComponent} from "./service/service.component";
import {ServiceCreateEditModule} from "./service/service-create-edit/service-create-edit.module";

const routes: VexRoutes = [
  {
    path: '', component: ParametersComponent,
    children: [
      { path: '', redirectTo: 'occupation', pathMatch: 'full' },
      { path: 'service', component: ServiceComponent },
      { path: 'transmission-route', component: TransmissionRouteComponent },
      { path: 'ethnics', component: EthnicsComponent },
      { path: 'occupation', component: OccupationComponent },
      { path: 'population-group', component: PopulationGroupComponent },
      { path: 'risk-behaviors', component: RiskBehaviorComponent },
      { path: 'reagents', component: ReagentComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'country', component: CountryComponent },
      { path: 'regimen', component: RegimenComponent },
      { path: 'permanent-address-status', component: PermanentAddressStatusComponent },
      { path: 'treatment-regimen-stage', component: TreatmentRegimenStageComponent },
      { path: 'result-anti', component: ResultAntiComponent },
      { path: 'test-method', component: TestMethodComponent },
      { path: 'health-insurance', component: HealthInsuranceComponent },
      { path: 'customer-type', component: CustomerTypeComponent },
      { path: 'fixed-service', component: FixedServiceComponent },


    ]
  }
];

@NgModule({
  declarations: [
    TransmissionRouteComponent,
    EthnicsComponent,
    PopulationGroupComponent,
    RiskBehaviorComponent,
    ReagentComponent,
    OccupationComponent,
    ProjectComponent,
    ParametersComponent,
    CountryComponent,
    RegimenComponent,
    PermanentAddressStatusComponent,
    TreatmentRegimenStageComponent,
    ResultAntiComponent,
    TestMethodComponent,
    HealthInsuranceComponent,
    CustomerTypeComponent,
    FixedServiceComponent,
    ServiceComponent
  ],
  exports: [RouterModule, QuicklinkModule],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    RegimenCreateUpdateModule,
    ReagentCreateEditModule,
    EthnicsCreateUpdateModule,
    ProjectCreateUpdateModule,
    OccupationCreateUpdateModule,
    RiskBehaviorCreateUpdateModule,
    PopulationGroupCreateUpdateModule,
    CountryCreateUpdateModule,
    TransmissionCreateUpdateModule,
    FixedServiceCreateUpdateModule,
    TreatmentRegimenStageCreateUpdateModule,
    ResultAntiCreateUpdateModule,
    TestMethodCreateEditModule,
    HealthInsuranceCreateUpdateModule,
    CustomerTypeCreateUpdateModule,
    PermanentAddressStatusCreateUpdateModule,
    GlobitsSelectModule,
    PageLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    TableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    NgxPaginationModule,
    GlobitsPaginatorModule,
    ServiceCreateEditModule,
    RouterModule.forChild(routes),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Không có dữ liệu',
        totalMessage: 'Tổng',
        selectedMessage: 'Chọn' // Footer selected message
      }
    }),
    GridModule,
    GlobitsInputModule,
    BreadcrumbsModule
  ]
})
export class ParametersModule { }
