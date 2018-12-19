import { Component, OnInit } from '@angular/core';
import { TambangApi } from '../../../shared/sdk/services/custom/Tambang';
import { Tambang } from '../../../shared/sdk/models/Tambang';

@Component({
  selector: 'app-master-tambang-browse',
  templateUrl: './master-tambang-browse.component.html',
  styleUrls: ['./master-tambang-browse.component.sass']
})
export class MasterTambangBrowseComponent implements OnInit {

  tambangs:Tambang[]

  constructor(
    private tambangApi:TambangApi
  ) { 
    this.tambangApi.find({limit: 30}).subscribe(data => {
      this.tambangs = data as Tambang[]
    })
  }

  convertJenisSertifikat(item){
    if(item=='iup'){
      return 'Izin Usaha Pertambangan (IUP)';
    }else if(item=='iupk'){
      return 'Izin Usaha Pertambangan Khusus (IUPK)';
    }else if(item=='ipr'){
      return 'Izin Pertambangan Rakyat';
    }
  }

  ngOnInit() {
  }

}
