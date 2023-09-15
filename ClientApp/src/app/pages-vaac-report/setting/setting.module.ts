import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobitsPaginatorModule } from 'src/app/_common/paginator/paginator.module';
import { SecondaryToolbarModule } from "../../../@vex/components/secondary-toolbar/secondary-toolbar.module";
import { BreadcrumbsModule } from 'src/app/_common/breadcrumbs/breadcrumbs.module';
import { MtxSelectModule } from "@ng-matero/extensions/select";
import { GridModule } from 'src/app/_common/grid/grid.module';
import { MatInputModule } from '@angular/material/input';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { IconModule } from "../../_common/Icon/icon.module";
import { SettingComponent } from './setting.component';
import { AccountComponent } from './account/account.component';
import { InputComponentModule } from "../../_common/form-component/input-component/input-component.module";
import { TableModule } from "../../_common/table/table.module";
import { SelectComponentModule } from "../../_common/form-component/select-component/select-component.module";
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { PermissionComponent } from './permission/permission.component';
import { PopUpChooseHealthOrgComponent } from './permission/pop-up-choose-health-org/pop-up-choose-health-org.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from "../../_common/button-component/button-component.module";

const routes: VexRoutes = [
  {
    path: '',
    children: [
      { path: '', component: SettingComponent },
      { path: 'account', component: AccountComponent },
      { path: 'account/create', component: CreateNewAccountComponent },
      { path: 'account/edit/:id', component: CreateNewAccountComponent },
      { path: 'account/permisson/:id', component: PermissionComponent },
    ]
  }
];

@NgModule({
    declarations: [SettingComponent, AccountComponent, CreateNewAccountComponent, PermissionComponent, PopUpChooseHealthOrgComponent],
    exports: [RouterModule, QuicklinkModule],
    imports: [
        CommonModule,
        //theme
        MatInputModule,
        MatDialogModule,
        ButtonModule,
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
        MtxSelectModule,
        GridModule,
        MtxCheckboxGroupModule,
        RouterModule.forChild(routes),
        NgxDatatableModule.forRoot({
            messages: {
                emptyMessage: 'Không có dữ liệu',
                totalMessage: 'Tổng',
                selectedMessage: 'Chọn' // Footer selected message
            }
        }),
        SecondaryToolbarModule,
        BreadcrumbsModule,
        IconModule,
        MatInputModule,
        InputComponentModule,
        TableModule,
        SelectComponentModule
    ],
    providers: [FormGroupDirective]
})
export class SettingModule { }
