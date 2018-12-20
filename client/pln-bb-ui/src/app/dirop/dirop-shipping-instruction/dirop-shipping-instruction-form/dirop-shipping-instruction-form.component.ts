import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalBlockComponent } from '../../../shared/commons/modal-block/modal-block.component';

@Component({
  selector: 'app-dirop-shipping-instruction-form',
  templateUrl: './dirop-shipping-instruction-form.component.html',
  styleUrls: ['./dirop-shipping-instruction-form.component.sass']
})
export class DiropShippingInstructionFormComponent implements OnInit {

  @ViewChild('approveModal') approveModal:ModalBlockComponent
  @ViewChild('rejectModal') rejectModal:ModalBlockComponent

  constructor() { 
    
  }

  ngOnInit() {
  }

  approve() {
    this.approveModal.open({})
  }

  reject() {
    this.rejectModal.open({})
  }

}
