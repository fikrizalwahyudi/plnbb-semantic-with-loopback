import { Component, OnInit } from '@angular/core';
import { refKontrakValidation } from '../../shared/validation/validation';
import { ReferensiKontrakService } from '../../shared/services/referensi_kontrak.service';
import { PltuService } from '../../shared/services/pltu.service';
import { MitraService } from '../../shared/services/mitra.service';
import { promptDialog } from '../../shared/modals/prompt.modal';
import { ReferensiKontrakPltuService } from '../../shared/services/referensi_kontrak_pltu.service';
import { ReferensiKontrakMitraService } from '../../shared/services/referensi_kontrak_mitra.service';
import { ReferensiKontrak } from '../../shared/models/referensi_kontrak';
import { ReferensiKontrakPltu } from '../../shared/models/referensi_kontrak_pltu';
import { ReferensiKontrakMitra } from '../../shared/models/referensi_kontrak_mitra';

declare var $: any;
@Component({
  selector: 'master-referensi-kontrak',
  templateUrl: './master-referensi-kontrak.component.html',
  styleUrls: ['./master-referensi-kontrak.component.sass']
})
export class MasterReferensiKontrakComponent implements OnInit {
  public dataRefKontrak: any = new ReferensiKontrak;
  public dataRefKontrakPltu: any = new ReferensiKontrakPltu;
  public dataRefKontrakMitra: any = new ReferensiKontrakMitra;
  keyword = "";
  masterJenis: any[] = [{ value: 1, desc: "CIF" }, { value: 2, desc: "FOB" }];
  masterMitra: any = [];
  masterPltu: any = [];
  masterRefKontrak: any = [];
  masterRefKontrakMitra: any = [];
  masterRefKontrakPltu: any = [];
  pltuIdSplitted: any;
  mitraIdSplitted: any;
  new_ref: boolean = false;

  constructor(private refKontrakServices: ReferensiKontrakService, private pltuServices: PltuService, private mitraServices: MitraService,
    private refKontrakPltuServices: ReferensiKontrakPltuService, private refKontrakMitraServices: ReferensiKontrakMitraService) {

  }

