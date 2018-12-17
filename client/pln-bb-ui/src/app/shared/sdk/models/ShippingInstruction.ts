/* tslint:disable */
import {
  MitraKesanggupan,
  Mitra,
  Jetty
} from '../index';

declare var Object: any;
export interface ShippingInstructionInterface {
  "id"?: any;
  "no"?: string;
  "kode"?: string;
  "tahun"?: string;
  "tgl"?: Date;
  "plnRencanasId"?: any;
  "transportId"?: any;
  "namaTransport"?: string;
  "jettysId"?: any;
  "laycanStartDate"?: Date;
  "laycanEndDate"?: Date;
  "mitraKesanggupanId"?: any;
  mitraKesanggupan?: MitraKesanggupan;
  transport?: Mitra;
  jettyRel?: Jetty;
}

export class ShippingInstruction implements ShippingInstructionInterface {
  "id": any = <any>null;
  "no": string = '';
  "kode": string = '';
  "tahun": string = '';
  "tgl": Date = new Date(0);
  "plnRencanasId": any = <any>null;
  "transportId": any = <any>null;
  "namaTransport": string = '';
  "jettysId": any = <any>null;
  "laycanStartDate": Date = new Date(0);
  "laycanEndDate": Date = new Date(0);
  "mitraKesanggupanId": any = <any>null;
  mitraKesanggupan: MitraKesanggupan = null;
  transport: Mitra = null;
  jettyRel: Jetty = null;
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "no": {
          name: 'no',
          type: 'string'
        },
        "kode": {
          name: 'kode',
          type: 'string'
        },
        "tahun": {
          name: 'tahun',
          type: 'string'
        },
        "tgl": {
          name: 'tgl',
          type: 'Date'
        },
        "plnRencanasId": {
          name: 'plnRencanasId',
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
        "jettysId": {
          name: 'jettysId',
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
        "mitraKesanggupanId": {
          name: 'mitraKesanggupanId',
          type: 'any'
        },
      },
      relations: {
        mitraKesanggupan: {
          name: 'mitraKesanggupan',
          type: 'MitraKesanggupan',
          model: 'MitraKesanggupan',
          relationType: 'belongsTo',
                  keyFrom: 'plnRencanasId',
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
        jettyRel: {
          name: 'jettyRel',
          type: 'Jetty',
          model: 'Jetty',
          relationType: 'belongsTo',
                  keyFrom: 'jettysId',
          keyTo: 'id'
        },
      }
    }
  }
}
