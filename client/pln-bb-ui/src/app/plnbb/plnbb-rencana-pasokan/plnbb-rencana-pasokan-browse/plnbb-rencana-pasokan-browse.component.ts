import { Component, OnInit } from '@angular/core';
import { Pltu } from '../../../shared/sdk';
import { PltuApi } from '../../../shared/sdk';
import { PlnRencanaApi } from '../../../shared/sdk/services/custom/PlnRencana'
import { PlnRencana } from '../../../shared/sdk/models/PlnRencana'
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

  pltus: Pltu[];
  fg:FormGroup
  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  errorMsg: string;
  disabled = true;
  listPlnRencana = [];

  mitraUri = `${environment.apiUrl}/api/mitra_kesanggupan`
  searchFilterMitra = {
    where:{
      
    },
    include: {referensiKontrak: ['mitra']},
    limit: 10
  }

  constructor(
    private fb:FormBuilder, 
    private pltuApi: PltuApi,
    private plnRencanaApi : PlnRencanaApi
  ) { 

    this.fg = this.fb.group({
      tahun: [2018, [Validators.required]],
      bulan: [(new Date()).getMonth(), [Validators.required]],
      tanggalPengiriman: [(new Date()), [Validators.required]],
      pltu: [null, [Validators.required]],
      mitra: [null, [Validators.required]]
    })

    this.pltuApi.find({limit: 30}).subscribe(data => {
      this.pltus = data as Pltu[]
    })
    this.plnRencanaApi.find({
      include: {mitraKesanggupan:['tujuanPltu', {referensiKontrak:['mitra']}]},
      limit:30
    }).subscribe(data=>{
      this.listPlnRencana = data;
      console.log(data);
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
          name: item.referensiKontrak.mitra.name + "-" + item.jumlah + "- Rp. " + item.harga,
          value: item.id,
          text: item.referensiKontrak.mitra.name + "-" + item.jumlah + "- Rp. " + item.harga
        }
      })
    })
  }

  onSelectPLTU(obj){
    console.log(obj);
  }

  save(){
    console.log(this.fg.value.mitra.value);
    var obj = {
      mitraKesanggupanId: this.fg.value.mitra.value,
      tglPengiriman: this.fg.value.tanggalPengiriman
    }
    // this.plnRencana.mitraKesanggupanId = this.fg.value.mitra.value;
    // this.plnRencana.tglPengiriman = this.fg.value.tanggalPengiriman;
    this.plnRencanaApi.create(obj).subscribe(() => {
      console.log("success");
      // this.router.navigate(['/admin', 'mitra'])
      // this.formComponent.submitting = false
    }, (err) => {
      console.log(err);
      // this.formComponent.errorMsg = err.message
      // this.formComponent.submitting = false
    })
  }


}
