import { Component, OnInit } from '@angular/core';
import { Pltu } from '../../../shared/sdk';
import { PltuApi } from '../../../shared/sdk';
import { PlnRencanaApi } from '../../../shared/sdk/services/custom/PlnRencana'
import { PlnRencana } from '../../../shared/sdk/models/PlnRencana'
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
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
  pltuId:string;
  listMitra = [];
  selectedMitraId:string;
  month = 0;
  mitraUri = `${environment.apiUrl}/api/mitra_kesanggupan`
  searchFilterMitra = {
    where:{
      tujuanPltuId: this.pltuId
    },
    include: {referensiKontrak: ['mitra']},
    limit: 10
  }

  pltuUri = `${environment.apiUrl}/api/pltu`;
  searchFilterPltu = {
    where:{
      or:[
        {name: {like: '{query}.*'}},
        {address: {like: '{query}.*'}}
      ]
    },
    limit: 10
  }

  constructor(
    private fb:FormBuilder, 
    private pltuApi: PltuApi,
    private plnRencanaApi : PlnRencanaApi,
    private mitraKesanggupanApi : MitraKesanggupanApi
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
    console.log(this.pltuId)
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

  onSearchPltu({response, cb}) {
    console.log(this.pltuId)
    cb({
      success: true,
      results: _.values(response).map(item => {
        console.log(item);
        return {
          name: item.name,
          value: item.id,
          text: item.name
        }
      })
    })
  }

  onSelectBulan(obj){
    console.log(obj);
    this.month = obj;
  }

  onSelectMitra(obj){
    console.log(obj);
    console.log(this.fg.value.mitra);
    this.selectedMitraId = obj;
  }

  onSelectPltu(obj){
    console.log(obj);
    console.log(this.fg.value.bulan);
    // var month = (this.fg.value.bulan + 1);
    this.mitraKesanggupanApi.find(
      {
        where:{
          tujuanPltuId: obj,
          // tglPengiriman: {gt: new Date('2014-04-01T18:30:00.000Z')},
          tglPengiriman: {between: [new Date('2018-'+(this.fg.value.bulan + 1)+'-01T18:30:00.000Z'),new Date('2018-'+(this.fg.value.bulan + 1)+'-30T18:30:00.000Z')]},
          lock: true
        },
        include: {referensiKontrak: ['mitra']},
        limit: 10
      }
    ).subscribe(data=>{
      //console.log(data);
      this.listMitra = []
      data.map((item:any)=>{
        console.log(item)
        this.listMitra.push({
          name: `<div>
            <p><b>${item.referensiKontrak.mitra.name}</b></p>
            <p>Jumlah : ${item.jumlah} MT<br>
            Harga : IDR ${item.harga}</p>
          </div>`,
          value: item.id,
          text: item.referensiKontrak.mitra.name + "-" + item.jumlah + "- Rp. " + item.harga
        })
      })
    })
    // this.searchFilterPltu.where.tujuanPltuId = obj;
  }
  

  save(){
    console.log(this.fg.value);
    var obj = {
      mitraKesanggupanId: this.fg.value.mitra,
      tglPengiriman: this.fg.value.tanggalPengiriman
    }

    this.plnRencanaApi.create(obj).subscribe(() => {
      //console.log("success");
      // this.router.navigate(['/admin', 'mitra'])
      // this.formComponent.submitting = false
      //location.reload()

      this.plnRencanaApi.find({
        include: {mitraKesanggupan:['tujuanPltu', {referensiKontrak:['mitra']}]},
        limit:30
      }).subscribe(data=>{
        this.listPlnRencana = data;
        console.log(data);
      })
    }, (err) => {
      //console.log(err);
      // this.formComponent.errorMsg = err.message
      // this.formComponent.submitting = false
    })
  }


}
