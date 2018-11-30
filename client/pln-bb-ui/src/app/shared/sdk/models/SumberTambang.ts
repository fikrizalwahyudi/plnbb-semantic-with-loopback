/* tslint:disable */

declare var Object: any;
export interface SumberTambangInterface {
  "realisasiKirimId"?: string;
  "tambangId"?: string;
  "ammount"?: number;
  "id"?: any;
}

export class SumberTambang implements SumberTambangInterface {
  "realisasiKirimId": string = '';
  "tambangId": string = '';
  "ammount": number = 0;
  "id": any = <any>null;
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
        "realisasiKirimId": {
          name: 'realisasiKirimId',
          type: 'string'
        },
        "tambangId": {
          name: 'tambangId',
          type: 'string'
        },
        "ammount": {
          name: 'ammount',
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
