import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { AdministrativeUnitComponent } from './administrative-unit.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobitsPaginatorModule } from 'src/app/_common/paginator/paginator.module';
import {SecondaryToolbarModule} from "../../../@vex/components/secondary-toolbar/secondary-toolbar.module";
import {BreadcrumbsModule} from "../../../@vex/components/breadcrumbs/breadcrumbs.module";
import { AdministrativeUnitCreateEditComponent } from './administrative-unit-create-edit/administrative-unit-create-edit.component';
import { AdministrativeUnitCreateEditModule } from './administrative-unit-create-edit/administrative-unit-create-edit.module';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      { path: '', component: AdministrativeUnitComponent },
      { path: 'getDistrict/:id', component: AdministrativeUnitComponent },
      { path: 'getCommune/:id', component: AdministrativeUnitComponent },
      { path: 'create/:parentId', component: AdministrativeUnitCreateEditComponent },
      { path: 'edit/:id', component: AdministrativeUnitCreateEditComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AdministrativeUnitComponent,
    ],
  imports: [
    CommonModule,
    AdministrativeUnitCreateEditModule,
    //theme
    PageLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
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
    MatCardModule,
    MatGridListModule,
    NgxDatatableModule,
    NgxPaginationModule,
    GlobitsPaginatorModule,
    RouterModule.forChild(routes),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Không có dữ liệu', // Message to show when array is presented, but contains no values
        totalMessage: 'Tổng', // Footer total message
        selectedMessage: 'Chọn' // Footer selected message
      }
    }),
    SecondaryToolbarModule,
    BreadcrumbsModule
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class AdministrativeUnitModule { }
