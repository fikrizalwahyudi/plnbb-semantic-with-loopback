/* tslint:disable */
import {
  MitraKesanggupan,
  PlnRencana
} from '../index';

declare var Object: any;
export interface PlnRencanaPasokanInterface {
  "rencanaId"?: any;
  "mitraKesanggupanId"?: any;
  "tglPengiriman"?: any;
  "id"?: any;
  mitraKesanggupan?: MitraKesanggupan;
  rencana?: PlnRencana;
}

export class PlnRencanaPasokan implements PlnRencanaPasokanInterface {
  "rencanaId": any = <any>null;
  "mitraKesanggupanId": any = <any>null;
  "tglPengiriman": any = <any>null;
  "id": any = <any>null;
  mitraKesanggupan: MitraKesanggupan = null;
  rencana: PlnRencana = null;
  constructor(data?: PlnRencanaPasokanInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlnRencanaPasokan`.
   */
  public static getModelName() {
    return "PlnRencanaPasokan";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlnRencanaPasokan for dynamic purposes.
  **/
  public static factory(data: PlnRencanaPasokanInterface): PlnRencanaPasokan{
    return new PlnRencanaPasokan(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'PlnRencanaPasokan',
      plural: 'pln_rencana_pasokan',
      path: 'pln_rencana_pasokan',
      idName: 'id',
      properties: {
        "rencanaId": {
          name: 'rencanaId',
          type: 'any'
        },
        "mitraKesanggupanId": {
          name: 'mitraKesanggupanId',
          type: 'any'
        },
        "tglPengiriman": {
          name: 'tglPengiriman',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        mitraKesanggupan: {
          name: 'mitraKesanggupan',
          type: 'MitraKesanggupan',
          model: 'MitraKesanggupan',
          relationType: 'belongsTo',
                  keyFrom: 'mitraKesanggupanId',
          keyTo: 'id'
        },
        rencana: {
          name: 'rencana',
          type: 'PlnRencana',
          model: 'PlnRencana',
          relationType: 'belongsTo',
                  keyFrom: 'rencanaId',
          keyTo: 'id'
        },
      }
    }
  }
}
