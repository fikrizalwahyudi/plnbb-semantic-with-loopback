import { Component, OnInit } from '@angular/core';
import { ReferensiKontrak } from '../../../shared/sdk';
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
    this.referensiKontrakApi.find({limit: 30, include: ['mitra', 'pltuPrincipals', 'tambangPrincipals', 'jettyPrincipals']}).subscribe(data => {
      this.referensiKontrakList = data as ReferensiKontrak[]
      console.log(this.referensiKontrakList);
    })
  }

  ngOnInit() {
  }

  convertJenisKontrak(item){
    if(item === 'cif'){
      return 'CIF'
    }else if(item === 'fob'){
      return 'FOB'
    }else if(item === 'ciffob'){
      return 'CIF & FOB'
    }
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
