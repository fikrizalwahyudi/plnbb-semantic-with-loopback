/* tslint:disable */
import {
  ReferensiKontrak,
  Pltu,
  MitraKesanggupanTambang,
  Mitra,
  Jetty
} from '../index';

declare var Object: any;
export interface MitraKesanggupanInterface {
  "referensiKontrakId"?: any;
  "tujuanPltuId"?: any;
  "tglPengiriman"?: Date;
  "jumlah"?: number;
  "harga"?: number;
  "mode"?: string;
  "keterangan"?: string;
  "jenisKontrak"?: string;
  "jenisBatubara"?: string;
  "jettyId"?: any;
  "lock"?: boolean;
  "userId"?: any;
  "mitraId"?: any;
  "id"?: any;
  referensiKontrak?: ReferensiKontrak;
  tujuanPltu?: Pltu;
  sumberTambang?: MitraKesanggupanTambang[];
  mitra?: Mitra;
  jetty?: Jetty;
}

export class MitraKesanggupan implements MitraKesanggupanInterface {
  "referensiKontrakId": any = <any>null;
  "tujuanPltuId": any = <any>null;
  "tglPengiriman": Date = new Date(0);
  "jumlah": number = 0;
  "harga": number = 0;
  "mode": string = '';
  "keterangan": string = '';
  "jenisKontrak": string = '';
  "jenisBatubara": string = '';
  "jettyId": any = <any>null;
  "lock": boolean = false;
  "userId": any = <any>null;
  "mitraId": any = <any>null;
  "id": any = <any>null;
  referensiKontrak: ReferensiKontrak = null;
  tujuanPltu: Pltu = null;
  sumberTambang: MitraKesanggupanTambang[] = null;
  mitra: Mitra = null;
  jetty: Jetty = null;
  constructor(data?: MitraKesanggupanInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MitraKesanggupan`.
   */
  public static getModelName() {
    return "MitraKesanggupan";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MitraKesanggupan for dynamic purposes.
  **/
  public static factory(data: MitraKesanggupanInterface): MitraKesanggupan{
    return new MitraKesanggupan(data);
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
      name: 'MitraKesanggupan',
      plural: 'mitra_kesanggupan',
      path: 'mitra_kesanggupan',
      idName: 'id',
      properties: {
        "referensiKontrakId": {
          name: 'referensiKontrakId',
          type: 'any'
        },
        "tujuanPltuId": {
          name: 'tujuanPltuId',
          type: 'any'
        },
        "tglPengiriman": {
          name: 'tglPengiriman',
          type: 'Date'
        },
        "jumlah": {
          name: 'jumlah',
          type: 'number'
        },
        "harga": {
          name: 'harga',
          type: 'number'
        },
        "mode": {
          name: 'mode',
          type: 'string'
        },
        "keterangan": {
          name: 'keterangan',
          type: 'string'
        },
        "jenisKontrak": {
          name: 'jenisKontrak',
          type: 'string'
        },
        "jenisBatubara": {
          name: 'jenisBatubara',
          type: 'string'
        },
        "jettyId": {
          name: 'jettyId',
          type: 'any'
        },
        "lock": {
          name: 'lock',
          type: 'boolean'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
        "mitraId": {
          name: 'mitraId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        referensiKontrak: {
          name: 'referensiKontrak',
          type: 'ReferensiKontrak',
          model: 'ReferensiKontrak',
          relationType: 'belongsTo',
                  keyFrom: 'referensiKontrakId',
          keyTo: 'id'
        },
        tujuanPltu: {
          name: 'tujuanPltu',
          type: 'Pltu',
          model: 'Pltu',
          relationType: 'belongsTo',
                  keyFrom: 'tujuanPltuId',
          keyTo: 'id'
        },
        sumberTambang: {
          name: 'sumberTambang',
          type: 'MitraKesanggupanTambang[]',
          model: 'MitraKesanggupanTambang',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'mitraKesanggupanId'
        },
        mitra: {
          name: 'mitra',
          type: 'Mitra',
          model: 'Mitra',
          relationType: 'belongsTo',
                  keyFrom: 'mitraId',
          keyTo: 'id'
        },
        jetty: {
          name: 'jetty',
          type: 'Jetty',
          model: 'Jetty',
          relationType: 'belongsTo',
                  keyFrom: 'jettyId',
          keyTo: 'id'
        },
      }
    }
  }
}
