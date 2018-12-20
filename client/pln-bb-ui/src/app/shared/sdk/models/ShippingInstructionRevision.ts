/* tslint:disable */
import {
  ShippingInstruction
} from '../index';

declare var Object: any;
export interface ShippingInstructionRevisionInterface {
  "keterangan"?: string;
  "noRevisi"?: number;
  "tglRevisi"?: Date;
  "siId"?: any;
  "id"?: any;
  si?: ShippingInstruction;
}

export class ShippingInstructionRevision implements ShippingInstructionRevisionInterface {
  "keterangan": string = '';
  "noRevisi": number = 0;
  "tglRevisi": Date = new Date(0);
  "siId": any = <any>null;
  "id": any = <any>null;
  si: ShippingInstruction = null;
  constructor(data?: ShippingInstructionRevisionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ShippingInstructionRevision`.
   */
  public static getModelName() {
    return "ShippingInstructionRevision";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ShippingInstructionRevision for dynamic purposes.
  **/
  public static factory(data: ShippingInstructionRevisionInterface): ShippingInstructionRevision{
    return new ShippingInstructionRevision(data);
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
      name: 'ShippingInstructionRevision',
      plural: 'shipping_instruction',
      path: 'shipping_instruction',
      idName: 'id',
      properties: {
        "keterangan": {
          name: 'keterangan',
          type: 'string'
        },
        "noRevisi": {
          name: 'noRevisi',
          type: 'number'
        },
        "tglRevisi": {
          name: 'tglRevisi',
          type: 'Date'
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
