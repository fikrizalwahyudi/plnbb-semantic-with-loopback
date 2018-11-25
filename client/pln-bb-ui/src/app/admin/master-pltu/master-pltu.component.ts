import { Component, OnInit, Inject } from '@angular/core';
import { pltu } from '../../user/user';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { PltuService } from '../../shared/services/pltu.service';
import { Pltu } from '../../shared/models/pltu';
import { promptDialog } from '../../shared/modals/prompt.modal';
import { pltuValidation } from '../../shared/validation/master-pltu.validation';

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
  keyword = "";
  loading: any;
  validationForm: any;
  isEdit: boolean = false;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private pltuService: PltuService) {

  }

  ngOnInit() {
    this.pltuService.getAllPltu().subscribe(e => {
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

  onSubmit(edit?) {

    this.validationForm = pltuValidation();

    if (this.validationForm) {
      // this.objPltu = this.masterPLTU;
      if (edit){
        this.pltuService.updatePltu(this.masterPLTU).subscribe(e => {
          console.log(e);
          this.clearArray();
          this.ngOnInit();
        })
      } else {
        this.masterPLTU.id = this.data_pltu.length + 1;
        this.pltuService.createPltu(this.masterPLTU).subscribe(e => {
          console.log(e);
          this.clearArray();
          this.ngOnInit();
        });
      }
    } else {
      console.log('form invalid');
    }
  }

  onEdit(index: any){
    this.new_pltu = true;
    this.masterPLTU.id = this.data_pltu[index].id;
    this.masterPLTU.code = this.data_pltu[index].code;
    this.masterPLTU.name = this.data_pltu[index].name;
    this.masterPLTU.address = this.data_pltu[index].address;
    this.masterPLTU.npwp = this.data_pltu[index].npwp;
    this.masterPLTU.status = this.data_pltu[index].status;
    
  }

  onDelete(id: any) {
    promptDialog('Delete data', 'Are you sure to delete this data?',() => {
      // onApprove 
      this.pltuService.deletePltuById(id).subscribe(e => {
        console.log(e);
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      })
    },
    // onDeny
      () => {
        console.log('deny')
      }
    );
  }

  clearArray() {
    this.masterPLTU.id = "";
    this.masterPLTU.code = "";
    this.masterPLTU.name = "";
    this.masterPLTU.address = "";
    this.masterPLTU.npwp = "";
    this.masterPLTU.status = "";
  }

  // showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   this.loading.present();
  // }

}
