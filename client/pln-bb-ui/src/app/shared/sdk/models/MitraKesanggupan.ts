/* tslint:disable */
import {
  ReferensiKontrak,
  Pltu,
  MitraKesanggupanTambang,
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
  "gcv"?: number;
  "tm"?: number;
  "ash"?: number;
  "ts"?: number;
  "hgi"?: number;
  "idt"?: number;
  "size1"?: number;
  "size2"?: number;
  "userId"?: any;
  "id"?: any;
  referensiKontrak?: ReferensiKontrak;
  tujuanPltu?: Pltu;
  sumberTambang?: MitraKesanggupanTambang[];
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
  "gcv": number = 0;
  "tm": number = 0;
  "ash": number = 0;
  "ts": number = 0;
  "hgi": number = 0;
  "idt": number = 0;
  "size1": number = 0;
  "size2": number = 0;
  "userId": any = <any>null;
  "id": any = <any>null;
  referensiKontrak: ReferensiKontrak = null;
  tujuanPltu: Pltu = null;
  sumberTambang: MitraKesanggupanTambang[] = null;
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
        "gcv": {
          name: 'gcv',
          type: 'number'
        },
        "tm": {
          name: 'tm',
          type: 'number'
        },
        "ash": {
          name: 'ash',
          type: 'number'
        },
        "ts": {
          name: 'ts',
          type: 'number'
        },
        "hgi": {
          name: 'hgi',
          type: 'number'
        },
        "idt": {
          name: 'idt',
          type: 'number'
        },
        "size1": {
          name: 'size1',
          type: 'number'
        },
        "size2": {
          name: 'size2',
          type: 'number'
        },
        "userId": {
          name: 'userId',
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
