/* tslint:disable */

declare var Object: any;
export interface PltuInterface {
  "id"?: number;
  "code"?: string;
  "name"?: string;
  "address"?: string;
  "npwp"?: string;
  "status"?: number;
}

export class Pltu implements PltuInterface {
  "id": number = 0;
  "code": string = '';
  "name": string = '';
  "address": string = '';
  "npwp": string = '';
  "status": number = 0;
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
        "id": {
          name: 'id',
          type: 'number'
        },
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
      },
      relations: {
      }
    }
  }
}
