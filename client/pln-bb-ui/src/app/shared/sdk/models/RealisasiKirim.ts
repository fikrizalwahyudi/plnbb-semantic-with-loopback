/* tslint:disable */

declare var Object: any;
export interface RealisasiKirimInterface {
  "rencanaPasokanId"?: string;
  "tanggalDikirim"?: Date;
  "realisasi"?: number;
  "userId"?: string;
  "status"?: number;
  "id"?: any;
}

export class RealisasiKirim implements RealisasiKirimInterface {
  "rencanaPasokanId": string = '';
  "tanggalDikirim": Date = new Date(0);
  "realisasi": number = 0;
  "userId": string = '';
  "status": number = 0;
  "id": any = <any>null;
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
        "rencanaPasokanId": {
          name: 'rencanaPasokanId',
          type: 'string'
        },
        "tanggalDikirim": {
          name: 'tanggalDikirim',
          type: 'Date'
        },
        "realisasi": {
          name: 'realisasi',
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
