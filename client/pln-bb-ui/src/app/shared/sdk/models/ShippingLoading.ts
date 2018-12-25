/* tslint:disable */
import {
  Shipping
} from '../index';

declare var Object: any;
export interface ShippingLoadingInterface {
  "gcv"?: number;
  "hgi"?: number;
  "idt"?: number;
  "ash"?: number;
  "tm"?: number;
  "ts"?: number;
  "size1"?: number;
  "size2"?: number;
  "coaCow"?: string;
  "shippingId"?: any;
  "id"?: any;
  shipping?: Shipping;
}

export class ShippingLoading implements ShippingLoadingInterface {
  "gcv": number = 0;
  "hgi": number = 0;
  "idt": number = 0;
  "ash": number = 0;
  "tm": number = 0;
  "ts": number = 0;
  "size1": number = 0;
  "size2": number = 0;
  "coaCow": string = '';
  "shippingId": any = <any>null;
  "id": any = <any>null;
  shipping: Shipping = null;
  constructor(data?: ShippingLoadingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ShippingLoading`.
   */
  public static getModelName() {
    return "ShippingLoading";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ShippingLoading for dynamic purposes.
  **/
  public static factory(data: ShippingLoadingInterface): ShippingLoading{
    return new ShippingLoading(data);
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
      name: 'ShippingLoading',
      plural: 'shipping_loading',
      path: 'shipping_loading',
      idName: 'id',
      properties: {
        "gcv": {
          name: 'gcv',
          type: 'number'
        },
        "hgi": {
          name: 'hgi',
          type: 'number'
        },
        "idt": {
          name: 'idt',
          type: 'number'
        },
        "ash": {
          name: 'ash',
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
