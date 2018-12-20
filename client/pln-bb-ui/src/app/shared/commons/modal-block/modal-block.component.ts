import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';

declare var $:any;

@Component({
  selector: 'ui-modal-block',
  templateUrl: './modal-block.component.html',
  styleUrls: ['./modal-block.component.sass']
})
export class ModalBlockComponent implements OnInit {
  @Input() hideActions = false

  @Output('deny') onDeny = new EventEmitter()
  @Output('approve') onApprove = new EventEmitter()
  @Output('complete') onComplete = new EventEmitter()

  modal
  item

  constructor(
    private el:ElementRef
  ) { 
    
  }

  ngOnInit() {
    this.modal = $(this.el.nativeElement.childNodes[0])

    this.modal.modal({
      closable  : false,
      onDeny    : () => {
        this.onDeny.emit()
      },
      onApprove : () => {
        this.onApprove.emit(this.item)
      },
      onHidden: () => {
        this.item = undefined
        this.onComplete.emit()
      }
    })
  }

  open(item) {
    this.item = item
    this.modal.modal('show')
  }

  close() {
    this.modal.modal('hide')
  }
}
