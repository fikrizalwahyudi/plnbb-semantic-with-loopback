import { Component, OnInit, ViewChild } from '@angular/core';
import { Pltu, PlnRencanaPasokanApi } from '../../../shared/sdk';
import { PltuApi } from '../../../shared/sdk';
import { PlnRencanaApi } from '../../../shared/sdk/services/custom/PlnRencana'
import { PlnRencana } from '../../../shared/sdk/models/PlnRencana'
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import * as _ from 'lodash';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { MitraShippingOrderApi } from '../../../shared/sdk/services/custom/MitraShippingOrder';
import { ModalBlockComponent } from '../../../shared/commons/modal-block/modal-block.component';
import {ExcelService} from '../../../shared/services/excel.service';

declare var $:any;

@Component({
  selector: 'app-plnbb-rencana-pasokan-browse',
  templateUrl: './plnbb-rencana-pasokan-browse.component.html',
  styleUrls: ['./plnbb-rencana-pasokan-browse.component.sass']
})
export class PlnBBRencanaPasokanBrowseComponent implements OnInit {

  @ViewChild(ModalBlockComponent) modal:ModalBlockComponent

  submitting = false
  picking = false
  fgAmounts: FormArray

  daftarBulanRakor = []
  selectedBulanRakorIndex = 0

  daftarRawData = []
  daftarRencana = {}
  daftarPasokan = []
  daftarKesanggupanPasokan = []
  daftarDataToExport = [];
  selectedPasokan:FormArray

  constructor(
    private http:HttpClient,
    private fb: FormBuilder,
    private pltuApi: PltuApi,
    private plnRencanaApi: PlnRencanaApi,
    private plnRencanaPasokanApi:PlnRencanaPasokanApi,
    private pasokanApi: MitraKesanggupanApi,
    private shippingOrder: MitraShippingOrderApi,
    private excelService:ExcelService
  ) {
    this.fgAmounts = this.fb.array([])
    this.selectedPasokan = this.fb.array([])

    let now = new Date()
    let next = new Date()
    next.setMonth(now.getMonth() + 1)

    this.daftarBulanRakor.push({
      index: 0,
      key: moment(now).format('MMMM YYYY'),
      value: now,
      tahun: now.getFullYear(),
      bulan: now.getMonth()
    })

    this.daftarBulanRakor.push({
      index: 1,
      key: moment(next).format('MMMM YYYY'),
      value: next,
      tahun: next.getFullYear(),
      bulan: next.getMonth()
    })

    this.load()
  }

  ngOnInit() {
  }

  load() {
    this.daftarRencana = []

    for(let i=0; i<this.fgAmounts.length; i++) {
      this.fgAmounts.removeAt(i)
    }

    this.fgAmounts = this.fb.array([])

    let now = new Date()
    let next = new Date()
    next.setMonth(now.getMonth() + 1)

    this.plnRencanaApi.find({ where: { or: [{ tahun: now.getFullYear(), bulan: now.getMonth() }, { tahun: next.getFullYear(), bulan: next.getMonth() }] }, include: ['tujuanPltu', 'pasokan'] }).subscribe((data:any) => {
      this.daftarRawData = data
      //console.log(data)
      // get all mitraKesanggupan
      let daftarKesanggupan = []
      for(let i=0; i<data.length; i++) {
        data[i].totalJumlah = 0
        data[i].totalHarga = 0

        for(let j=0; j<data[i].pasokan.length; j++) {
          daftarKesanggupan.push({
            id: data[i].pasokan[j].mitraKesanggupanId,
            value: data[i].pasokan[j],
            rencana: data[i]
          })
        }
      }

      this.pasokanApi.find({where:{id: {inq: daftarKesanggupan.map(e => e.id)}}, include: ['jetty', 'mitra', 'tujuanPltu']}).subscribe((dataKesanggupan:any) => {
        console.log(dataKesanggupan)
        // this.daftarKesanggupanPasokan = dataKesanggupan;
        console.log(daftarKesanggupan);
        this.daftarDataToExport = daftarKesanggupan;
        //daftarKesanggupan = dataKesanggupan

        for(let i=0; i<daftarKesanggupan.length; i++) {
          for(let j=0; j<dataKesanggupan.length; j++) {
            if(daftarKesanggupan[i].id === dataKesanggupan[j].id) {
              daftarKesanggupan[i].value['mitraKesanggupan'] = dataKesanggupan[j]

              daftarKesanggupan[i].rencana.totalJumlah += dataKesanggupan[j].jumlah
              daftarKesanggupan[i].rencana.totalHarga += dataKesanggupan[j].harga
            }
          }
        }
      })

      for(let i=0; i<data.length; i++) {
        let entry = data[i] as any
        entry.index = i

        this.fgAmounts.push(this.fb.group({
          amount: entry.totalKebutuhan
        }))
      }

      this.daftarRencana = _.groupBy(data, (entry: any) => {
        return entry.code
      })

      for (var key in this.daftarRencana) {
        let buffer = this.daftarRencana[key]

        this.daftarRencana[key] = _.groupBy(buffer, (entry: any) => {
          return entry.tujuanPltu.address
        })
      }

      console.log(this.daftarRencana)
    })
  }

