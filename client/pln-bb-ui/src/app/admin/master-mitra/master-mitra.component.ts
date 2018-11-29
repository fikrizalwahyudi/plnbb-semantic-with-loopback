import { Component, OnInit } from '@angular/core';
import { MitraService } from '../../shared/services/mitra.service';
import { Mitra } from '../../shared/models/mitra';
import { promptDialog } from '../../shared/modals/prompt.modal';
import { mitraValidation } from '../../shared/validation/master-mitra.validation';

@Component({
  selector: 'master-mitra',
  templateUrl: './master-mitra.component.html',
  styleUrls: ['./master-mitra.component.sass']
})
export class MasterMitraComponent implements OnInit {
  new_mitra: boolean = false;
  public masterMitra: any = new Mitra();
  data_mitra: any = [];
  keyword = "";
  loading: any;
  validationForm: any;
  isEdit: boolean = false;

  constructor(private mitraService: MitraService) { }

  ngOnInit() {
    this.isEdit = false;
    this.mitraService.getAllMitra().subscribe(e => {
      console.log(e);
      this.data_mitra = e;

      for (let i = 0; i < this.data_mitra.length; i++) {
        this.onChangeStatus(this.data_mitra[i].status, i)
      }
    })
  }

  addNew() {
    if (this.new_mitra) {
      this.new_mitra = false;

    } else {
      this.masterMitra = new Mitra();
      this.new_mitra = true;
      this.isEdit = false;
    }
  }

  onSubmit(edit?) {

    this.validationForm = mitraValidation();

    if (this.validationForm) {
      if (this.isEdit){
        this.mitraService.updateMitra(this.masterMitra).subscribe(e => {
          console.log(e);
          this.clearArray();
          this.ngOnInit();
        })
      } else {
        delete this.masterMitra.id
        this.masterMitra.status = 1
        this.mitraService.createMitra(this.masterMitra).subscribe(e => {
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
    this.new_mitra = true;
    this.masterMitra.id = this.data_mitra[index].id;
    this.masterMitra.code = this.data_mitra[index].code;
    this.masterMitra.name = this.data_mitra[index].name;
    this.masterMitra.address = this.data_mitra[index].address;
    this.masterMitra.npwp = this.data_mitra[index].npwp;
    this.masterMitra.status = this.data_mitra[index].status;
    this.isEdit = true;
  }

  onDelete(id: any) {
    promptDialog('Delete data', 'Are you sure to delete this data?',() => {
      // onApprove 
      this.mitraService.deleteMitraById(id).subscribe(e => {
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

  onChangeStatus(value: any, index: any){
    var status = "Tidak Aktif"
    if(value == 1)
      status = "Aktif"

    this.data_mitra[index]['status_name'] = status
  }

  clearArray() {
    this.masterMitra = new Mitra();
  }

}
