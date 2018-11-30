/* tslint:disable */

declare var Object: any;
export interface UnloadingRealisasiKirimInterface {
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
  "timeArrival"?: Date;
  "berthing"?: Date;
  "commenceUnloading"?: Date;
  "completeUnloading"?: Date;
  "id"?: any;
}

export class UnloadingRealisasiKirim implements UnloadingRealisasiKirimInterface {
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
  "timeArrival": Date = new Date(0);
  "berthing": Date = new Date(0);
  "commenceUnloading": Date = new Date(0);
  "completeUnloading": Date = new Date(0);
  "id": any = <any>null;
  constructor(data?: UnloadingRealisasiKirimInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UnloadingRealisasiKirim`.
   */
  public static getModelName() {
    return "UnloadingRealisasiKirim";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UnloadingRealisasiKirim for dynamic purposes.
  **/
  public static factory(data: UnloadingRealisasiKirimInterface): UnloadingRealisasiKirim{
    return new UnloadingRealisasiKirim(data);
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
      name: 'UnloadingRealisasiKirim',
      plural: 'unloading_realisasi_kirim',
      path: 'unloading_realisasi_kirim',
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
        "timeArrival": {
          name: 'timeArrival',
          type: 'Date'
        },
        "berthing": {
          name: 'berthing',
          type: 'Date'
        },
        "commenceUnloading": {
          name: 'commenceUnloading',
          type: 'Date'
        },
        "completeUnloading": {
          name: 'completeUnloading',
          type: 'Date'
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