  selectBulanRakor(index) {
    this.selectedBulanRakorIndex = index
  }

  generate() {
    if (this.selectedDaftarRencana)
      return false

    this.submitting = true

    let selectedBulan = this.daftarBulanRakor[this.selectedBulanRakorIndex]

    this.pltuApi.find().subscribe(data => {
      let daftarPltu = data as Pltu[]

      let daftarRencana = daftarPltu.map(pltu => {
        return {
          code: moment(selectedBulan.value).format('MMMM YYYY'),
          tahun: selectedBulan.tahun,
          bulan: selectedBulan.bulan,
          tujuanPltuId: pltu.id
        }
      })

      //console.log(daftarRencana)

      this.plnRencanaApi.create(daftarRencana).subscribe(dataRencana => {
        this.load()

        this.submitting = false
      })
    })
  }

  setTotalKebutuhan(item, fg:FormGroup) {
    let amount = fg.value.amount

    if(!amount)
      return false

    item.totalKebutuhan = amount

    this.submitting = true
    this.plnRencanaApi.patchAttributes(item.id, {totalKebutuhan: amount}).subscribe(data => {
      this.submitting = false
    })
  }

  pickMitra(item) {
    if(this.picking)
      return false

    this.picking = true

    this.clearSelectedPasokan()

    let currentBulan = this.daftarBulanRakor[this.selectedBulanRakorIndex]
    let now = new Date()
    now.setDate(1)
    now.setMonth(currentBulan.value.getMonth())
    now.setFullYear(currentBulan.value.getFullYear())

    let next = new Date()
    next.setDate(1)
    next.setFullYear(currentBulan.value.getFullYear())
    next.setMonth(currentBulan.value.getMonth() + 1)
    next.setDate(next.getDate() - 1)

    this.pasokanApi.find({where: {tujuanPltuId: item.tujuanPltuId, lock: true, tglPengiriman: {between: [now, next]}}, include:['mitra', 'tujuanPltu', 'jetty', 'referensiKontrak'], order: ['jumlah DESC', 'harga ASC']}).subscribe((data:any) => {
      this.daftarPasokan = data

      for(let i=0; i<data.length; i++) {
        //console.log(data[i])
        //console.log(item.pasokan.findIndex(e => e.id === data[i].id))
        this.selectedPasokan.push(this.fb.group({
          id: data[i].id,
          value: data[i],
          checked: item.pasokan.findIndex(e => e.mitraKesanggupanId === data[i].id) < 0 ? false : true
        }))
      }

      this.modal.open(item)

      //let el = $('.pilih-pasokan') as any
  
      /*el.modal({
        closable  : false,
        onDeny    : () => {
          this.clearSelectedPasokan()
          this.picking = false
        },
        onApprove : () => {
          //console.log(this.selectedPasokan.value)
          let selected = this.selectedPasokan.value.filter(entry => entry.checked).map(entry => {
            return {
              rencanaId: item.id,
              mitraKesanggupanId: entry.id
            }
          })

          this.http.delete(`${environment.apiUrl}/api/pln_rencana/${item.id}/pasokan`).subscribe(data => {
            this.plnRencanaPasokanApi.create(selected).subscribe(() => {
              this.clearSelectedPasokan()
              
              this.load()

              this.picking = false
            })
          })
        }
      })
      .modal('show')*/


    })
  }

