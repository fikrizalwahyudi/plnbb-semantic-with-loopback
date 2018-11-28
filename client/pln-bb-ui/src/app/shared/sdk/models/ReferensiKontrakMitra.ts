/* tslint:disable */

declare var Object: any;
export interface ReferensiKontrakMitraInterface {
  "id"?: any;
  "referensi_kontrak_id"?: string;
  "mitra_id"?: string;
}

export class ReferensiKontrakMitra implements ReferensiKontrakMitraInterface {
  "id": any = <any>null;
  "referensi_kontrak_id": string = '';
  "mitra_id": string = '';
  constructor(data?: ReferensiKontrakMitraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReferensiKontrakMitra`.
   */
  public static getModelName() {
    return "ReferensiKontrakMitra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReferensiKontrakMitra for dynamic purposes.
  **/
  public static factory(data: ReferensiKontrakMitraInterface): ReferensiKontrakMitra{
    return new ReferensiKontrakMitra(data);
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
      name: 'ReferensiKontrakMitra',
      plural: 'referensi_kontrak_mitra',
      path: 'referensi_kontrak_mitra',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "referensi_kontrak_id": {
          name: 'referensi_kontrak_id',
          type: 'string'
        },
        "mitra_id": {
          name: 'mitra_id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
