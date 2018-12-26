/* tslint:disable */
import {
  Mitra,
  ReferensiKontrak,
  Pltu,
  Jetty,
  ShippingInstruction,
  ShippingLoading,
  ShippingUnloading
} from '../index';

declare var Object: any;
export interface ShippingInterface {
  "mitraId"?: any;
  "transportId"?: any;
  "referensiKontrakId"?: any;
  "tujuanPltuId"?: any;
  "jettyId"?: any;
  "siId"?: any;
  "laycanStartDate"?: Date;
  "laycanEndDate"?: Date;
  "jumlah"?: number;
  "harga"?: number;
  "moda"?: string;
  "tipe"?: string;
  "jenisBatubara"?: string;
  "status"?: number;
  "id"?: any;
  mitra?: Mitra;
  transport?: Mitra;
  referensiKontrak?: ReferensiKontrak;
  tujuanPltu?: Pltu;
  jetty?: Jetty;
  si?: ShippingInstruction;
  loading?: ShippingLoading;
  unloading?: ShippingUnloading;
}

export class Shipping implements ShippingInterface {
  "mitraId": any = <any>null;
  "transportId": any = <any>null;
  "referensiKontrakId": any = <any>null;
  "tujuanPltuId": any = <any>null;
  "jettyId": any = <any>null;
  "siId": any = <any>null;
  "laycanStartDate": Date = new Date(0);
  "laycanEndDate": Date = new Date(0);
  "jumlah": number = 0;
  "harga": number = 0;
  "moda": string = '';
  "tipe": string = '';
  "jenisBatubara": string = '';
  "status": number = 0;
  "id": any = <any>null;
  mitra: Mitra = null;
  transport: Mitra = null;
  referensiKontrak: ReferensiKontrak = null;
  tujuanPltu: Pltu = null;
  jetty: Jetty = null;
  si: ShippingInstruction = null;
  loading: ShippingLoading = null;
  unloading: ShippingUnloading = null;
  constructor(data?: ShippingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Shipping`.
   */
  public static getModelName() {
    return "Shipping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Shipping for dynamic purposes.
  **/
  public static factory(data: ShippingInterface): Shipping{
    return new Shipping(data);
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
      name: 'Shipping',
      plural: 'shipping',
      path: 'shipping',
      idName: 'id',
      properties: {
        "mitraId": {
          name: 'mitraId',
          type: 'any'
        },
        "transportId": {
          name: 'transportId',
          type: 'any'
        },
        "referensiKontrakId": {
          name: 'referensiKontrakId',
          type: 'any'
        },
        "tujuanPltuId": {
          name: 'tujuanPltuId',
          type: 'any'
        },
        "jettyId": {
          name: 'jettyId',
          type: 'any'
        },
        "siId": {
          name: 'siId',
          type: 'any'
        },
        "laycanStartDate": {
          name: 'laycanStartDate',
          type: 'Date'
        },
        "laycanEndDate": {
          name: 'laycanEndDate',
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
        "moda": {
          name: 'moda',
          type: 'string'
        },
        "tipe": {
          name: 'tipe',
          type: 'string'
        },
        "jenisBatubara": {
          name: 'jenisBatubara',
          type: 'string'
        },
        "status": {
          name: 'status',
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
        transport: {
          name: 'transport',
          type: 'Mitra',
          model: 'Mitra',
          relationType: 'belongsTo',
                  keyFrom: 'transportId',
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
        tujuanPltu: {
          name: 'tujuanPltu',
          type: 'Pltu',
          model: 'Pltu',
          relationType: 'belongsTo',
                  keyFrom: 'tujuanPltuId',
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
        si: {
          name: 'si',
          type: 'ShippingInstruction',
          model: 'ShippingInstruction',
          relationType: 'belongsTo',
                  keyFrom: 'siId',
          keyTo: 'id'
        },
        loading: {
          name: 'loading',
          type: 'ShippingLoading',
          model: 'ShippingLoading',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'shippingId'
        },
        unloading: {
          name: 'unloading',
          type: 'ShippingUnloading',
          model: 'ShippingUnloading',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'shippingId'
        },
      }
    }
  }
}
