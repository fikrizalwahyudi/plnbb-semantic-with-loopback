/* tslint:disable */

declare var Object: any;
export interface RequestShippingInterface {
  "realisasiKirimId"?: string;
  "mitraId"?: string;
  "noSi"?: string;
  "laycan"?: string;
  "jetty"?: string;
  "namaKapal"?: string;
  "status"?: number;
  "id"?: any;
}

export class RequestShipping implements RequestShippingInterface {
  "realisasiKirimId": string = '';
  "mitraId": string = '';
  "noSi": string = '';
  "laycan": string = '';
  "jetty": string = '';
  "namaKapal": string = '';
  "status": number = 0;
  "id": any = <any>null;
  constructor(data?: RequestShippingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RequestShipping`.
   */
  public static getModelName() {
    return "RequestShipping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RequestShipping for dynamic purposes.
  **/
  public static factory(data: RequestShippingInterface): RequestShipping{
    return new RequestShipping(data);
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
      name: 'RequestShipping',
      plural: 'request_shipping',
      path: 'request_shipping',
      idName: 'id',
      properties: {
        "realisasiKirimId": {
          name: 'realisasiKirimId',
          type: 'string'
        },
        "mitraId": {
          name: 'mitraId',
          type: 'string'
        },
        "noSi": {
          name: 'noSi',
          type: 'string'
        },
        "laycan": {
          name: 'laycan',
          type: 'string'
        },
        "jetty": {
          name: 'jetty',
          type: 'string'
        },
        "namaKapal": {
          name: 'namaKapal',
          type: 'string'
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
      }
    }
  }
}
