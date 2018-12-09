import { Component, OnInit } from '@angular/core';
import { Jetty } from '../../../shared/sdk';
import { JettyApi } from '../../../shared/sdk/services/custom/Jetty';
import { promptDialog } from '../../../shared/modals/prompt.modal';

@Component({
  selector: 'app-master-jetty-browse',
  templateUrl: './master-jetty-browse.component.html',
  styleUrls: ['./master-jetty-browse.component.sass']
})
export class MasterJettyBrowseComponent implements OnInit {

  jettys: Jetty[];
  errorMsg

  constructor(
    private jettyApi: JettyApi
  ) {
    this.jettyApi.find({ limit: 30 }).subscribe(data => {
      this.jettys = data as Jetty[]
    })
  }

  ngOnInit() {
  }

  delete(item) {
    this.errorMsg = undefined

    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      this.jettyApi.deleteById(item.id).subscribe(data => {
        this.jettys = this.jettys.filter(u => u.id !== item.id)
      }, err => {
        this.errorMsg = err.message
      })
    }, () => { })
  }
}
