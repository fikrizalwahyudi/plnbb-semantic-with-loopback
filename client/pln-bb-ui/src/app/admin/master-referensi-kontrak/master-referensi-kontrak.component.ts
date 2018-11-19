import { Component, OnInit } from '@angular/core';
import { months } from '../../user/source/month/month';
import { dummy_pltu } from '../../user/source/dummy-pltu';
import { dummy_ref_kontrak } from '../../user/source/dummy-ref-kontrak';
import { ref_kontrak } from '../../user/user';
import { refKontrakValidation } from '../../shared/validation/validation';
declare var $: any;
@Component({
  selector: 'master-referensi-kontrak',
  templateUrl: './master-referensi-kontrak.component.html',
  styleUrls: ['./master-referensi-kontrak.component.sass']
})
export class MasterReferensiKontrakComponent implements OnInit {
  new_ref: boolean = false;
  master_months = months;
  master_pltu: any = [];
  master_ref_kontrak: any = [];
  data_ref_kontrak = ref_kontrak;


  constructor(
  ) {

    
    // Assign master_ref_kontrak and master_pltu with data from table kontrak and pltu in database
    this.master_ref_kontrak = dummy_ref_kontrak;
    this.master_pltu = dummy_pltu;
    
    // Looping for change pltu_id with pltu name
    for (let i = 0; i < this.master_ref_kontrak.length; i++) {
      this.onChangeNamePLTU(this.master_ref_kontrak[i].pltu_id, i);
    }
    console.log(this.master_ref_kontrak, this.master_pltu);
  }

  ngOnInit() {
  }

  addNew() {
    if (this.new_ref) {
      this.new_ref = false;
    } else {
      this.new_ref = true;
    }
  }

  onSubmit(){
    let val = refKontrakValidation();
    if (val){
      this.new_ref = false;
      setTimeout(() => {
        this.new_ref = true;
      }, 10)
      this.data_ref_kontrak.id = this.master_ref_kontrak.length + 1;
      //Using push to add new data to array
      //Soon - submit into database
      this.master_ref_kontrak.push(Object.assign({}, this.data_ref_kontrak));
      this.clearArray();
    } else {
      console.log('form invalid');
    }
  }

  clearArray(){
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

}
