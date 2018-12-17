/* tslint:disable */
import {
  MitraKesanggupan
} from '../index';

declare var Object: any;
export interface MitraShippingInstructionRequestInterface {
  "tglRequest"?: Date;
  "shippingOrderId"?: any;
  "laycanStartDate"?: Date;
  "laycanEndDate"?: Date;
  "namaTransport"?: string;
  "id"?: any;
  "mitraKesanggupanId"?: any;
  "rencanaPasokanId"?: any;
  shippingOrder?: MitraKesanggupan;
}

export class MitraShippingInstructionRequest implements MitraShippingInstructionRequestInterface {
  "tglRequest": Date = new Date(0);
  "shippingOrderId": any = <any>null;
  "laycanStartDate": Date = new Date(0);
  "laycanEndDate": Date = new Date(0);
  "namaTransport": string = '';
  "id": any = <any>null;
  "mitraKesanggupanId": any = <any>null;
  "rencanaPasokanId": any = <any>null;
  shippingOrder: MitraKesanggupan = null;
  constructor(data?: MitraShippingInstructionRequestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MitraShippingInstructionRequest`.
   */
  public static getModelName() {
    return "MitraShippingInstructionRequest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MitraShippingInstructionRequest for dynamic purposes.
  **/
  public static factory(data: MitraShippingInstructionRequestInterface): MitraShippingInstructionRequest{
    return new MitraShippingInstructionRequest(data);
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
      name: 'MitraShippingInstructionRequest',
      plural: 'mitra_shipping_instruction_request',
      path: 'mitra_shipping_instruction_request',
      idName: 'id',
      properties: {
        "tglRequest": {
          name: 'tglRequest',
          type: 'Date'
        },
        "shippingOrderId": {
          name: 'shippingOrderId',
          type: 'any'
        },
        "laycanStartDate": {
          name: 'laycanStartDate',
          type: 'Date'
        },
        "laycanEndDate": {
          name: 'laycanEndDate',
          type: 'Date'
        },
        "namaTransport": {
          name: 'namaTransport',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "mitraKesanggupanId": {
          name: 'mitraKesanggupanId',
          type: 'any'
        },
        "rencanaPasokanId": {
          name: 'rencanaPasokanId',
          type: 'any'
        },
      },
      relations: {
        shippingOrder: {
          name: 'shippingOrder',
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