  ngOnInit() {
    Promise.all([
      new Promise((resolve, reject) => {
        this.refKontrakServices.getAllReferensiKontrak().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
      }),
      new Promise((resolve, reject) => {
        this.pltuServices.getAllPltu().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
      }),
      new Promise((resolve, reject) => {
        this.mitraServices.getAllMitra().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
      }),
      new Promise((resolve, reject) => {
        this.refKontrakPltuServices.getAllReferensiKontrakPltu().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
      }),
      new Promise((resolve, reject) => {
        this.refKontrakMitraServices.getAllReferensiKontrakMitra().subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        })
      })
    ]).then((responses) => {
      //Response Ref Kontrak
      this.masterRefKontrak = responses[0];
      // this.masterRefKontrak['pltuIdSplitted'] = this.onSplitValue(this.masterRefKontrak.pltuId);
      console.info('Master Ref Kontrak', this.masterRefKontrak);
      //Convert tanggal pekerjaan
      for (let i = 0; i < this.masterRefKontrak.length; i++) {
        let date = new Date(this.masterRefKontrak[i].tanggalPekerjaan);
        let day = date.getDate() > 9 ? date.getDate() : '0' + (date.getDate());
        let month = date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
        let year = date.getFullYear();
        this.masterRefKontrak[i].tanggalPekerjaan = day + '-' + month + '-' + year;
      }
      
      

      //Response PLTU
      this.masterPltu = responses[1];
      console.info('Master PLTU', this.masterPltu);

      //Response Mitra
      this.masterMitra = responses[2];
      console.info('Master Mitra', this.masterMitra);

      //Response Ref Kontrak PLTU
      this.masterRefKontrakPltu = responses[3];
      console.info('Master Ref Kontrak PLTU', this.masterRefKontrakPltu);

      //Response Ref Kontrak Mitra
      this.masterRefKontrakMitra = responses[4];
      console.info('Master Ref Kontrak Mitra', this.masterRefKontrakMitra);

      // Looping for change pltu_id with pltu name && jenis with jenis desc
      for (let i = 0; i < this.masterRefKontrak.length; i++) {
        this.masterRefKontrak[i]['splittedPltu'] = this.onSplitValue(this.masterRefKontrak[i].pltuId);
        this.masterRefKontrak[i]['splittedMitra'] = this.onSplitValue(this.masterRefKontrak[i].mitraId);
        for (let j = 0; j < this.masterRefKontrak[i].splittedPltu.length; j++){
          this.masterRefKontrak[i].splittedPltu[j] = this.onChangeNamePLTU(this.masterRefKontrak[i].splittedPltu[j], i);
        }
        for (let j = 0; j < this.masterRefKontrak[i].splittedMitra.length; j++){
          this.masterRefKontrak[i].splittedMitra[j] = this.onChangeNameMitra(this.masterRefKontrak[i].splittedMitra[j], i);
        }
        this.onChangeDescJenis(this.masterRefKontrak[i].jenis, i);
      }
    })

  }

  addNew() {
    if (this.new_ref) {
      this.new_ref = false;
    } else {
      this.multipleSelect();
      this.new_ref = true;
    }
  }

  onSubmit() {
    let val = refKontrakValidation();
    if (val) {
      new Promise((resolve, reject) => {
        let id = this.masterRefKontrak.length + 1
        this.dataRefKontrak.id = id.toString();
        console.log(this.dataRefKontrak);
        this.refKontrakServices.createReferensiKontrak(this.dataRefKontrak).subscribe((e) => {
          resolve(e);
          this.clearArray();
          this.multipleSelect();
          this.ngOnInit();
        }, (err) => {
          reject(err)
        });
      }),
        new Promise((resolve, reject) => {
          //Assign for table ref_kontrak_pltu
          //Looping pltu_id

          for (let i = 0; i < this.dataRefKontrak.pltuId.length; i++) {
            this.dataRefKontrakPltu.id = this.masterRefKontrakPltu.length + i + 1;
            this.dataRefKontrakPltu.referensiKontrakId = this.dataRefKontrak.id;
            this.dataRefKontrakPltu.pltuId = this.dataRefKontrak.pltuId[i];
            console.log(this.dataRefKontrakPltu);
            // Submit to table
            this.refKontrakPltuServices.createReferensiKontrakPltu(this.dataRefKontrakPltu).subscribe((e) => {
              resolve(e);
              if (i == this.dataRefKontrak.pltuId.length - 1) {
                this.clearArray();
                this.multipleSelect();
                this.ngOnInit();
              }
            }, (err) => {
              reject(err);
            })
          }
        }),
        new Promise((resolve, reject) => {
          //Assign for table ref_kontrak_mitra
          for (let i = 0; i < this.dataRefKontrak.mitraId.length; i++) {
            let id = this.masterRefKontrakMitra.length + i + 1;
            this.dataRefKontrakMitra.id = id.toString();
            this.dataRefKontrakMitra.referensiKontrakId = this.dataRefKontrak.id;
            this.dataRefKontrakMitra.mitraId = this.dataRefKontrak.mitraId[i];
            console.log(this.dataRefKontrakMitra);
            // Submit to table
            this.refKontrakMitraServices.createReferensiKontrakMitra(this.dataRefKontrakMitra).subscribe((e) => {
              resolve(e);
              if (i == this.dataRefKontrak.mitraId.length - 1) {
                this.clearArray();
                this.multipleSelect();
                this.ngOnInit();
              }
            }, (err) => {
              reject(err);
            })
          }
        })
    } else {
      console.log('form invalid');
    }
  }

  clearArray() {
    // this.dataRefKontrak.id = "";
    this.dataRefKontrak.nomorKontrak = "";
    this.dataRefKontrak.namaPekerjaan = "";
    this.dataRefKontrak.tanggalPekerjaan = "";
    this.dataRefKontrak.pltuId = "";
    this.dataRefKontrak.mitraId = "";
    this.dataRefKontrak.jenis = "";
  }

  getSingleValue(identifier: any, source: any[], keySource: string) {
    return source.find((item) => item[keySource] == identifier);
  }

  onChangeNamePLTU(selectedPLTU: any, index: any) {
    return this.getSingleValue(selectedPLTU, this.masterPltu, "id").name;
  }

  onChangeDescJenis(selectedJenis: any, index: any) {
    this.masterRefKontrak[index]['descJenis'] = this.getSingleValue(selectedJenis, this.masterJenis, "value").desc;
  }

  onChangeNameMitra(selectedMitra: any, index: any) {
    return this.getSingleValue(selectedMitra, this.masterMitra, "id").name;
  }

  onSplitValue(selectedValue: any){
    return selectedValue.split(",");
  }

  onSelect() {
    this.multipleSelect();
  }

  onDelete(id: any) {
    promptDialog('Delete data', 'Are you sure to delete this data?', () => {
      // onApprove 
      this.refKontrakServices.deleteReferensiKontrakById(id).subscribe(e => {
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

  multipleSelect() {
    $(document)
      .ready(function () {
        $('.label.ui.dropdown')
          .dropdown();
      });
  }

}
