/* tslint:disable */
import {
  PlnRencana,
  Mitra,
  Jetty
} from '../index';

declare var Object: any;
export interface ShippingInstructionInterface {
  "no"?: string;
  "tgl"?: Date;
  "plnRencanaId"?: any;
  "transportId"?: any;
  "namaTransport"?: string;
  "jettyId"?: any;
  "laycanStartDate"?: Date;
  "laycanEndDate"?: Date;
  "id"?: any;
  "mitraKesanggupanId"?: any;
  plnRencana?: PlnRencana;
  transport?: Mitra;
  jetty?: Jetty;
}

export class ShippingInstruction implements ShippingInstructionInterface {
  "no": string = '';
  "tgl": Date = new Date(0);
  "plnRencanaId": any = <any>null;
  "transportId": any = <any>null;
  "namaTransport": string = '';
  "jettyId": any = <any>null;
  "laycanStartDate": Date = new Date(0);
  "laycanEndDate": Date = new Date(0);
  "id": any = <any>null;
  "mitraKesanggupanId": any = <any>null;
  plnRencana: PlnRencana = null;
  transport: Mitra = null;
  jetty: Jetty = null;
  constructor(data?: ShippingInstructionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ShippingInstruction`.
   */
  public static getModelName() {
    return "ShippingInstruction";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ShippingInstruction for dynamic purposes.
  **/
  public static factory(data: ShippingInstructionInterface): ShippingInstruction{
    return new ShippingInstruction(data);
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
      name: 'ShippingInstruction',
      plural: 'shipping_instruction',
      path: 'shipping_instruction',
      idName: 'id',
      properties: {
        "no": {
          name: 'no',
          type: 'string'
        },
        "tgl": {
          name: 'tgl',
          type: 'Date'
        },
        "plnRencanaId": {
          name: 'plnRencanaId',
          type: 'any'
        },
        "transportId": {
          name: 'transportId',
          type: 'any'
        },
        "namaTransport": {
          name: 'namaTransport',
          type: 'string'
        },
        "jettyId": {
          name: 'jettyId',
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "mitraKesanggupanId": {
          name: 'mitraKesanggupanId',
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
        transport: {
          name: 'transport',
          type: 'Mitra',
          model: 'Mitra',
          relationType: 'belongsTo',
                  keyFrom: 'transportId',
          keyTo: 'id'
        },
        jetty: {
          name: 'jetty',
          type: 'Jetty',
          model: 'Jetty',
          relationType: 'belongsTo',
                  keyFrom: 'jettyId',
          keyTo: 'id'
        },
      }
    }
  }
}
