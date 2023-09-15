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
import { BreadcrumbsModule } from 'src/app/_common/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobitsPaginatorModule } from 'src/app/_common/paginator/paginator.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { GridModule } from 'src/app/_common/grid/grid.module';
import { GlobitsInputModule } from 'src/app/_common/form/input/input.module';
import { GlobitsDatePickerModule } from 'src/app/_common/form/date-picker/date-picker.module';
import { GlobitsSelectModule } from 'src/app/_common/form/select/select.module';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { SelectComponent } from 'src/app/_common/form-component/select-component/select-component.component';
import { SelectComponentModule } from 'src/app/_common/form-component/select-component/select-component.module';
import { DateInputModule } from 'src/app/_common/form-component/date-component/date-input.module';
import { ButtonModule } from "../../_common/button-component/button-component.module";
import { IconModule } from "../../_common/Icon/icon.module";
import { TableModule } from "../../_common/table/table.module";
import { InputComponentModule } from 'src/app/_common/form-component/input-component/input-component.module';
import { FileManagementComponent } from './file-management.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FileManagementTabFirstComponent } from './file-management-tab-first/file-management-tab-first.component';
import { FileManagementTabSecondComponent } from './file-management-tab-second/file-management-tab-second.component';
import { FileManagementTabThirdComponent } from './file-management-tab-third/file-management-tab-third.component';


const routes: VexRoutes = [
  {
    path: '',
    children: [
      { path: '', component: FileManagementComponent },
    ]
  }
];

@NgModule({
    declarations: [FileManagementComponent, FileManagementTabFirstComponent, FileManagementTabSecondComponent, FileManagementTabThirdComponent],
    exports: [RouterModule, QuicklinkModule],
    imports: [
        CommonModule,
        SecondaryToolbarModule,
        BreadcrumbsModule,
        MatIconModule,
        ReactiveFormsModule,
        GridModule,
        GlobitsInputModule,
        GlobitsDatePickerModule,
        GlobitsSelectModule,
        MatInputModule,
        RouterModule.forChild(routes),
        MatDatepickerModule,
        MtxSelectModule,
        SelectComponentModule,
        DateInputModule,
        ButtonModule,
        IconModule,
        MatButtonModule,
        TableModule,
        InputComponentModule,
        MatTabsModule,
        MatCardModule,
        MatProgressBarModule
    ],
    providers: [FormGroupDirective]
})
export class FileManagementModule { }
