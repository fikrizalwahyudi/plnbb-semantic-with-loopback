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

      this.kesanggupanApi.findById(id, {include: ['tujuanPltu', 'referensiKontrak', 'jetty', 'sumberTambang', 'mitra'] }).subscribe(data => {
        this.mitraKesanggupan = data as MitraKesanggupan
        console.log(this.mitraKesanggupan)
        // fg.patchValue(this.mitraKesanggupan);
        if(this.mitraKesanggupan.referensiKontrak){
          fg.patchValue({
            referensiKontrakId: {
              name: this.mitraKesanggupan.referensiKontrak.nomorKontrak,
              value: this.mitraKesanggupan.referensiKontrak.id
            },
            tujuanPltuId: this.mitraKesanggupan.tujuanPltu.id,
            tglPengiriman: this.mitraKesanggupan.tglPengiriman,
            mode: this.mitraKesanggupan.mode,
            jenisKontrak: this.mitraKesanggupan.jenisKontrak,
            jettyId: this.mitraKesanggupan.jettyId,
            jenisBatubara: this.mitraKesanggupan.jenisBatubara,
            harga: this.mitraKesanggupan.harga,
            jumlah: this.mitraKesanggupan.jumlah,
            keterangan: this.mitraKesanggupan.keterangan
          })
        }

        if(this.mitraKesanggupan.sumberTambang.length > 0){
          const faSumberTambang = fg.get('sumberTambang') as FormArray
          console.log(faSumberTambang);
          this.mitraKesanggupan.sumberTambang.map((tambang, index)=>{
            if(index > 0){
              faSumberTambang.push(this.fb.group({
                tambangId: [null, [Validators.required]],
                jumlahPasokanTambang: [null, [Validators.required]]
              }));
            }
            setTimeout(()=>{
              faSumberTambang.at(index).patchValue({
                tambangId:tambang.tambangId,
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

    model.userId = this.userApi.getCurrentId()
    model.referensiKontrakId = model.referensiKontrakId.value

    if(model.jenisKontrak != 'cif'){
      model.jettyId = null
    }

    this.mitraApi.findOne({where: {userId: this.userApi.getCurrentId()}}).subscribe((mitra:any) => {
      model.mitraId = mitra.id
      this.kesanggupanApi.patchAttributes(this.mitraKesanggupan.id, model).subscribe((kesanggupan:any) => {
        sumberTambang = sumberTambang.map(entry => {
          return {
            mitraKesanggupanId: kesanggupan.id,
            tambangId: entry.tambangId,
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
