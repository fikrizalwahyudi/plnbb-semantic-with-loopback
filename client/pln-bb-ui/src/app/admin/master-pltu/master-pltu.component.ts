import { Component, OnInit, Inject } from '@angular/core';
import { pltu } from '../../user/user';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { dummy_pltu } from '../../user/source/dummy-pltu';
import { pltuValidation } from '../../shared/validation/validation';
import {PltuService} from '../../shared/services/pltu.service';
import {Pltu} from '../../shared/models/pltu';

@Component({
  selector: 'master-pltu',
  templateUrl: './master-pltu.component.html',
  styleUrls: ['./master-pltu.component.sass']
})
export class MasterPltuComponent implements OnInit {
  new_pltu: boolean = false;
  public masterPLTU: any = pltu;
  public objPltu = new Pltu();
  data_pltu: any = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private pltuService:PltuService) {

    //Soon assign data_pltu with data master pltu from database
    this.data_pltu = dummy_pltu;
    console.log(this.data_pltu);
   }

  ngOnInit() {
    this.pltuService.getAllPltu().subscribe(e=>{
      console.log(e);
      this.data_pltu = e;
    })
  }

  addNew() {
    if (this.new_pltu) {
      this.new_pltu = false;

    } else {
      this.new_pltu = true;
    }
  }

  onSubmit(){
    let a = pltuValidation();

    if (a){
      // this.objPltu = this.masterPLTU;
      console.log(this.masterPLTU);
      this.pltuService.createPltu(this.masterPLTU).subscribe(e=>{
        console.log(e);
        this.new_pltu = false;
        this.ngOnInit();
      });
      // this.new_pltu = false;
      // setTimeout(() => {
      //   this.new_pltu = true;
      // }, 10)
      // //Using push to add new data to array
      // //Soon - submit into database
      // this.masterPLTU.id = this.data_pltu.length + 1;
      // this.data_pltu.push(Object.assign({}, this.masterPLTU));
      // this.storage.set('masterPLTU',this.data_pltu);
      // this.clearArray();
      // this.data_pltu = this.storage.get('masterPLTU');
      // console.log(this.data_pltu);
    } else {
      console.log('form invalid');
    }
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
