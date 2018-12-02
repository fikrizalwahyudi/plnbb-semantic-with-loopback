import { Component, OnInit } from '@angular/core';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { promptDialog } from '../../../shared/modals/prompt.modal';

@Component({
  selector: 'app-master-mitra-browse',
  templateUrl: './master-mitra-browse.component.html',
  styleUrls: ['./master-mitra-browse.component.sass']
})
export class MasterMitraBrowseComponent implements OnInit {

  mitras:Mitra[]
  errorMsg: string;

  constructor(
    private mitraApi:MitraApi
  ) { 
    this.mitraApi.find({limit: 30}).subscribe(data => {
      this.mitras = data as Mitra[]
    })
  }

  ngOnInit() {
  }

  delete(item) {
    this.errorMsg = undefined

    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      this.mitraApi.deleteById(item.id).subscribe(data => {
        this.mitras = this.mitras.filter(u => u.id !== item.id)
      }, err => {
        this.errorMsg = err.message
      })
    }, () => {})
  }

}
