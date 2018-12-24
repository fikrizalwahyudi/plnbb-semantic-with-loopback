/* tslint:disable */
import {
  MitraKesanggupan,
  PlnRencanaPasokan,
  Mitra,
  MitraShippingInstructionRequest
} from '../index';

declare var Object: any;
export interface MitraShippingOrderInterface {
  "tglOrder"?: Date;
  "mitraKesanggupanId"?: any;
  "rencanaPasokanId"?: any;
  "mitraId"?: any;
  "id"?: any;
  mitraKesanggupan?: MitraKesanggupan;
  rencanaPasokan?: PlnRencanaPasokan;
  mitra?: Mitra;
  siRequest?: MitraShippingInstructionRequest;
}

export class MitraShippingOrder implements MitraShippingOrderInterface {
  "tglOrder": Date = new Date(0);
  "mitraKesanggupanId": any = <any>null;
  "rencanaPasokanId": any = <any>null;
  "mitraId": any = <any>null;
  "id": any = <any>null;
  mitraKesanggupan: MitraKesanggupan = null;
  rencanaPasokan: PlnRencanaPasokan = null;
  mitra: Mitra = null;
  siRequest: MitraShippingInstructionRequest = null;
  constructor(data?: MitraShippingOrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MitraShippingOrder`.
   */
  public static getModelName() {
    return "MitraShippingOrder";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MitraShippingOrder for dynamic purposes.
  **/
  public static factory(data: MitraShippingOrderInterface): MitraShippingOrder{
    return new MitraShippingOrder(data);
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
      name: 'MitraShippingOrder',
      plural: 'mitra_shipping_order',
      path: 'mitra_shipping_order',
      idName: 'id',
      properties: {
        "tglOrder": {
          name: 'tglOrder',
          type: 'Date'
        },
        "mitraKesanggupanId": {
          name: 'mitraKesanggupanId',
          type: 'any'
        },
        "rencanaPasokanId": {
          name: 'rencanaPasokanId',
          type: 'any'
        },
        "mitraId": {
          name: 'mitraId',
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
        rencanaPasokan: {
          name: 'rencanaPasokan',
          type: 'PlnRencanaPasokan',
          model: 'PlnRencanaPasokan',
          relationType: 'belongsTo',
                  keyFrom: 'rencanaPasokanId',
          keyTo: 'id'
        },
        mitra: {
          name: 'mitra',
          type: 'Mitra',
          model: 'Mitra',
          relationType: 'belongsTo',
                  keyFrom: 'mitraId',
          keyTo: 'id'
        },
        siRequest: {
          name: 'siRequest',
          type: 'MitraShippingInstructionRequest',
          model: 'MitraShippingInstructionRequest',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'shippingOrderId'
        },
      }
    }
  }
}
