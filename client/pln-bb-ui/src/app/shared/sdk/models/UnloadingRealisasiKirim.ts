/* tslint:disable */

declare var Object: any;
export interface UnloadingRealisasiKirimInterface {
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
  "time_arrival"?: Date;
  "berthing"?: Date;
  "commence_unloading"?: Date;
  "complete_unloading"?: Date;
}

export class UnloadingRealisasiKirim implements UnloadingRealisasiKirimInterface {
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
  "time_arrival": Date = new Date(0);
  "berthing": Date = new Date(0);
  "commence_unloading": Date = new Date(0);
  "complete_unloading": Date = new Date(0);
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
        "time_arrival": {
          name: 'time_arrival',
          type: 'Date'
        },
        "berthing": {
          name: 'berthing',
          type: 'Date'
        },
        "commence_unloading": {
          name: 'commence_unloading',
          type: 'Date'
        },
        "complete_unloading": {
          name: 'complete_unloading',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
