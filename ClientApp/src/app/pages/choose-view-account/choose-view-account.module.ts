import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { ChooseViewAccountComponent } from './choose-view-account.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
const routes: VexRoutes = [
  {
    path: '',
    children: [
      { path: '', component: ChooseViewAccountComponent },
    ]
  }
];

@NgModule({
  declarations: [ChooseViewAccountComponent],

  imports: [
    CommonModule,
    //theme
    PageLayoutModule,
    BreadcrumbsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class ChooseViewAccountModule { }
