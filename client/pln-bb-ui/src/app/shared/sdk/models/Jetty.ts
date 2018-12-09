/* tslint:disable */

declare var Object: any;
export interface JettyInterface {
  "namaPelabuhan"?: string;
  "kode"?: string;
  "provinsi"?: string;
  "kota"?: string;
  "koordinat"?: string;
  "id"?: any;
}

export class Jetty implements JettyInterface {
  "namaPelabuhan": string = '';
  "kode": string = '';
  "provinsi": string = '';
  "kota": string = '';
  "koordinat": string = '';
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
        "namaPelabuhan": {
          name: 'namaPelabuhan',
          type: 'string'
        },
        "kode": {
          name: 'kode',
          type: 'string'
        },
        "provinsi": {
          name: 'provinsi',
          type: 'string'
        },
        "kota": {
          name: 'kota',
          type: 'string'
        },
        "koordinat": {
          name: 'koordinat',
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
