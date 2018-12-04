import { Component, OnInit } from '@angular/core';
import { ReferensiKontrak } from '../../../shared/models/referensi_kontrak';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { promptDialog } from '../../../shared/modals/prompt.modal';


@Component({
  selector: 'app-master-referensi-kontrak-browse',
  templateUrl: './master-referensi-kontrak-browse.component.html',
  styleUrls: ['./master-referensi-kontrak-browse.component.sass']
})
export class MasterReferensiKontrakBrowseComponent implements OnInit {

  referensiKontrakList: ReferensiKontrak[];
  errorMsg

  constructor(
    private referensiKontrakApi: ReferensiKontrakApi
  ) { 
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
