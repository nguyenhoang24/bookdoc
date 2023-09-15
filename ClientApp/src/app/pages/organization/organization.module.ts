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
import { BreadcrumbsModule } from 'src/app/_common/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { OrganizationCreateEditModule } from './organization-create-edit/organization-create-edit.module';
import { OrganizationComponent } from './organization.component';
import { OrganizationCreateEditComponent } from './organization-create-edit/organization-create-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobitsPaginatorModule } from 'src/app/_common/paginator/paginator.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      { path: '', component: OrganizationComponent },
      { path: 'create', component: OrganizationCreateEditComponent },
      { path: 'edit/:id', component: OrganizationCreateEditComponent },
      { path: 'getChildren/:id', component: OrganizationComponent },

    ]
  }
];

@NgModule({
  declarations: [OrganizationComponent],

  imports: [
    CommonModule,
    OrganizationCreateEditModule,
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
    NgxPaginationModule,
    GlobitsPaginatorModule,
    RouterModule.forChild(routes),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Không có dữ liệu', // Message to show when array is presented, but contains no values
        totalMessage: 'Tổng', // Footer total message
        selectedMessage: 'Chọn' // Footer selected message
      }
    })
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class OrganizationModule { }
