/* tslint:disable */

declare var Object: any;
export interface RencanaPasokanInterface {
  "noKontrak"?: string;
  "tahun"?: number;
  "bulan"?: number;
  "tanggalKirim"?: Date;
  "pltuId"?: string;
  "tipeid"?: string;
  "modeId"?: string;
  "tonnase"?: number;
  "userId"?: string;
  "status"?: number;
  "id"?: any;
}

export class RencanaPasokan implements RencanaPasokanInterface {
  "noKontrak": string = '';
  "tahun": number = 0;
  "bulan": number = 0;
  "tanggalKirim": Date = new Date(0);
  "pltuId": string = '';
  "tipeid": string = '';
  "modeId": string = '';
  "tonnase": number = 0;
  "userId": string = '';
  "status": number = 0;
  "id": any = <any>null;
  constructor(data?: RencanaPasokanInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RencanaPasokan`.
   */
  public static getModelName() {
    return "RencanaPasokan";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RencanaPasokan for dynamic purposes.
  **/
  public static factory(data: RencanaPasokanInterface): RencanaPasokan{
    return new RencanaPasokan(data);
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
      name: 'RencanaPasokan',
      plural: 'rencana_pasokan',
      path: 'rencana_pasokan',
      idName: 'id',
      properties: {
        "noKontrak": {
          name: 'noKontrak',
          type: 'string'
        },
        "tahun": {
          name: 'tahun',
          type: 'number'
        },
        "bulan": {
          name: 'bulan',
          type: 'number'
        },
        "tanggalKirim": {
          name: 'tanggalKirim',
          type: 'Date'
        },
        "pltuId": {
          name: 'pltuId',
          type: 'string'
        },
        "tipeid": {
          name: 'tipeid',
          type: 'string'
        },
        "modeId": {
          name: 'modeId',
          type: 'string'
        },
        "tonnase": {
          name: 'tonnase',
          type: 'number'
        },
        "userId": {
          name: 'userId',
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
