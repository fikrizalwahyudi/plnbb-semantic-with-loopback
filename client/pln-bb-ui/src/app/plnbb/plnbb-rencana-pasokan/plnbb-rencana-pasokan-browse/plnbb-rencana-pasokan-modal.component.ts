import { Component, OnInit, Input } from '@angular/core';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-plnbb-rencana-pasokan-modal',
  template: `
    <table class="ui very basic selectable compact table">
      <thead>
        <tr><th colspan="5">
          Daftar Pasokan Tersedia Oleh Mitra
        </th>
      </tr></thead>
      <tbody>
        <tr *ngFor="let item of daftarPasokan; let index=index" [formGroup]="buffer.controls[index]">
          <td>
            <div class="ui checkbox" uiCheckbox>
              <input type="checkbox" tabindex="0" class="hidden" formControlName="checked">
              <label>{{item.mitra.name}}</label>
            </div>
          </td>
          <td>{{item.tglPengiriman | date:'shortDate'}}</td>
          <td>{{item.jenis | uppercase}}</td>
          <td class="right aligned">{{item.jumlah | number}} MT</td>
          <td class="right aligned">{{item.harga | currency:'Rp':undefined:undefined:'id'}}/MT</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class PlnbbRencanaPasokanModalComponent implements OnInit {

  @Input()
  daftarPasokan

  @Input()
  buffer:FormArray

  constructor(
    private pasokanApi:MitraKesanggupanApi
  ) { 
    /*this.pasokanApi.find({where: {}, include:['mitra', 'tujuanPltu', 'jetty', 'referensiKontrak'], order: ['jumlah DESC', 'harga ASC']}).subscribe(data => {
      this.daftarPasokan = data
    })*/
  }

  ngOnInit() {
  }
  
  onChecked(event, item) {
    //console.log(event)
    //console.log(item)

    //let index = this.buffer.findIndex(entry => item.id === entry.id)

    //if(index < 0)
    //  this.buffer.push(item)
    //else
    //  this.buffer = this.buffer.filter(entry => item.id === entry.id)
    //console.log(index)
  }

}
