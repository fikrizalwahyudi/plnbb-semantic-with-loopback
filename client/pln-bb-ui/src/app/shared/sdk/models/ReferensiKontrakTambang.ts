/* tslint:disable */
import {
  Tambang,
  ReferensiKontrak
} from '../index';

declare var Object: any;
export interface ReferensiKontrakTambangInterface {
  "referensiKontrakId"?: any;
  "tambangId"?: any;
  "id"?: any;
  tambang?: Tambang;
  referensiKontrak?: ReferensiKontrak;
}

export class ReferensiKontrakTambang implements ReferensiKontrakTambangInterface {
  "referensiKontrakId": any = <any>null;
  "tambangId": any = <any>null;
  "id": any = <any>null;
  tambang: Tambang = null;
  referensiKontrak: ReferensiKontrak = null;
  constructor(data?: ReferensiKontrakTambangInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReferensiKontrakTambang`.
   */
  public static getModelName() {
    return "ReferensiKontrakTambang";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReferensiKontrakTambang for dynamic purposes.
  **/
  public static factory(data: ReferensiKontrakTambangInterface): ReferensiKontrakTambang{
    return new ReferensiKontrakTambang(data);
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
      name: 'ReferensiKontrakTambang',
      plural: 'referensi_kontrak_tambang',
      path: 'referensi_kontrak_tambang',
      idName: 'id',
      properties: {
        "referensiKontrakId": {
          name: 'referensiKontrakId',
          type: 'any'
        },
        "tambangId": {
          name: 'tambangId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        tambang: {
          name: 'tambang',
          type: 'Tambang',
          model: 'Tambang',
          relationType: 'belongsTo',
                  keyFrom: 'tambangId',
          keyTo: 'id'
        },
        referensiKontrak: {
          name: 'referensiKontrak',
          type: 'ReferensiKontrak',
          model: 'ReferensiKontrak',
          relationType: 'belongsTo',
                  keyFrom: 'referensiKontrakId',
          keyTo: 'id'
        },
      }
    }
  }
}
