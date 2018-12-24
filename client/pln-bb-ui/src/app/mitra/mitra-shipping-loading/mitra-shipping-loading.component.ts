import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mitra-shipping-loading',
  templateUrl: './mitra-shipping-loading.component.html',
  styleUrls: ['./mitra-shipping-loading.component.sass']
})
export class MitraShippingLoadingComponent implements OnInit {

  fg:FormGroup

  constructor(
    private fb:FormBuilder
  ) { 
    this.fg = this.fb.group({
      gcv: [null, [Validators.required]],
      ash: [null, [Validators.required]],
      hgi: [null, [Validators.required]],
      tm: [null, [Validators.required]],
      ts: [null, [Validators.required]],
      idt: [null, [Validators.required]],
      size1: [null, [Validators.required]],
      size2: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  fileCoaCowChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      const file:File = event.target.files[0];
      //if(file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg') {
      reader.readAsDataURL(file);
      reader.onload = () => {
        //this.avatar = reader.result;
        //this.avatarUri = file;
      }
    }
  }

}
