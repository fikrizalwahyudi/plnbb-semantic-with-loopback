/* tslint:disable */
import {
  PlnRencana,
  ShippingInstruction
} from '../index';

declare var Object: any;
export interface PlnRealisasiInterface {
  "plnRencanaId"?: any;
  "siId"?: any;
  "id"?: any;
  plnRencana?: PlnRencana;
  si?: ShippingInstruction;
}

export class PlnRealisasi implements PlnRealisasiInterface {
  "plnRencanaId": any = <any>null;
  "siId": any = <any>null;
  "id": any = <any>null;
  plnRencana: PlnRencana = null;
  si: ShippingInstruction = null;
  constructor(data?: PlnRealisasiInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlnRealisasi`.
   */
  public static getModelName() {
    return "PlnRealisasi";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlnRealisasi for dynamic purposes.
  **/
  public static factory(data: PlnRealisasiInterface): PlnRealisasi{
    return new PlnRealisasi(data);
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
      name: 'PlnRealisasi',
      plural: 'pln_realisasi',
      path: 'pln_realisasi',
      idName: 'id',
      properties: {
        "plnRencanaId": {
          name: 'plnRencanaId',
          type: 'any'
        },
        "siId": {
          name: 'siId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        plnRencana: {
          name: 'plnRencana',
          type: 'PlnRencana',
          model: 'PlnRencana',
          relationType: 'belongsTo',
                  keyFrom: 'plnRencanaId',
          keyTo: 'id'
        },
        si: {
          name: 'si',
          type: 'ShippingInstruction',
          model: 'ShippingInstruction',
          relationType: 'belongsTo',
                  keyFrom: 'siId',
          keyTo: 'id'
        },
      }
    }
  }
}
