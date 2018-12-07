import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { HttpClient } from '@angular/common/http';
import { MitraKesanggupanTambangApi } from '../../../shared/sdk';

@Component({
  selector: 'app-mitra-kesanggupan-tambang',
  templateUrl: './mitra-kesanggupan-tambang.component.html',
  styleUrls: ['./mitra-kesanggupan-tambang.component.sass']
})
export class MitraKesanggupanTambangComponent implements OnInit {

  fg:FormGroup
  id

  tambangUri = `${environment.apiUrl}/api/tambang`
  searchFilterTambang = {
    where:{
      or:[
        {name: {like: '{query}.*'}},
        {lokasi: {like: '{query}.*'}}
      ]
    },
    limit: 10
  }

  constructor(
    private kesanggupanApi:MitraKesanggupanApi,
    private tambangApi:MitraKesanggupanTambangApi,
    private http:HttpClient,
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    this.fg = this.fb.group({
      daftarTambang: this.fb.array([
        this.fb.group({
          tambangId: [null, [Validators.required]],
          jumlah: [null, [Validators.required]]
        })
      ])
    }) 

    this.route.params.subscribe(params => {
      this.id = params['id']

      this.tambangApi.find({where: {mitraKesanggupanId: this.id}, include: ['mitraKesanggupan', 'tambang']}).subscribe(data => {
        if(data.length > 0) {
          this.daftarTambang.removeAt(0)

          data.forEach((entry:any) => {
            console.log(entry)
            this.daftarTambang.push(this.fb.group({
              tambangId: {
                name: entry.tambang.name,
                value: entry.tambangId,
                text: entry.tambang.name
              },
              jumlah: entry.jumlah
            }))
          })
        }
      })
    })
  }

  ngOnInit() {
  }

  save() {
    let model = this.fg.value.daftarTambang.map((entry:any) => {
      entry.mitraKesanggupanId = this.id
      entry.tambangId = entry.tambangId.value

      return entry
    })

    //console.log(model)

    this.http.delete(`${environment.apiUrl}/api/mitra_kesanggupan/${this.id}/sumberTambang`).subscribe(() => {
      this.tambangApi.create(model).subscribe(() => {
        this.router.navigate(['/mitra', 'kesanggupan-pasokan'])
      })
    })
  }

  onSearchTambang({response, cb}) {
    cb({
      success: true,
      results: _.values(response).map(item => {
        return {
          name: item.name,
          value: item.id,
          text: item.name
        }
      })
    })
  }

  addTambang(fg:FormGroup) {
    const daftarTambang = fg.get('daftarTambang') as FormArray
    daftarTambang.push(this.fb.group({
      referensiKontrakId: [null, [Validators.required]],
      tambangId: [null, [Validators.required]]
    }))
  }

  delTambang(i, fg) {
    const daftarTambang = fg.get('daftarTambang') as FormArray
    daftarTambang.removeAt(i)
  }

  get daftarTambang() { return this.fg.get('daftarTambang') as FormArray; }

}
