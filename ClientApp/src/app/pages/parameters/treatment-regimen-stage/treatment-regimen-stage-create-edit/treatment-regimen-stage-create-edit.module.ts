import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { GlobitsInputModule } from "src/app/_common/form/input/input.module";
import { TreatmentRegimenStageCreateEditComponent } from "./treatment-regimen-stage-create-edit.component";

@NgModule({
    declarations: [TreatmentRegimenStageCreateEditComponent],
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
    exports: [TreatmentRegimenStageCreateEditComponent]
})
export class TreatmentRegimenStageCreateUpdateModule {}
