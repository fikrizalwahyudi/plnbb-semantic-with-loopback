import { Component, OnInit } from '@angular/core';
import { months } from '../../user/source/month/month';
import { dummy_pltu } from '../../user/source/dummy-pltu';
import { dummy_ref_kontrak } from '../../user/source/dummy-ref-kontrak';
import { ref_kontrak } from '../../user/user';
import { refKontrakValidation } from '../../shared/validation/validation';
import { ReferensiKontrakService } from '../../shared/services/referensi_kontrak.service';
import { resolve, reject } from 'q';
import { PltuService } from '../../shared/services/pltu.service';
import { MitraService } from '../../shared/services/mitra.service';

declare var $: any;
@Component({
  selector: 'master-referensi-kontrak',
  templateUrl: './master-referensi-kontrak.component.html',
  styleUrls: ['./master-referensi-kontrak.component.sass']
})
export class MasterReferensiKontrakComponent implements OnInit {
  new_ref: boolean = false;
  master_pltu: any = [];
  master_ref_kontrak: any = [];
  master_mitra: any = [];
  data_ref_kontrak = ref_kontrak;
  keyword = "";

  constructor( private refKontrakServices: ReferensiKontrakService, private pltuServices: PltuService, private mitraServices: MitraService) {
    // Looping for change pltu_id with pltu name
    
  }

  ngOnInit() {
    Promise.all([
      new Promise((resolve, reject) => {
        this.refKontrakServices.getAllReferensiKontrak().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
      }),
      new Promise((resolve, reject) => {
        this.pltuServices.getAllPltu().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
      }),
      new Promise((resolve, reject) => {
        this.mitraServices.getAllMitra().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
      })
    ]).then((responses) => {
      //Response Ref Kontrak
      this.master_ref_kontrak = responses[0];
      this.master_pltu = responses[1];
      this.master_mitra = responses[2];
      console.log(this.master_ref_kontrak, this.master_pltu, this.master_mitra)
    })
    
    // Looping for change pltu_id with pltu name
    for (let i = 0; i < this.master_ref_kontrak.length; i++) {
      this.onChangeNamePLTU(this.master_ref_kontrak[i].pltu_id, i);
    }
  }

  addNew() {
    if (this.new_ref) {
      this.new_ref = false;
    } else {
      this.multipleSelect();
      this.new_ref = true;
    }
  }

  onSubmit() {
    let val = refKontrakValidation();
    if (val) {
      this.new_ref = false;
      setTimeout(() => {
        this.multipleSelect();
        this.new_ref = true;
      }, 10)
      this.data_ref_kontrak.id = this.master_ref_kontrak.length + 1;
      //Using push to add new data to array
      //Soon - submit into database
      this.master_ref_kontrak.push(Object.assign({}, this.data_ref_kontrak));
      this.ngOnInit();
      this.clearArray();
    } else {
      console.log('form invalid');
    }
  }

  clearArray() {
    this.data_ref_kontrak.id = "";
    this.data_ref_kontrak.no = "";
    this.data_ref_kontrak.nama_pekerjaan = "";
    this.data_ref_kontrak.tanggal = "";
    this.data_ref_kontrak.pltu_id = "";
    this.data_ref_kontrak.mitra_id = "";
    this.data_ref_kontrak.jenis = "";
  }

  getSingleValue(identifier: any, source: any[], keySource: string) {
    console.log(identifier, source, keySource)
    return source.find((item) => item[keySource] == identifier);
  }

  onChangeNamePLTU(selectedPLTU: any, index: any) {
    this.master_ref_kontrak[index]['name_pltu'] = this.getSingleValue(selectedPLTU, this.master_pltu, "id").name;
    console.log(this.master_ref_kontrak[index]['name_pltu']);
  }

  onSelect() {
    this.multipleSelect();
    console.log(this.data_ref_kontrak.mitra_id);
  }

  multipleSelect(){
    $(document)
      .ready(function () {
        $('.label.ui.dropdown')
          .dropdown();
      });
  }

}
