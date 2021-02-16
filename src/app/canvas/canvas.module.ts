import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { CanvasComponent } from './canvas.component';

@NgModule({
  declarations: [CanvasComponent],
  imports: [CommonModule, ImageDrawingModule],
  exports: [CanvasComponent],
})
export class CanvasModule {}
