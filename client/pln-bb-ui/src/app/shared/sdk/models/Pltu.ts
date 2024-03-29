/* tslint:disable */

declare var Object: any;
export interface PltuInterface {
  "code"?: string;
  "name"?: string;
  "address"?: string;
  "npwp"?: string;
  "status"?: number;
  "province"?: string;
  "city"?: string;
  "latitude"?: string;
  "longitude"?: string;
  "id"?: any;
}

export class Pltu implements PltuInterface {
  "code": string = '';
  "name": string = '';
  "address": string = '';
  "npwp": string = '';
  "status": number = 0;
  "province": string = '';
  "city": string = '';
  "latitude": string = '';
  "longitude": string = '';
  "id": any = <any>null;
  constructor(data?: PltuInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pltu`.
   */
  public static getModelName() {
    return "Pltu";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pltu for dynamic purposes.
  **/
  public static factory(data: PltuInterface): Pltu{
    return new Pltu(data);
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
      name: 'Pltu',
      plural: 'pltu',
      path: 'pltu',
      idName: 'id',
      properties: {
        "code": {
          name: 'code',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "npwp": {
          name: 'npwp',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "province": {
          name: 'province',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "latitude": {
          name: 'latitude',
          type: 'string'
        },
        "longitude": {
          name: 'longitude',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
