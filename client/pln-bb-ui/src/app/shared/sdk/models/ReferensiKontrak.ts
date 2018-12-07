/* tslint:disable */
import {
  Mitra,
  ReferensiKontrakPltu,
  ReferensiKontrakTambang
} from '../index';

declare var Object: any;
export interface ReferensiKontrakInterface {
  "nomorKontrak"?: string;
  "namaPekerjaan"?: string;
  "tanggalPekerjaan"?: Date;
  "jenis"?: string;
  "status"?: number;
  "mitraId"?: any;
  "tipe"?: string;
  "harga"?: number;
  "id"?: any;
  mitra?: Mitra;
  pltuPrincipals?: ReferensiKontrakPltu[];
  tambangPrincipals?: ReferensiKontrakTambang[];
}

export class ReferensiKontrak implements ReferensiKontrakInterface {
  "nomorKontrak": string = '';
  "namaPekerjaan": string = '';
  "tanggalPekerjaan": Date = new Date(0);
  "jenis": string = '';
  "status": number = 0;
  "mitraId": any = <any>null;
  "tipe": string = '';
  "harga": number = 0;
  "id": any = <any>null;
  mitra: Mitra = null;
  pltuPrincipals: ReferensiKontrakPltu[] = null;
  tambangPrincipals: ReferensiKontrakTambang[] = null;
  constructor(data?: ReferensiKontrakInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReferensiKontrak`.
   */
  public static getModelName() {
    return "ReferensiKontrak";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReferensiKontrak for dynamic purposes.
  **/
  public static factory(data: ReferensiKontrakInterface): ReferensiKontrak{
    return new ReferensiKontrak(data);
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
      name: 'ReferensiKontrak',
      plural: 'referensi_kontrak',
      path: 'referensi_kontrak',
      idName: 'id',
      properties: {
        "nomorKontrak": {
          name: 'nomorKontrak',
          type: 'string'
        },
        "namaPekerjaan": {
          name: 'namaPekerjaan',
          type: 'string'
        },
        "tanggalPekerjaan": {
          name: 'tanggalPekerjaan',
          type: 'Date'
        },
        "jenis": {
          name: 'jenis',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "mitraId": {
          name: 'mitraId',
          type: 'any'
        },
        "tipe": {
          name: 'tipe',
          type: 'string'
        },
        "harga": {
          name: 'harga',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        mitra: {
          name: 'mitra',
          type: 'Mitra',
          model: 'Mitra',
          relationType: 'belongsTo',
                  keyFrom: 'mitraId',
          keyTo: 'id'
        },
        pltuPrincipals: {
          name: 'pltuPrincipals',
          type: 'ReferensiKontrakPltu[]',
          model: 'ReferensiKontrakPltu',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'referensiKontrakId'
        },
        tambangPrincipals: {
          name: 'tambangPrincipals',
          type: 'ReferensiKontrakTambang[]',
          model: 'ReferensiKontrakTambang',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'referensiKontrakId'
        },
      }
    }
  }
}
