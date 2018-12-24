import { Component, OnInit } from '@angular/core';
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-mitra-kesanggupan-pasokan-available',
  template: `
    <ng-container *ngFor="let item of daftarKesanggupan | keyvalue;">
      <a class="ui label month-divider">
        <i class="calendar icon"></i>
        {{item.key}}
      </a>

      <div class="ui segment" *ngFor="let itemPltu of item.value | keyvalue">
        <h5 class="ui header">
          <i class="table icon"></i>
          <div class="content">
            {{daftarPltu[itemPltu.key].name}}
            <div class="sub header">{{daftarPltu[itemPltu.key].address}}</div>
          </div>
        </h5>
        <table class="ui very basic single line compact table">
          <thead>
            <tr>
              <th class="center aligned collapsing">Tanggal</th>
              <th>Jetty</th>
              <th>Moda</th>
              <th>Tipe</th>
              <th class="right aligned">Jumlah (MT)</th>
              <th class="right aligned">Harga/MT</th>
              <th class="center aligned collapsing"></th>
            </tr>
          </thead>
          <tbody>
            <ng-container *ngFor="let itemEntry of itemPltu.value">
              <tr>
                <td class="center top aligned collapsing">
                  <div class="ui blue small label">{{itemEntry.tglPengiriman | date:'dd'}}</div>
                </td>
                <td class="column-jetty">{{itemEntry.jetty?.name}}</td>
                <td>{{itemEntry.mode | uppercase}}</td>
                <td>{{itemEntry.tipe | uppercase}}</td>
                <td class="right aligned">{{itemEntry.jumlah | number:undefined:'id'}}</td>
                <td class="right aligned">{{itemEntry.harga | currency:'Rp':undefined:undefined:'id'}}</td>
                <td class="center aligned collapsing">
                  <ng-container *ngIf="!itemEntry.lock">
                    <a href="javascript:void(0)"
                    (click)="delete(itemEntry, item.key)">
                      <i class="trash link icon action-icon"></i>
                    </a>
                    <a [routerLink]="['/mitra', 'kesanggupan-pasokan', itemEntry.id, 'edit']">
                      <i class="edit link icon action-icon"></i>
                    </a>
                    <a (click)="lock(itemEntry)">
                      <i class="unlock link red icon action-icon"></i>
                    </a>
                  </ng-container>
                  <ng-container *ngIf="itemEntry.lock">
                    <a>
                      <i class="trash icon action-icon disabled"></i>
                    </a>
                    <a>
                      <i class="edit icon action-icon disabled"></i>
                    </a>
                    <a>
                      <i class="lock icon action-icon green"></i>
                    </a>
                  </ng-container>
                </td>
              </tr>
            </ng-container>
          </tbody>
        </table>
      </div>
    </ng-container>
  `,
  styles: []
})
export class MitraKesanggupanPasokanAvailableComponent implements OnInit {

  mitra: Mitra[];
  mitras: Mitra[];
  errorMsg: string;

  daftarKesanggupan
  daftarKontrak
  daftarPltu = {}

  constructor(
    private userApi: UserApi,
    private mitraApi: MitraApi,
    private kesanggupanApi: MitraKesanggupanApi
  ) {
    this.load()
  }

  ngOnInit() {
  }

  load() {
    let now = new Date()
    now.setDate(1)
    let next = new Date()
    next.setDate(1)
    next.setMonth(now.getMonth() + 2)

    this.kesanggupanApi.find({ where: { 
      userId: this.userApi.getCurrentId(),
      tglPengiriman: {between: [now, next]}
    }, include: ['tujuanPltu', 'referensiKontrak', 'jetty'] }).subscribe(data => {
      let buffer: any = _.groupBy(data, (entry: MitraKesanggupan) => {
        let date = new Date(entry.tglPengiriman)
        return moment(date).format('MMMM YYYY')
      })

      for (var key in buffer) {
        let entry = buffer[key]
        buffer[key] = _.groupBy(entry, (entryI: MitraKesanggupan) => {
          this.daftarPltu[entryI.tujuanPltuId] = entryI.tujuanPltu

          return entryI.tujuanPltuId
        })
      }

      this.daftarKesanggupan = buffer
    })
  }

  delete(item, key) {
    this.errorMsg = undefined
    
    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      
    }, () => {})
  }
  
  lock(item) {
    this.kesanggupanApi.patchAttributes(item.id, { lock: true }).subscribe(() => {      
      item.lock = true
    })
  }

}