  clearPickMitra() {
    this.clearSelectedPasokan()
    this.picking = false
  }

  savePickMitra(item) {
    //console.log(item)
    let selected = this.selectedPasokan.value.filter(entry => entry.checked).map(entry => {
      return {
        rencanaId: item.id,
        mitraKesanggupanId: entry.id
      }
    })

    this.http.delete(`${environment.apiUrl}/api/pln_rencana/${item.id}/pasokan`).subscribe(data => {
      this.plnRencanaPasokanApi.create(selected).subscribe(() => {
        this.load()
      })
    })
  }

  lock() {
    let now = new Date()
    if(now.getMonth() != this.daftarBulanRakor[this.selectedBulanRakorIndex].bulan)
      return alert('lock hanya bisa di bulan berjalan!')

    promptDialog(
      'Lock Hasil Rakor?', 
      'segala perubahan yang ada akan disimpan dan tidak dimungkinkan adanya future update', 
      () => {
        this.submitting = true

        //console.log(this.daftarRencana)
        let hasilRakor = this.daftarRencana[this.daftarBulanRakor[this.selectedBulanRakorIndex].key]
        let flatHasilRakor = []

        //console.log(hasilRakor)
        for(var key in hasilRakor) {
          for(let i=0; i<hasilRakor[key].length; i++) {
            flatHasilRakor.push(hasilRakor[key][i])
          }
        }

        let daftarPasokan = []
        for(let i=0; i<flatHasilRakor.length; i++) {
          for(let j=0; j<flatHasilRakor[i].pasokan.length; j++) {
            daftarPasokan.push(flatHasilRakor[i].pasokan[j])
          }
        }

        //console.log(daftarPasokan)
        this.http.post(`${environment.apiUrl}/api/pln_rencana/lock`, flatHasilRakor.map(e => e.id)).subscribe(data => {
          //console.log(data)
          this.shippingOrder.create(daftarPasokan.map(e => {
            return {
              tglOrder: new Date(),
              mitraKesanggupanId: e.mitraKesanggupanId,
              rencanaPasokanId: e.id,
              mitraId: e.mitraKesanggupan.mitraId
            }
          })).subscribe(() => {
            this.load()
            this.submitting = false
          })
        })
      },
      () => {}
    )
  }

  trackByFn(index: any) {
    return index;
  }

  clearSelectedPasokan() {
    this.daftarPasokan = []

    for(let i=0; i<this.selectedPasokan.length; i++)
      this.selectedPasokan.removeAt(i)

    this.selectedPasokan = this.fb.array([])
  }

  get selectedDaftarRencana() {
    //console.log(this.daftarRencana[this.daftarBulanRakor[this.selectedBulanRakorIndex].key])
    return this.daftarRencana[this.daftarBulanRakor[this.selectedBulanRakorIndex].key]
  }

  get isLocked() {
    let grouping = this.daftarRencana[this.daftarBulanRakor[this.selectedBulanRakorIndex].key]

    for(var key in grouping) {
      for(let i=0; i<grouping[key].length; i++) {
        if(grouping[key][i].lock)
          return true
      }
    }

    return false
  }

