import { Component, OnInit } from '@angular/core';
import { ShippingApi, Shipping, UserApi } from '../../../shared/sdk';
import * as moment from 'moment';
import * as _ from 'lodash';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';

@Component({
  selector: 'app-mitra-kesanggupan-pasokan-inprogress',
  template: `
    <ng-container *ngFor="let item of daftarPengiriman | keyvalue;">
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
              <th class="center aligned collapsing">Laycan</th>
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
                  <div class="ui blue small label">{{itemEntry.laycanStartDate | date:'dd'}} - {{itemEntry.laycanEndDate | date:'dd'}}</div>
                </td>
                <td class="four wide column-jetty">{{itemEntry.jetty.name}}</td>
                <td>{{itemEntry.moda | uppercase}}</td>
                <td>{{itemEntry.tipe | uppercase}}</td>
                <td class="right aligned">{{itemEntry.jumlah | number:undefined:'id'}}</td>
                <td class="right aligned">{{itemEntry.harga | currency:'Rp':undefined:undefined:'id'}}</td>
                <td class="center aligned collapsing">
                  <a *ngIf="!itemEntry.loading || (itemEntry.loading.status == 0)" [routerLink]="['/mitra', 'kesanggupan-pasokan', itemEntry.id, 'loading']">
                    <i class="box link icon action-icon red"></i>
                  </a>
                  <a *ngIf="itemEntry.loading && itemEntry.loading.status == 3" [routerLink]="['/mitra', 'kesanggupan-pasokan', itemEntry.id, 'loading']">
                    <i class="box link icon action-icon green"></i>
                  </a>
                  <a *ngIf="itemEntry.loading && itemEntry.loading.status == 1">
                    <i class="spinner loading icon action-icon"></i>
                  </a>
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
export class MitraKesanggupanPasokanInprogressComponent implements OnInit {

  daftarPengiriman
  daftarPltu = {}

  constructor(
    private userApi:UserApi,
    private mitraApi:MitraApi,
    private shippingApi:ShippingApi
  ) { 
    this.mitraApi.findOne({where: {userId: this.userApi.getCurrentId()}}).subscribe((mitra:Mitra) => {
      this.shippingApi.find({where: {mitraId: mitra.id}, include: ['jetty', 'mitra', 'referensiKontrak', 'si', 'transport', 'tujuanPltu', 'loading']}).subscribe(data => {
        let buffer: any = _.groupBy(data, (entry: Shipping) => {
          let date = new Date(entry.laycanStartDate)
          return moment(date).format('MMMM YYYY')
        })
  
        for (var key in buffer) {
          let entry = buffer[key]
          buffer[key] = _.groupBy(entry, (entryI: Shipping) => {
            this.daftarPltu[entryI.tujuanPltuId] = entryI.tujuanPltu
  
            return entryI.tujuanPltuId
          })
        }
  
        this.daftarPengiriman = buffer
  
        console.log(this.daftarPengiriman)
      })
    })
  }

  ngOnInit() {
  }

}
