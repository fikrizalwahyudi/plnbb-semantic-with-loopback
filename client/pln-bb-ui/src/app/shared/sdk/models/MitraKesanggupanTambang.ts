/* tslint:disable */
import {
  MitraKesanggupan,
  Tambang
} from '../index';

declare var Object: any;
export interface MitraKesanggupanTambangInterface {
  "mitraKesanggupanId"?: any;
  "tambangId"?: any;
  "id"?: any;
  mitraKesanggupan?: MitraKesanggupan;
  tambang?: Tambang;
}

export class MitraKesanggupanTambang implements MitraKesanggupanTambangInterface {
  "mitraKesanggupanId": any = <any>null;
  "tambangId": any = <any>null;
  "id": any = <any>null;
  mitraKesanggupan: MitraKesanggupan = null;
  tambang: Tambang = null;
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
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        mitraKesanggupan: {
          name: 'mitraKesanggupan',
          type: 'MitraKesanggupan',
          model: 'MitraKesanggupan',
          relationType: 'belongsTo',
                  keyFrom: 'mitraKesanggupanId',
          keyTo: 'id'
        },
        tambang: {
          name: 'tambang',
          type: 'Tambang',
          model: 'Tambang',
          relationType: 'belongsTo',
                  keyFrom: 'tambangId',
          keyTo: 'id'
        },
      }
    }
  }
}
