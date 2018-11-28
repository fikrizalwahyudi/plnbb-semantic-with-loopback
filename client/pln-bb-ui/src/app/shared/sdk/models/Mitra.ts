/* tslint:disable */

declare var Object: any;
export interface MitraInterface {
  "id"?: number;
  "code"?: string;
  "name"?: string;
  "address"?: string;
  "npwp"?: string;
  "status"?: number;
}

export class Mitra implements MitraInterface {
  "id": number = 0;
  "code": string = '';
  "name": string = '';
  "address": string = '';
  "npwp": string = '';
  "status": number = 0;
  constructor(data?: MitraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Mitra`.
   */
  public static getModelName() {
    return "Mitra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Mitra for dynamic purposes.
  **/
  public static factory(data: MitraInterface): Mitra{
    return new Mitra(data);
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
      name: 'Mitra',
      plural: 'mitra',
      path: 'mitra',
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
