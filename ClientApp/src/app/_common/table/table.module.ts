import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { GlobitsPaginatorModule } from '../paginator/paginator.module';

@NgModule({
    declarations: [TableComponent],
    imports: [
        CommonModule,
        GlobitsPaginatorModule,
    ],
    exports: [TableComponent]
})
export class TableModule { }
