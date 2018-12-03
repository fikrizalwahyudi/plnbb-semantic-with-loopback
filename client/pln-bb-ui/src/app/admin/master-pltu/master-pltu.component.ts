import { Component, OnInit, Inject } from '@angular/core';

declare var $: any;

@Component({
  selector: 'master-pltu',
  templateUrl: './master-pltu.component.html',
  styleUrls: ['./master-pltu.component.sass']
})
export class MasterPltuComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    
  }

  // addNew() {
  //   if (this.new_pltu) {
  //     this.new_pltu = false;

  //   } else {
  //     this.new_pltu = true;
  //     this.isEdit = false;
  //   }
  // }

  // onSubmit(edit?) {

  //   this.validationForm = pltuValidation();

  //   if (this.validationForm) {
  //     // this.objPltu = this.masterPLTU;
  //     if (this.isEdit){
  //       this.pltuService.updatePltu(this.masterPLTU).subscribe(e => {
  //         console.log(e);
  //         this.clearArray();
  //         this.ngOnInit();
  //       })
  //     } else {
  //       this.masterPLTU.id = this.data_pltu.length + 1;
  //       this.pltuService.createPltu(this.masterPLTU).subscribe(e => {
  //         console.log(e);
  //         this.clearArray();
  //         this.ngOnInit();
  //       });
  //     }
  //   } else {
  //     console.log('form invalid');
  //   }
  // }

  // onEdit(index: any){
  //   this.new_pltu = true;
  //   this.masterPLTU.id = this.data_pltu[index].id;
  //   this.masterPLTU.code = this.data_pltu[index].code;
  //   this.masterPLTU.name = this.data_pltu[index].name;
  //   this.masterPLTU.address = this.data_pltu[index].address;
  //   this.masterPLTU.npwp = this.data_pltu[index].npwp;
  //   this.masterPLTU.status = this.data_pltu[index].status;
  //   this.isEdit = true;
  // }

  // onDelete(id: any) {
  //   promptDialog('Delete data', 'Are you sure to delete this data?',() => {
  //     // onApprove 
  //     this.pltuService.deletePltuById(id).subscribe(e => {
  //       console.log(e);
  //       this.ngOnInit();
  //     }, (error) => {
  //       console.log(error);
  //     })
  //   },
  //   // onDeny
  //     () => {
  //       console.log('deny')
  //     }
  //   );
  // }

  // clearArray() {
  //   this.masterPLTU.id = "";
  //   this.masterPLTU.code = "";
  //   this.masterPLTU.name = "";
  //   this.masterPLTU.address = "";
  //   this.masterPLTU.npwp = "";
  //   this.masterPLTU.status = "";
  // }

  // showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   this.loading.present();
  // }

}
