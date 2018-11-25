import { Component, OnInit, Inject } from '@angular/core';
import { userMasterTambang } from '../../user/user';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { tambangValidation } from '../../shared/validation/master-tambang.validation';

@Component({
  selector: 'master-tambang',
  templateUrl: './master-tambang.component.html',
  styleUrls: ['./master-tambang.component.sass']
})
export class MasterTambangComponent implements OnInit {
  dummy_tambang: any = userMasterTambang;
  new_tambang: boolean = false;
  user_tambang: any = [];
  validationForm: number | boolean;

  constructor() {
  }

  ngOnInit() {

  }

  addNew() {
    if (this.new_tambang) {
      this.new_tambang = false;

    } else {
      this.new_tambang = true;
    }
  }

  onSubmit() {
    this.validationForm = tambangValidation();

    if (this.validationForm){
      
    }
    this.ngOnInit();
  }

  clearArrray() {
    this.dummy_tambang.id = this.user_tambang.length + 1;
    this.dummy_tambang.name = "";
    this.dummy_tambang.sertifikat = "";
    this.dummy_tambang.jenis_tambang_id = "";
    this.dummy_tambang.lokasi_id = "";
    this.dummy_tambang.tanggal_berlaku = "";
    this.dummy_tambang.tanggal_habis = "";
  }

}
