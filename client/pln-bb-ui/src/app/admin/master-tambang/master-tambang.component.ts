import { Component, OnInit, Inject } from '@angular/core';
import { userMasterTambang } from '../../user/user';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'master-tambang',
  templateUrl: './master-tambang.component.html',
  styleUrls: ['./master-tambang.component.sass']
})
export class MasterTambangComponent implements OnInit {
  dummy_tambang : any = userMasterTambang;
  new_tambang: boolean = false;
  user_tambang: any = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.dummy_tambang.id = 1;
    this.dummy_tambang.name = 'Kencana';
    this.dummy_tambang.sertifikat = '821391249193241';
    this.dummy_tambang.jenis_tambang_id = 'Membara';
    this.dummy_tambang.lokasi_id = 'Kalimantan';
    this.dummy_tambang.tanggal_berlaku = '2018-11-23';
    this.dummy_tambang.tanggal_habis = '2018-11-23';
    this.user_tambang.push(Object.assign({}, this.dummy_tambang));
    this.storage.set('data_user_tambang',this.user_tambang);
    this.clearArrray();
   }

  ngOnInit() {
    this.user_tambang = this.storage.get('data_user_tambang');
  }

  addNew() {
    if (this.new_tambang) {
      this.new_tambang = false;

    } else {
      this.new_tambang = true;
    }
  }

  onSubmit(){
    console.log(this.user_tambang);
    if (this.user_tambang === null){
      this.dummy_tambang.id = 0;
    } else {
      this.dummy_tambang.id = this.user_tambang.length + 1;
    }
    console.log(this.dummy_tambang);
    this.user_tambang.push(Object.assign({}, this.dummy_tambang));
    console.log(this.user_tambang);
    this.storage.set('data_user_tambang',this.user_tambang);

    

    this.ngOnInit();
  }

  clearArrray(){
    this.dummy_tambang.id = this.user_tambang.length + 1;
    this.dummy_tambang.name = "";
    this.dummy_tambang.sertifikat = "";
    this.dummy_tambang.jenis_tambang_id = "";
    this.dummy_tambang.lokasi_id = "";
    this.dummy_tambang.tanggal_berlaku = "";
    this.dummy_tambang.tanggal_habis = "";
  }

}
