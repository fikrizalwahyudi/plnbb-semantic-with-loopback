/* tslint:disable */

declare var Object: any;
export interface RequestShippingInterface {
  "id"?: any;
  "realisasi_kirim_id"?: string;
  "mitra_id"?: string;
  "no_si"?: string;
  "laycan"?: string;
  "jetty"?: string;
  "nama_kapal"?: string;
  "status"?: number;
}

export class RequestShipping implements RequestShippingInterface {
  "id": any = <any>null;
  "realisasi_kirim_id": string = '';
  "mitra_id": string = '';
  "no_si": string = '';
  "laycan": string = '';
  "jetty": string = '';
  "nama_kapal": string = '';
  "status": number = 0;
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "realisasi_kirim_id": {
          name: 'realisasi_kirim_id',
          type: 'string'
        },
        "mitra_id": {
          name: 'mitra_id',
          type: 'string'
        },
        "no_si": {
          name: 'no_si',
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
        "nama_kapal": {
          name: 'nama_kapal',
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
