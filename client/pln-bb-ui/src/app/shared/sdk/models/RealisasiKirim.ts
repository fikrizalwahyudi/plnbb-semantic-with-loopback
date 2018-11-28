/* tslint:disable */

declare var Object: any;
export interface RealisasiKirimInterface {
  "id"?: number;
  "rencana_pasokan_id"?: number;
  "tanggal_dikirim"?: Date;
  "realisasi"?: number;
  "user_id"?: number;
  "status"?: number;
}

export class RealisasiKirim implements RealisasiKirimInterface {
  "id": number = 0;
  "rencana_pasokan_id": number = 0;
  "tanggal_dikirim": Date = new Date(0);
  "realisasi": number = 0;
  "user_id": number = 0;
  "status": number = 0;
  constructor(data?: RealisasiKirimInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RealisasiKirim`.
   */
  public static getModelName() {
    return "RealisasiKirim";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RealisasiKirim for dynamic purposes.
  **/
  public static factory(data: RealisasiKirimInterface): RealisasiKirim{
    return new RealisasiKirim(data);
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
      name: 'RealisasiKirim',
      plural: 'realisasi_kirim',
      path: 'realisasi_kirim',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "rencana_pasokan_id": {
          name: 'rencana_pasokan_id',
          type: 'number'
        },
        "tanggal_dikirim": {
          name: 'tanggal_dikirim',
          type: 'Date'
        },
        "realisasi": {
          name: 'realisasi',
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
