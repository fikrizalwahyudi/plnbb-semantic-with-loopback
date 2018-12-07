/* tslint:disable */
import {
  MitraKesanggupan
} from '../index';

declare var Object: any;
export interface PlnRencanaInterface {
  "mitraKesanggupanId"?: any;
  "tglPengiriman"?: any;
  "id"?: any;
  mitraKesanggupan?: MitraKesanggupan;
}

export class PlnRencana implements PlnRencanaInterface {
  "mitraKesanggupanId": any = <any>null;
  "tglPengiriman": any = <any>null;
  "id": any = <any>null;
  mitraKesanggupan: MitraKesanggupan = null;
  constructor(data?: PlnRencanaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlnRencana`.
   */
  public static getModelName() {
    return "PlnRencana";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlnRencana for dynamic purposes.
  **/
  public static factory(data: PlnRencanaInterface): PlnRencana{
    return new PlnRencana(data);
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
      name: 'PlnRencana',
      plural: 'pln_rencana',
      path: 'pln_rencana',
      idName: 'id',
      properties: {
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
      }
    }
  }
}
