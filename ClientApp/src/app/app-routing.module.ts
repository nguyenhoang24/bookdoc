import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout-hiv-info/custom-layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './_guards/index';
import { CustomLayoutVAACComponent } from './custom-layout-vaac/custom-layout-vaac.component';
import { AuthGuardVaac } from "./_guards/auth-vaac.guard";
import { AuthGuardHIV } from "./_guards/auth-hiv.guard";
import { AuthTtytGuard } from './_guards/auth-ttyt.guard';
// import { AuthGuardTTYT } from './_guards/auth-ttyt.guard';
const routes: VexRoutes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'ttyt',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: 'choose-view-account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/choose-view-account/choose-view-account.module').then(m => m.ChooseViewAccountModule),
  },
  {
    path: '',
    canActivate: [AuthGuardVaac],
    component: CustomLayoutComponent,
    canActivateChild: [AuthGuardVaac],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages-vaac-report/submitted-file/submitted-file.module').then(m => m.SubmittedFileModule),
      },
      {
        path: 'icd-code',
        loadChildren: () => import('./pages-vaac-report/icdcode/icdcode.module').then(m => m.ICDCodeModule),
      },
      {
        path: 'regimen',
        loadChildren: () => import('./pages-vaac-report/regimen/regimen.module').then(m => m.RegimenModule),
      },
      {
        path: 'drug',
        loadChildren: () => import('./pages-vaac-report/drug/drug.module').then(m => m.DrugModule),
      },
      {
        path: 'submitted-file',
        loadChildren: () => import('./pages-vaac-report/submitted-file/submitted-file.module').then(m => m.SubmittedFileModule),
      },
      {
        path: 'list-unit',
        loadChildren: () => import('./pages-vaac-report/list-unit/list-unit.module').then(m => m.ListUnitModule)
      },
      {
        path: 'employee-management',
        loadChildren: () => import('./pages-vaac-report/employee-management/employee-management.module').then(m => m.EmployeeManagementModule)
      },
      {
        path: 'setting/location',
        loadChildren: () => import('./pages-vaac-report/administrative-unit/administrative-unit.module').then(m => m.AdministrativeUnitModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./pages-vaac-report/setting/setting.module').then(m => m.SettingModule)
      },
      {
        path: 'setting/account',
        loadChildren: () => import('./pages-vaac-report/setting/setting.module').then(m => m.SettingModule)
      },
    ]
  },
  {
    path: 'ttyt',
    canActivate: [AuthTtytGuard],
    component: CustomLayoutVAACComponent,
    canActivateChild: [AuthTtytGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages-health-organization/file-management/file-management.module').then(m => m.FileManagementModule)
      },
      {
        path: 'file-management',
        loadChildren: () => import('./pages-health-organization/file-management/file-management.module').then(m => m.FileManagementModule)
      },
      {
        path: 'unit-information',
        loadChildren: () => import('./pages-health-organization/unit-information/unit-information.module').then(m => m.UnitInformationModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}
