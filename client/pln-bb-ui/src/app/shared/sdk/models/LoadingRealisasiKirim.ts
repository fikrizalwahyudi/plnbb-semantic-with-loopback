/* tslint:disable */

declare var Object: any;
export interface LoadingRealisasiKirimInterface {
  "realisasiKirimId"?: string;
  "bl"?: string;
  "ash"?: string;
  "idt"?: string;
  "gcv"?: string;
  "ts"?: string;
  "720mm"?: string;
  "tm"?: string;
  "hgi"?: string;
  "238mm"?: string;
  "uploadBl"?: string;
  "uploadCm"?: string;
  "uploadSkab"?: string;
  "id"?: any;
}

export class LoadingRealisasiKirim implements LoadingRealisasiKirimInterface {
  "realisasiKirimId": string = '';
  "bl": string = '';
  "ash": string = '';
  "idt": string = '';
  "gcv": string = '';
  "ts": string = '';
  "720mm": string = '';
  "tm": string = '';
  "hgi": string = '';
  "238mm": string = '';
  "uploadBl": string = '';
  "uploadCm": string = '';
  "uploadSkab": string = '';
  "id": any = <any>null;
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
        "realisasiKirimId": {
          name: 'realisasiKirimId',
          type: 'string'
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
        "uploadBl": {
          name: 'uploadBl',
          type: 'string'
        },
        "uploadCm": {
          name: 'uploadCm',
          type: 'string'
        },
        "uploadSkab": {
          name: 'uploadSkab',
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
