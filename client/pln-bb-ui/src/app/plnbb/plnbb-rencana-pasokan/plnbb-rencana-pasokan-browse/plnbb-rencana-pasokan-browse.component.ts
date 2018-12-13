import { Component, OnInit } from '@angular/core';
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

declare var $:any;

@Component({
  selector: 'app-plnbb-rencana-pasokan-browse',
  templateUrl: './plnbb-rencana-pasokan-browse.component.html',
  styleUrls: ['./plnbb-rencana-pasokan-browse.component.sass']
})
export class PlnBBRencanaPasokanBrowseComponent implements OnInit {

  submitting = false
  picking = false
  fgAmounts: FormArray

  daftarBulanRakor = []
  selectedBulanRakorIndex = 0

  daftarRencana = {}
  daftarPasokan = []
  selectedPasokan:FormArray

  constructor(
    private http:HttpClient,
    private fb: FormBuilder,
    private pltuApi: PltuApi,
    private plnRencanaApi: PlnRencanaApi,
    private plnRencanaPasokanApi:PlnRencanaPasokanApi,
    private pasokanApi: MitraKesanggupanApi
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
    for(let i=0; i<this.fgAmounts.length; i++) {
      this.fgAmounts.removeAt(i)
    }

    this.fgAmounts = this.fb.array([])

    let now = new Date()
    let next = new Date()
    next.setMonth(now.getMonth() + 1)

    this.plnRencanaApi.find({ where: { or: [{ tahun: now.getFullYear(), bulan: now.getMonth() }, { tahun: next.getFullYear(), bulan: next.getMonth() }] }, include: ['tujuanPltu', 'pasokan'] }).subscribe(data => {
      console.log(data)
      // get all mitraKesanggupan
      //let daftarKesanggupan = []
      //for(let i=0; i<data.length; i++) {
      //  daftarKesanggupan.
      //}

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

      //console.log(this.daftarRencana)
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

    //console.log(item)
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

      for(let i=0; i<data.length; i++)
        this.selectedPasokan.push(this.fb.group({
          id: data[i].id,
          value: data[i],
          checked: false
        }))

      //console.log(data)
      let el = $('.pilih-pasokan') as any
  
      el.modal({
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

          //console.log(selected)

          this.http.delete(`${environment.apiUrl}/api/pln_rencana/${item.id}/pasokan`).subscribe(data => {
            this.plnRencanaPasokanApi.create(selected).subscribe(() => {
              this.clearSelectedPasokan()
              this.picking = false
            })
          })
        }
      })
      .modal('show')
    })
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
    return this.daftarRencana[this.daftarBulanRakor[this.selectedBulanRakorIndex].key]
  }
}
