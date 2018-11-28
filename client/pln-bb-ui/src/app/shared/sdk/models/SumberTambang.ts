/* tslint:disable */

declare var Object: any;
export interface SumberTambangInterface {
  "id"?: any;
  "realisasi_kirim_id"?: string;
  "tambang_id"?: string;
  "ammount"?: number;
}

export class SumberTambang implements SumberTambangInterface {
  "id": any = <any>null;
  "realisasi_kirim_id": string = '';
  "tambang_id": string = '';
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
          type: 'any'
        },
        "realisasi_kirim_id": {
          name: 'realisasi_kirim_id',
          type: 'string'
        },
        "tambang_id": {
          name: 'tambang_id',
          type: 'string'
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
