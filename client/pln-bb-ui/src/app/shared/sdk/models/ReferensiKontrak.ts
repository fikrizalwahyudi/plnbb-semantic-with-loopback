/* tslint:disable */
import {
  Mitra,
  ReferensiKontrakPltu,
  ReferensiKontrakTambang,
  ReferensiKontrakJetty
} from '../index';

declare var Object: any;
export interface ReferensiKontrakInterface {
  "nomorKontrak"?: string;
  "namaPekerjaan"?: string;
  "tanggalPekerjaan"?: Date;
  "status"?: number;
  "mitraId"?: any;
  "jenisKontrak"?: string;
  "id"?: any;
  mitra?: Mitra;
  pltuPrincipals?: ReferensiKontrakPltu[];
  tambangPrincipals?: ReferensiKontrakTambang[];
  jettyPrincipals?: ReferensiKontrakJetty[];
}

export class ReferensiKontrak implements ReferensiKontrakInterface {
  "nomorKontrak": string = '';
  "namaPekerjaan": string = '';
  "tanggalPekerjaan": Date = new Date(0);
  "status": number = 0;
  "mitraId": any = <any>null;
  "jenisKontrak": string = '';
  "id": any = <any>null;
  mitra: Mitra = null;
  pltuPrincipals: ReferensiKontrakPltu[] = null;
  tambangPrincipals: ReferensiKontrakTambang[] = null;
  jettyPrincipals: ReferensiKontrakJetty[] = null;
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
        "status": {
          name: 'status',
          type: 'number'
        },
        "mitraId": {
          name: 'mitraId',
          type: 'any'
        },
        "jenisKontrak": {
          name: 'jenisKontrak',
          type: 'string'
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
        jettyPrincipals: {
          name: 'jettyPrincipals',
          type: 'ReferensiKontrakJetty[]',
          model: 'ReferensiKontrakJetty',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'referensiKontrakId'
        },
      }
    }
  }
}
