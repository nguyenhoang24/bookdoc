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
import { AdministrativeUnitCreateEditComponent } from './administrative-unit-create-edit.component';
import { IconModule } from "../../../_common/Icon/icon.module";

@NgModule({
    declarations: [AdministrativeUnitCreateEditComponent],
    exports: [AdministrativeUnitCreateEditComponent],
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
        IconModule
    ]
})
export class AdministrativeUnitCreateEditModule {
}
