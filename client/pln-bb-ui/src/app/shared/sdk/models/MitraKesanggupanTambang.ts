/* tslint:disable */
import {
  Tambang,
  MitraKesanggupan
} from '../index';

declare var Object: any;
export interface MitraKesanggupanTambangInterface {
  "mitraKesanggupanId"?: any;
  "tambangId"?: any;
  "jumlah"?: number;
  "id"?: any;
  tambang?: Tambang;
  mitraKesanggupan?: MitraKesanggupan;
}

export class MitraKesanggupanTambang implements MitraKesanggupanTambangInterface {
  "mitraKesanggupanId": any = <any>null;
  "tambangId": any = <any>null;
  "jumlah": number = 0;
  "id": any = <any>null;
  tambang: Tambang = null;
  mitraKesanggupan: MitraKesanggupan = null;
  constructor(data?: MitraKesanggupanTambangInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MitraKesanggupanTambang`.
   */
  public static getModelName() {
    return "MitraKesanggupanTambang";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MitraKesanggupanTambang for dynamic purposes.
  **/
  public static factory(data: MitraKesanggupanTambangInterface): MitraKesanggupanTambang{
    return new MitraKesanggupanTambang(data);
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
      name: 'MitraKesanggupanTambang',
      plural: 'mitra_kesanggupan_tambang',
      path: 'mitra_kesanggupan_tambang',
      idName: 'id',
      properties: {
        "mitraKesanggupanId": {
          name: 'mitraKesanggupanId',
          type: 'any'
        },
        "tambangId": {
          name: 'tambangId',
          type: 'any'
        },
        "jumlah": {
          name: 'jumlah',
          type: 'number'
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
        mitraKesanggupan: {
          name: 'mitraKesanggupan',
          type: 'MitraKesanggupan',
          model: 'MitraKesanggupan',
          relationType: 'belongsTo',
                  keyFrom: 'mitraKesanggupanId',
          keyTo: 'id'
        },
      }
    }
  }
}
