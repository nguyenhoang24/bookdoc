import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { OrganizationCreateEditComponent } from './organization-create-edit.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PageLayoutsModule } from '../../ui/page-layouts/page-layouts.module';
import { GlobitsInputModule } from 'src/app/_common/form/input/input.module';
import { GlobitsSelectModule } from 'src/app/_common/form/select/select.module';
import { GlobitsDatePickerModule } from 'src/app/_common/form/date-picker/date-picker.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    PageLayoutsModule,
    GlobitsInputModule,
    GlobitsSelectModule,
    GlobitsDatePickerModule,
    MatGridListModule
  ],
  declarations: [OrganizationCreateEditComponent],
  exports: [OrganizationCreateEditComponent]
})
export class OrganizationCreateEditModule {
}
