import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MitraKesanggupanPasokanFormComponent } from './mitra-kesanggupan-pasokan-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MitraKesanggupan, MitraKesanggupanApi, MitraApi, UserApi} from '../../../shared/sdk';

@Component({
  selector: 'mitra-kesanggupan-pasokan-edit',
  template: `
    <mitra-kesanggupan-pasokan-form (init)="init($event)" (save)="save($event)"></mitra-kesanggupan-pasokan-form>
  `,
  styles: []
})
export class MitraKesanggupanPasokanEditComponent implements OnInit {

  @ViewChild(MitraKesanggupanPasokanFormComponent)
  formComponent: MitraKesanggupanPasokanFormComponent

  mitraKesanggupan:MitraKesanggupan

  constructor(
    private mitraApi: MitraApi,
    private userApi:UserApi,
    private kesanggupanApi:MitraKesanggupanApi,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.kesanggupanApi.findById(id, {include: ['tujuanPltu', 'referensiKontrak', 'jetty', {sumberTambang:['tambang']}, 'mitra'] }).subscribe(data => {
        this.mitraKesanggupan = data as MitraKesanggupan
        console.log(this.mitraKesanggupan)
        // fg.patchValue(this.mitraKesanggupan);
        if(this.mitraKesanggupan.referensiKontrak){
          fg.patchValue({
            referensiKontrakId: {
              name: this.mitraKesanggupan.referensiKontrak.nomorKontrak,
              value: this.mitraKesanggupan.referensiKontrak.id
            },
            tujuanPltuId: {
              name: this.mitraKesanggupan.tujuanPltu.name,
              value: this.mitraKesanggupan.tujuanPltu.id
            },
            tglPengiriman: this.mitraKesanggupan.tglPengiriman,
            mode: this.mitraKesanggupan.mode,
            tipe: this.mitraKesanggupan.tipe,
            jettyId: {
              name: this.mitraKesanggupan.jetty.name,
              value: this.mitraKesanggupan.jetty.id
            },
            jenis: this.mitraKesanggupan.jenis,
            harga: this.mitraKesanggupan.harga,
            jumlah: this.mitraKesanggupan.jumlah,
            keterangan: this.mitraKesanggupan.keterangan
          })
        }

        if(this.mitraKesanggupan.sumberTambang.length > 0){
          const faSumberTambang = fg.get('sumberTambang') as FormArray
          console.log(faSumberTambang);
          this.mitraKesanggupan.sumberTambang.map((tambang, index)=>{
            
            faSumberTambang.removeAt(index);
            faSumberTambang.push(this.fb.group({
              tambangId: [null, [Validators.required]],
              jumlahPasokanTambang: [null, [Validators.required]]
            }));
            setTimeout(()=>{
              faSumberTambang.at(index).patchValue({
                tambangId: {
                  name: tambang.tambang.name,
                  value: tambang.tambang.id
                },
                jumlahPasokanTambang: tambang.jumlah
              });
            }, 10)
            
          })
        }
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    console.log(model);
    
    let sumberTambang = model.sumberTambang

    model.jumlah = 0;
    sumberTambang.map(each=>{
      model.jumlah += each.jumlahPasokanTambang
    })

    model.userId = this.userApi.getCurrentId()
    model.referensiKontrakId = model.referensiKontrakId.value
    model.jettyId = model.jettyId.value
    model.tujuanPltuId = model.tujuanPltuId.value

    // if(model.tipe != 'cif'){
    //   model.jettyId = null
    // }

    this.mitraApi.findOne({where: {userId: this.userApi.getCurrentId()}}).subscribe((mitra:any) => {
      model.mitraId = mitra.id
      this.kesanggupanApi.patchAttributes(this.mitraKesanggupan.id, model).subscribe((kesanggupan:any) => {
        sumberTambang = sumberTambang.map(entry => {
          return {
            mitraKesanggupanId: kesanggupan.id,
            tambangId: entry.tambangId.value,
            jumlah:entry.jumlahPasokanTambang
          }
        })
        this.kesanggupanApi.patchTambang(kesanggupan.id, sumberTambang).subscribe(data => {
          this.router.navigate(['/mitra', 'kesanggupan-pasokan'])
          this.formComponent.submitting = false
        })
      }, (err) => {
        this.formComponent.errorMsg = err.message
        this.formComponent.submitting = false
      })
    })
  }

}