  exportToExcelSebelumRakor():void {
    this.pasokanApi.find({include:['mitra', 'tujuanPltu', 'jetty', 'referensiKontrak'], order: ['jumlah DESC', 'harga ASC']}).subscribe((data:any) => {
      // console.log(this.daftarKesanggupanPasokan);
      this.daftarKesanggupanPasokan = data;
      console.log(_.groupBy(this.daftarKesanggupanPasokan, function (value) {
        return value.tujuanPltu.name;
      }))
      var groupDaftarKesanggupan = _.groupBy(this.daftarKesanggupanPasokan, function (value) {
        return value.tujuanPltu.name;
      });
      
      let listExport = []

      for (var key in groupDaftarKesanggupan) {
        console.log(key, groupDaftarKesanggupan[key]);
        listExport.push({
          "Tujuan PLTU" : key
        })
        if(groupDaftarKesanggupan[key].length > 0){
          groupDaftarKesanggupan[key].map(each=>{
            listExport.push({
              "Tujuan PLTU" : null,
              "Mitra": each.mitra.name,
              "Tipe": each.tipe.toUpperCase(),
              "Mode": each.mode == 'tkg' ? "Tongkang" : each.mode == 'vsl' ? "Vessels" : "Trucking",
              "Jetty": each.jetty.name,
              "Jenis Batubara": each.jenis.toUpperCase(),
              "GCV": each.gcv,
              "TM": each.tm,
              "ASH": each.ash,
              "TS": each.ts,
              "HGI": each.hgi,
              "IDT": each.idt,
              "70 mm (%)": each.size1,
              "2.38 mm (%)": each.size2
            })
          })
        }
      }
      console.log(listExport);
      this.excelService.exportAsExcelFile(listExport, 'PLNBB_SEBELUM_RAKOR');
    })    
  }

  exportToExcelSesudahRakor():void {
    console.log(this.daftarDataToExport);
    console.log(_.groupBy(this.daftarDataToExport, function (value) {
      return value.value.mitraKesanggupan.tujuanPltu.name;
    }))
    var groupDaftarKesanggupan = _.groupBy(this.daftarDataToExport, function (value) {
      return value.value.mitraKesanggupan.tujuanPltu.name;
    });
    
    let listExport = []

    for (var key in groupDaftarKesanggupan) {
      console.log(key, groupDaftarKesanggupan[key]);
      listExport.push({
        "Tujuan PLTU" : key,
        "length" : groupDaftarKesanggupan[key].length
      })
      if(groupDaftarKesanggupan[key].length > 0){
        groupDaftarKesanggupan[key].map(each=>{
          listExport.push({
            "Tujuan PLTU" : null,
            "BulanTahun" : each.rencana.code,
            "Mitra": each.value.mitraKesanggupan.mitra.name,
            "Tipe": each.value.mitraKesanggupan.tipe.toUpperCase(),
            "Mode": each.value.mitraKesanggupan.mode == 'tkg' ? "Tongkang" : each.value.mitraKesanggupan.mode == 'vsl' ? "Vessels" : "Trucking",
            "Jumlah Pasokan (MT)": each.value.mitraKesanggupan.jumlah,
            "Harga/MT (Ribu)": each.value.mitraKesanggupan.harga,
            "Jetty": each.value.mitraKesanggupan.jetty.name,
            "Jenis Batubara": each.value.mitraKesanggupan.jenis.toUpperCase(),
            "GCV": each.value.mitraKesanggupan.gcv,
            "TM": each.value.mitraKesanggupan.tm,
            "ASH": each.value.mitraKesanggupan.ash,
            "TS": each.value.mitraKesanggupan.ts,
            "HGI": each.value.mitraKesanggupan.hgi,
            "IDT": each.value.mitraKesanggupan.idt,
            "70 mm (%)": each.value.mitraKesanggupan.size1,
            "2.38 mm (%)": each.value.mitraKesanggupan.size2
          })
        })
      }
    }
    console.log(listExport);
    this.excelService.exportAsExcelFileWithSheet(this.daftarBulanRakor ,listExport, 'PLNBB_SESUDAH_RAKOR');
  }
  
}
