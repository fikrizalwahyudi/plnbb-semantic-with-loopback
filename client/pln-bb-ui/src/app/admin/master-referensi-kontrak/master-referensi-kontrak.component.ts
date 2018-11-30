import { Component, OnInit } from '@angular/core';
import { ref_kontrak, ref_kontrak_pltu, ref_kontrak_mitra } from '../../user/user';
import { refKontrakValidation } from '../../shared/validation/validation';
import { ReferensiKontrakService } from '../../shared/services/referensi_kontrak.service';
import { PltuService } from '../../shared/services/pltu.service';
import { MitraService } from '../../shared/services/mitra.service';
import { promptDialog } from '../../shared/modals/prompt.modal';
import { ReferensiKontrakPltuService } from '../../shared/services/referensi_kontrak_pltu.service';
import { ReferensiKontrakMitraService } from '../../shared/services/referensi_kontrak_mitra.service';

declare var $: any;
@Component({
  selector: 'master-referensi-kontrak',
  templateUrl: './master-referensi-kontrak.component.html',
  styleUrls: ['./master-referensi-kontrak.component.sass']
})
export class MasterReferensiKontrakComponent implements OnInit {
  public data_ref_kontrak: any = ref_kontrak;
  public data_ref_kontrak_pltu: any = ref_kontrak_pltu;
  public data_ref_kontak_mitra: any = ref_kontrak_mitra;
  keyword = "";
  masterJenis: any[] = [{ value: 1, desc: "CIF" }, { value: 2, desc: "FOB" }];
  master_mitra: any = [];
  master_pltu: any = [];
  master_ref_kontrak: any = [];
  master_ref_kontrak_mitra: any = [];
  master_ref_kontrak_pltu: any = [];
  new_ref: boolean = false;

  constructor(private refKontrakServices: ReferensiKontrakService, private pltuServices: PltuService, private mitraServices: MitraService,
    private refKontrakPltuServices: ReferensiKontrakPltuService, private refKontrakMitraServices: ReferensiKontrakMitraService) {

  }

  ngOnInit() {
    console.log(this.masterJenis);
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
      this.master_ref_kontrak = responses[0];
      console.info('Master Ref Kontrak', this.master_ref_kontrak);
      //Convert tanggal pekerjaan
      for (let i = 0; i < this.master_ref_kontrak.length; i++) {
        let date = new Date(this.master_ref_kontrak[i].tanggal_pekerjaan);
        let day = date.getDate() > 9 ? date.getDate() : '0' + (date.getDate());
        let month = date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
        let year = date.getFullYear();
        this.master_ref_kontrak[i].tanggal_pekerjaan = day + '-' + month + '-' + year;
      }
      // Looping for change jenis to jenis name

      //Response PLTU
      this.master_pltu = responses[1];
      console.info('Master PLTU', this.master_pltu);

      //Response Mitra
      this.master_mitra = responses[2];
      console.info('Master Mitra');

      //Response Ref Kontrak PLTU
      this.master_ref_kontrak_pltu = responses[3];
      console.info('Master Ref Kontrak PLTU', this.master_ref_kontrak_pltu);

      //Response Ref Kontrak Mitra
      this.master_ref_kontrak_mitra = responses[4];
      console.info('Master Ref Kontrak Mitra', this.master_ref_kontrak_mitra);

      // Looping for change pltu_id with pltu name && jenis with jenis desc
      for (let i = 0; i < this.master_ref_kontrak.length; i++) {
        this.onChangeNamePLTU(this.master_ref_kontrak[i].pltu_id, i);
        this.onChangeDescJenis(this.master_ref_kontrak[i].jenis, i);
        this.onChangeNameMitra(this.master_ref_kontrak[i].mitra_id, i);
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
        this.data_ref_kontrak.id = this.master_ref_kontrak.length + 1;
        this.refKontrakServices.createReferensiKontrak(this.data_ref_kontrak).subscribe((e) => {
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

          for (let i = 0; i < this.data_ref_kontrak.pltu_id.length; i++) {
            this.data_ref_kontrak_pltu.id = this.master_ref_kontrak_pltu.length + i + 1;
            this.data_ref_kontrak_pltu.referensi_kontrak_id = this.data_ref_kontrak.id;
            this.data_ref_kontrak_pltu.referensiKontrakId = this.data_ref_kontrak.id;
            this.data_ref_kontrak_pltu.pltu_id = this.data_ref_kontrak.pltu_id[i];
            this.data_ref_kontrak_pltu.pltuId = this.data_ref_kontrak.pltu_id[i];
            // Submit to table
            this.refKontrakPltuServices.createReferensiKontrakPltu(this.data_ref_kontrak_pltu).subscribe((e) => {
              resolve(e);
              if (i == this.data_ref_kontrak.pltu_id.length - 1) {
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
          for (let i = 0; i < this.data_ref_kontrak.mitra_id.length; i++) {
            this.data_ref_kontak_mitra.id = this.master_ref_kontrak_mitra.length + i + 1;
            this.data_ref_kontak_mitra.referensiKontrakId = this.data_ref_kontrak.id;
            this.data_ref_kontak_mitra.mitraId = this.data_ref_kontrak.mitra_id[i];
            // Submit to table
            this.refKontrakMitraServices.createReferensiKontrakMitra(this.data_ref_kontak_mitra).subscribe((e) => {
              resolve(e);
              if (i == this.data_ref_kontrak.mitra_id.length - 1) {
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
    this.data_ref_kontrak.id = "";
    this.data_ref_kontrak.nomor_kontrak = "";
    this.data_ref_kontrak.nama_pekerjaan = "";
    this.data_ref_kontrak.tanggal_pekerjaan = "";
    this.data_ref_kontrak.pltu_id = "";
    this.data_ref_kontrak.mitra_id = "";
    this.data_ref_kontrak.jenis = "";
  }

  getSingleValue(identifier: any, source: any[], keySource: string) {
    return source.find((item) => item[keySource] == identifier);
  }

  onChangeNamePLTU(selectedPLTU: any, index: any) {
    this.master_ref_kontrak[index]['name_pltu'] = this.getSingleValue(selectedPLTU, this.master_pltu, "id").name;
  }

  onChangeDescJenis(selectedJenis: any, index: any) {
    this.master_ref_kontrak[index]['desc_jenis'] = this.getSingleValue(selectedJenis, this.masterJenis, "value").desc;
  }

  onChangeNameMitra(selectedMitra: any, index: any) {
    this.master_ref_kontrak[index]['name_mitra'] = this.getSingleValue(selectedMitra, this.master_mitra, "id").name;
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
