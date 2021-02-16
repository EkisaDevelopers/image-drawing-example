import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('fileUploader') fileUploader: ElementRef;

  imageSrc: string | ArrayBuffer;

  constructor() {}

  ngOnInit(): void {}

  onChange(event): void {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      this.imageSrc = reader.result;
    };
  }

  onSave(data) {
    console.log(data);
  }

  onCancel() {
    this.imageSrc = '';
    this.fileUploader.nativeElement.value = '';
  }
}
