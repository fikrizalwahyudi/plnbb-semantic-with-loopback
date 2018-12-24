import { Component, OnInit } from '@angular/core';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import * as _ from 'lodash';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';
import * as moment from 'moment';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';

declare var $: any;

@Component({
  selector: 'app-mitra-kesanggupan-pasokan-browse',
  templateUrl: './mitra-kesanggupan-pasokan-browse.component.html',
  styleUrls: ['./mitra-kesanggupan-pasokan-browse.component.sass']
})
export class MitraKesanggupanPasokanBrowseComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}