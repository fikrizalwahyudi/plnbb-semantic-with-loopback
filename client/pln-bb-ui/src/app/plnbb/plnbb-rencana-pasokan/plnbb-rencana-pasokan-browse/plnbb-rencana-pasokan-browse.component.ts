import { Component, OnInit } from '@angular/core';
import { ReferensiKontrak } from '../../../shared/sdk';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import * as _ from 'lodash';

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

  mitraUri = `${environment.apiUrl}/api/mitra_kesanggupan`
  searchFilterMitra = {
    where:{
    },
    include: {referensiKontrak: ['mitra']},
    limit: 10
  }

  constructor(
    private fb:FormBuilder, 
    private referensiKontrakApi: ReferensiKontrakApi
  ) { 

    this.fg = this.fb.group({
      tahun: [2018, [Validators.required]],
      bulan: [(new Date()).getMonth(), [Validators.required]],
      tanggalPengiriman: [(new Date()), [Validators.required]],
      pltu: [null, [Validators.required]],
      mitra: [null, [Validators.required]]
    })

    this.referensiKontrakApi.find({limit: 30}).subscribe(data => {
    this.referensiKontrakList = data as ReferensiKontrak[]
    })
  }

  ngOnInit() {
  }

  onSearchMitra({response, cb}) {
    cb({
      success: true,
      results: _.values(response).map(item => {
        console.log(item);
        return {
          name: item.referensiKontrak.mitra.name + "-" + item.jumlah + "-" + item.harga,
          value: item.id,
          text: item.referensiKontrak.name + "-" + item.jumlah + "-" + item.harga
        }
      })
    })
  }


}
