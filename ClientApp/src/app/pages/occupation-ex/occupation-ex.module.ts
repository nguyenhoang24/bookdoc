import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { OccupationExComponent } from './occupation-ex.component';
import { OccupationExCreateEditComponent } from './occupation-ex-create-edit/occupation-ex-create-edit.component';
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
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { OccupationExCreateUpdateModule } from './occupation-ex-create-edit/occupation-ex-create-update.module';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      { path: '', component: OccupationExComponent },
      { path: 'create', component: OccupationExCreateEditComponent },
      { path: 'edit/:id', component: OccupationExCreateEditComponent },
    ]
  }
];

@NgModule({
  declarations: [
    OccupationExComponent],

  imports: [
    CommonModule,
    OccupationExCreateUpdateModule,
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

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class OccupationExModule { }
