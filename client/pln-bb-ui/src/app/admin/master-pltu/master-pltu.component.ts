import { Component, OnInit, Inject } from '@angular/core';
import { pltu } from '../../user/user';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'master-pltu',
  templateUrl: './master-pltu.component.html',
  styleUrls: ['./master-pltu.component.sass']
})
export class MasterPltuComponent implements OnInit {
  arrMasterPLTU: any = [];
  new_pltu: boolean = false;
  public masterPLTU: any = pltu;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

    this.masterPLTU.id = "1";
    this.masterPLTU.code = "PPU";
    this.masterPLTU.name = "PLTU Papua";
    this.masterPLTU.address = "Jayapura";
    this.masterPLTU.npwp = "298319312-35";
    this.masterPLTU.status = "Terpercaya";
    this.arrMasterPLTU.push(Object.assign({}, this.masterPLTU));
    storage.set('masterPLTU',this.arrMasterPLTU);
    this.clearArray();
   }

  ngOnInit() {
  }

  addNew() {
    if (this.new_pltu) {
      this.new_pltu = false;

    } else {
      this.new_pltu = true;
    }
  }

  onSubmit(){
    this.arrMasterPLTU.push(Object.assign({}, this.masterPLTU));
    this.storage.set('masterPLTU',this.arrMasterPLTU);
    this.arrMasterPLTU = this.storage.get('masterPLTU');
  }

  clearArray(){
    this.masterPLTU.id = this.arrMasterPLTU.length + 1;
    this.masterPLTU.id = "";
    this.masterPLTU.code = "";
    this.masterPLTU.name = "";
    this.masterPLTU.address = "";
    this.masterPLTU.npwp = "";
    this.masterPLTU.status = "";
    this.arrMasterPLTU = this.storage.get('masterPLTU');
  }

}
