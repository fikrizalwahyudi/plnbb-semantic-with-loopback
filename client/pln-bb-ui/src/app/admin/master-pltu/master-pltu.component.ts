import { Component, OnInit, Inject } from '@angular/core';
import { pltu } from '../../user/user';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { dummy_pltu } from '../../user/source/dummy-pltu';

@Component({
  selector: 'master-pltu',
  templateUrl: './master-pltu.component.html',
  styleUrls: ['./master-pltu.component.sass']
})
export class MasterPltuComponent implements OnInit {
  new_pltu: boolean = false;
  public masterPLTU: any = pltu;
  data_pltu: any = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

    //Soon assign data_pltu with data master pltu from database
    this.data_pltu = dummy_pltu;
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
    //Using push to add new data to array
    //Soon - submit into database
    this.masterPLTU.id = this.data_pltu.length + 1;
    this.data_pltu.push(Object.assign({}, this.masterPLTU));
    this.clearArray();
    this.storage.set('masterPLTU',this.data_pltu);
    this.data_pltu = this.storage.get('masterPLTU');
  }

  clearArray(){
    this.masterPLTU.id = "";
    this.masterPLTU.code = "";
    this.masterPLTU.name = "";
    this.masterPLTU.address = "";
    this.masterPLTU.npwp = "";
    this.masterPLTU.status = "";
    this.data_pltu = this.storage.get('masterPLTU');
  }

}
