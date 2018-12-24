import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-plnbb-shipping-unloading',
  templateUrl: './plnbb-shipping-unloading.component.html',
  styleUrls: ['./plnbb-shipping-unloading.component.sass']
})
export class PlnbbShippingUnloadingComponent implements OnInit {

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
