/* tslint:disable */

declare var Object: any;
export interface JettyInterface {
  "name"?: string;
  "code"?: string;
  "address"?: string;
  "province"?: string;
  "city"?: string;
  "latitude"?: string;
  "longitude"?: string;
  "id"?: any;
}

export class Jetty implements JettyInterface {
  "name": string = '';
  "code": string = '';
  "address": string = '';
  "province": string = '';
  "city": string = '';
  "latitude": string = '';
  "longitude": string = '';
  "id": any = <any>null;
  constructor(data?: JettyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Jetty`.
   */
  public static getModelName() {
    return "Jetty";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Jetty for dynamic purposes.
  **/
  public static factory(data: JettyInterface): Jetty{
    return new Jetty(data);
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
      name: 'Jetty',
      plural: 'jetty',
      path: 'jetty',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
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
