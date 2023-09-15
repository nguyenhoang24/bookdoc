import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { GridModule } from "../../_common/grid/grid.module";
import { GlobitsInputModule } from "../../_common/form/input/input.module";
import { QuicklinkModule } from 'ngx-quicklink';
import { BreadcrumbsModule } from "../../_common/breadcrumbs/breadcrumbs.module";
import { TableModule } from 'src/app/_common/table/table.module';
import { GlobitsSelectModule } from 'src/app/_common/form/select/select.module';
import { RoleComponent } from './role.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ServiceComponent } from './service/service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DefineComponent } from './define/define.component';

const routes: VexRoutes = [
  {
    path: '',
    children: [
      { path: '', component: RoleComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'service/update', component: UpdateServiceComponent, data : {'type' : 1} },
      { path: 'new', component: UpdateServiceComponent, data: { 'type': 2 } },
      { path: 'update', component: UpdateServiceComponent, data: { 'type': 3 } },
      { path: 'define', component: DefineComponent },
    ]
  }
];

@NgModule({
  declarations: [RoleComponent, ServiceComponent, UpdateServiceComponent, DefineComponent
  ],
  exports: [RouterModule, QuicklinkModule],
  imports: [
    CommonModule,
    ConfirmDialogModule,
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
    MatTabsModule,
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
    BreadcrumbsModule,
    MatSlideToggleModule
  ]
})
export class RoleModule { }
