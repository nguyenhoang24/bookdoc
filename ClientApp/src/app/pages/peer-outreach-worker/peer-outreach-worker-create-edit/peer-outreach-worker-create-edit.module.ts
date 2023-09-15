import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { PeerOutreachWorkerCreateEditComponent } from './peer-outreach-worker-create-edit.component';
import { GlobitsInputModule } from 'src/app/_common/form/input/input.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        MatMenuModule,
        MatDividerModule,
        GlobitsInputModule
    ],
    declarations: [PeerOutreachWorkerCreateEditComponent],
    exports: [PeerOutreachWorkerCreateEditComponent]

    
})
export class PeerOutreachWorkerCreateEditModule {
}