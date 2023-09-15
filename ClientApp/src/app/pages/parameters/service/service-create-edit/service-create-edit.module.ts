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
import { ServiceCreateEditComponent } from "./service-create-edit.component";

@NgModule({
    declarations: [ServiceCreateEditComponent],
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
    exports: [ServiceCreateEditComponent]
})
export class ServiceCreateEditModule {}
