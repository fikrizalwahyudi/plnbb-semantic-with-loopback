import { Component, OnInit } from '@angular/core';
import { Pltu } from '../../../shared/sdk';
import { PltuApi } from '../../../shared/sdk/services/custom/Pltu';
import { promptDialog } from '../../../shared/modals/prompt.modal';


@Component({
  selector: 'app-master-pltu-browse',
  templateUrl: './master-pltu-browse.component.html',
  styleUrls: ['./master-pltu-browse.component.sass']
})
export class MasterPltuBrowseComponent implements OnInit {

  pltus: Pltu[];
  errorMsg

  constructor(
    private pltuApi: PltuApi
  ) { 
    this.pltuApi.find({limit: 30}).subscribe(data => {
      this.pltus = data as Pltu[]
    })
  }

  ngOnInit() {
  }

  delete(item) {
    this.errorMsg = undefined

    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      this.pltuApi.deleteById(item.id).subscribe(data => {
        this.pltus = this.pltus.filter(u => u.id !== item.id)
      }, err => {
        this.errorMsg = err.message
      })
    }, () => {})
  }

}
