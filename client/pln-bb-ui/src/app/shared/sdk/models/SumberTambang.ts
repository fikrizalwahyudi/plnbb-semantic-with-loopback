/* tslint:disable */

declare var Object: any;
export interface SumberTambangInterface {
  "id"?: number;
  "realisasi_kirim_id"?: number;
  "tambang_id"?: number;
  "ammount"?: number;
}

export class SumberTambang implements SumberTambangInterface {
  "id": number = 0;
  "realisasi_kirim_id": number = 0;
  "tambang_id": number = 0;
  "ammount": number = 0;
  constructor(data?: SumberTambangInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SumberTambang`.
   */
  public static getModelName() {
    return "SumberTambang";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SumberTambang for dynamic purposes.
  **/
  public static factory(data: SumberTambangInterface): SumberTambang{
    return new SumberTambang(data);
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
      name: 'SumberTambang',
      plural: 'sumber_tambang',
      path: 'sumber_tambang',
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
        "tambang_id": {
          name: 'tambang_id',
          type: 'number'
        },
        "ammount": {
          name: 'ammount',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
