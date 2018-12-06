import { Component, OnInit } from '@angular/core';
import { ReferensiKontrak } from '../../../shared/sdk';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-plnbb-rencana-pasokan-browse',
  templateUrl: './plnbb-rencana-pasokan-browse.component.html',
  styleUrls: ['./plnbb-rencana-pasokan-browse.component.sass']
})
export class PlnBBRencanaPasokanBrowseComponent implements OnInit {

  referensiKontrakList: ReferensiKontrak[];
  fg:FormGroup
  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  errorMsg: string;

  constructor(
    private fb:FormBuilder, 
    private referensiKontrakApi: ReferensiKontrakApi
  ) { 

    this.fg = this.fb.group({
      tahun: [2018, [Validators.required]],
      bulan: [(new Date()).getMonth(), [Validators.required]]
    })

    this.referensiKontrakApi.find({limit: 30}).subscribe(data => {
    this.referensiKontrakList = data as ReferensiKontrak[]
    })
  }

  ngOnInit() {
  }

  delete(item) {
    this.errorMsg = undefined

    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      this.referensiKontrakApi.deleteById(item.id).subscribe(data => {
        this.referensiKontrakList = this.referensiKontrakList.filter(u => u.id !== item.id)
      }, err => {
        this.errorMsg = err.message
      })
    }, () => {})
  }

}
