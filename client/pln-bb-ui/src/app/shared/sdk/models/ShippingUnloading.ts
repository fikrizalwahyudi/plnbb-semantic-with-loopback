/* tslint:disable */
import {
  Shipping
} from '../index';

declare var Object: any;
export interface ShippingUnloadingInterface {
  "gcv"?: number;
  "ash"?: number;
  "hgi"?: number;
  "tm"?: number;
  "ts"?: number;
  "idt"?: number;
  "size1"?: number;
  "size2"?: number;
  "coaCow"?: string;
  "ta"?: Date;
  "berthing"?: Date;
  "commenceUnloading"?: Date;
  "completeUnloading"?: Date;
  "timesheets"?: string;
  "status"?: number;
  "shippingId"?: any;
  "id"?: any;
  shipping?: Shipping;
}

export class ShippingUnloading implements ShippingUnloadingInterface {
  "gcv": number = 0;
  "ash": number = 0;
  "hgi": number = 0;
  "tm": number = 0;
  "ts": number = 0;
  "idt": number = 0;
  "size1": number = 0;
  "size2": number = 0;
  "coaCow": string = '';
  "ta": Date = new Date(0);
  "berthing": Date = new Date(0);
  "commenceUnloading": Date = new Date(0);
  "completeUnloading": Date = new Date(0);
  "timesheets": string = '';
  "status": number = 0;
  "shippingId": any = <any>null;
  "id": any = <any>null;
  shipping: Shipping = null;
  constructor(data?: ShippingUnloadingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ShippingUnloading`.
   */
  public static getModelName() {
    return "ShippingUnloading";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ShippingUnloading for dynamic purposes.
  **/
  public static factory(data: ShippingUnloadingInterface): ShippingUnloading{
    return new ShippingUnloading(data);
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
      name: 'ShippingUnloading',
      plural: 'shipping_unloading',
      path: 'shipping_unloading',
      idName: 'id',
      properties: {
        "gcv": {
          name: 'gcv',
          type: 'number'
        },
        "ash": {
          name: 'ash',
          type: 'number'
        },
        "hgi": {
          name: 'hgi',
          type: 'number'
        },
        "tm": {
          name: 'tm',
          type: 'number'
        },
        "ts": {
          name: 'ts',
          type: 'number'
        },
        "idt": {
          name: 'idt',
          type: 'number'
        },
        "size1": {
          name: 'size1',
          type: 'number'
        },
        "size2": {
          name: 'size2',
          type: 'number'
        },
        "coaCow": {
          name: 'coaCow',
          type: 'string'
        },
        "ta": {
          name: 'ta',
          type: 'Date'
        },
        "berthing": {
          name: 'berthing',
          type: 'Date'
        },
        "commenceUnloading": {
          name: 'commenceUnloading',
          type: 'Date'
        },
        "completeUnloading": {
          name: 'completeUnloading',
          type: 'Date'
        },
        "timesheets": {
          name: 'timesheets',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "shippingId": {
          name: 'shippingId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        shipping: {
          name: 'shipping',
          type: 'Shipping',
          model: 'Shipping',
          relationType: 'belongsTo',
                  keyFrom: 'shippingId',
          keyTo: 'id'
        },
      }
    }
  }
}
