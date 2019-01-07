/* tslint:disable */
import {
  Shipping,
  Mitra,
  Jetty,
  MitraShippingInstructionRequest,
  ShippingInstructionRevision
} from '../index';

declare var Object: any;
export interface ShippingInstructionInterface {
  "no"?: number;
  "noRedaksi"?: string;
  "noTahun"?: number;
  "tglSurat"?: Date;
  "siRequestId"?: any;
  "transportId"?: any;
  "jettyId"?: any;
  "namaTransport"?: string;
  "laycanStartDate"?: Date;
  "laycanEndDate"?: Date;
  "status"?: number;
  "id"?: any;
  shipping?: Shipping[];
  transport?: Mitra;
  jetty?: Jetty;
  siRequest?: MitraShippingInstructionRequest;
  revisions?: ShippingInstructionRevision[];
}

export class ShippingInstruction implements ShippingInstructionInterface {
  "no": number = 0;
  "noRedaksi": string = '';
  "noTahun": number = 0;
  "tglSurat": Date = new Date(0);
  "siRequestId": any = <any>null;
  "transportId": any = <any>null;
  "jettyId": any = <any>null;
  "namaTransport": string = '';
  "laycanStartDate": Date = new Date(0);
  "laycanEndDate": Date = new Date(0);
  "status": number = 0;
  "id": any = <any>null;
  shipping: Shipping[] = null;
  transport: Mitra = null;
  jetty: Jetty = null;
  siRequest: MitraShippingInstructionRequest = null;
  revisions: ShippingInstructionRevision[] = null;
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
          type: 'number'
        },
        "noRedaksi": {
          name: 'noRedaksi',
          type: 'string'
        },
        "noTahun": {
          name: 'noTahun',
          type: 'number'
        },
        "tglSurat": {
          name: 'tglSurat',
          type: 'Date'
        },
        "siRequestId": {
          name: 'siRequestId',
          type: 'any'
        },
        "transportId": {
          name: 'transportId',
          type: 'any'
        },
        "jettyId": {
          name: 'jettyId',
          type: 'any'
        },
        "namaTransport": {
          name: 'namaTransport',
          type: 'string'
        },
        "laycanStartDate": {
          name: 'laycanStartDate',
          type: 'Date'
        },
        "laycanEndDate": {
          name: 'laycanEndDate',
          type: 'Date'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        shipping: {
          name: 'shipping',
          type: 'Shipping[]',
          model: 'Shipping',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'siId'
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
        siRequest: {
          name: 'siRequest',
          type: 'MitraShippingInstructionRequest',
          model: 'MitraShippingInstructionRequest',
          relationType: 'belongsTo',
                  keyFrom: 'siRequestId',
          keyTo: 'id'
        },
        revisions: {
          name: 'revisions',
          type: 'ShippingInstructionRevision[]',
          model: 'ShippingInstructionRevision',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'siId'
        },
      }
    }
  }
}
