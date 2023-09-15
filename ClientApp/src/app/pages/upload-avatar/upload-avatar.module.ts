import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { AvatarComponent } from './upload-avatar.component';



@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    AvatarComponent,
    ImageCropperComponent
  ],
  exports: [
    AvatarComponent
  ]
})
export class UploadAvatarModule { }
