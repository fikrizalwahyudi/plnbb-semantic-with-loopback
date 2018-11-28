/* tslint:disable */

declare var Object: any;
export interface RencanaPasokanInterface {
  "id"?: number;
  "no_kontrak"?: string;
  "tahun"?: number;
  "bulan"?: number;
  "tanggal_kirim"?: Date;
  "pltu_id"?: number;
  "tipe_id"?: number;
  "mode_id"?: number;
  "tonnase"?: number;
  "user_id"?: number;
  "status"?: number;
}

export class RencanaPasokan implements RencanaPasokanInterface {
  "id": number = 0;
  "no_kontrak": string = '';
  "tahun": number = 0;
  "bulan": number = 0;
  "tanggal_kirim": Date = new Date(0);
  "pltu_id": number = 0;
  "tipe_id": number = 0;
  "mode_id": number = 0;
  "tonnase": number = 0;
  "user_id": number = 0;
  "status": number = 0;
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "no_kontrak": {
          name: 'no_kontrak',
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
        "tanggal_kirim": {
          name: 'tanggal_kirim',
          type: 'Date'
        },
        "pltu_id": {
          name: 'pltu_id',
          type: 'number'
        },
        "tipe_id": {
          name: 'tipe_id',
          type: 'number'
        },
        "mode_id": {
          name: 'mode_id',
          type: 'number'
        },
        "tonnase": {
          name: 'tonnase',
          type: 'number'
        },
        "user_id": {
          name: 'user_id',
          type: 'number'
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
