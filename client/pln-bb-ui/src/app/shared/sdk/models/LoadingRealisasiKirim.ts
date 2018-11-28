/* tslint:disable */

declare var Object: any;
export interface LoadingRealisasiKirimInterface {
  "id"?: number;
  "realisasi_kirim_id"?: number;
  "bl"?: string;
  "ash"?: string;
  "idt"?: string;
  "gcv"?: string;
  "ts"?: string;
  "720mm"?: string;
  "tm"?: string;
  "hgi"?: string;
  "238mm"?: string;
  "upload_bl"?: string;
  "upload_cm"?: string;
  "upload_skab"?: string;
}

export class LoadingRealisasiKirim implements LoadingRealisasiKirimInterface {
  "id": number = 0;
  "realisasi_kirim_id": number = 0;
  "bl": string = '';
  "ash": string = '';
  "idt": string = '';
  "gcv": string = '';
  "ts": string = '';
  "720mm": string = '';
  "tm": string = '';
  "hgi": string = '';
  "238mm": string = '';
  "upload_bl": string = '';
  "upload_cm": string = '';
  "upload_skab": string = '';
  constructor(data?: LoadingRealisasiKirimInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LoadingRealisasiKirim`.
   */
  public static getModelName() {
    return "LoadingRealisasiKirim";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LoadingRealisasiKirim for dynamic purposes.
  **/
  public static factory(data: LoadingRealisasiKirimInterface): LoadingRealisasiKirim{
    return new LoadingRealisasiKirim(data);
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
      name: 'LoadingRealisasiKirim',
      plural: 'loading_realisasi_kirim',
      path: 'loading_realisasi_kirim',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "realisasi_kirim_id": {
          name: 'realisasi_kirim_id',
          type: 'number'
        },
        "bl": {
          name: 'bl',
          type: 'string'
        },
        "ash": {
          name: 'ash',
          type: 'string'
        },
        "idt": {
          name: 'idt',
          type: 'string'
        },
        "gcv": {
          name: 'gcv',
          type: 'string'
        },
        "ts": {
          name: 'ts',
          type: 'string'
        },
        "720mm": {
          name: '720mm',
          type: 'string'
        },
        "tm": {
          name: 'tm',
          type: 'string'
        },
        "hgi": {
          name: 'hgi',
          type: 'string'
        },
        "238mm": {
          name: '238mm',
          type: 'string'
        },
        "upload_bl": {
          name: 'upload_bl',
          type: 'string'
        },
        "upload_cm": {
          name: 'upload_cm',
          type: 'string'
        },
        "upload_skab": {
          name: 'upload_skab',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
