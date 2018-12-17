/* tslint:disable */
import {
  Pltu,
  PlnRencanaPasokan
} from '../index';

declare var Object: any;
export interface PlnRencanaInterface {
  "code"?: string;
  "tahun"?: number;
  "bulan"?: number;
  "totalKebutuhan"?: number;
  "tujuanPltuId"?: any;
  "lock"?: boolean;
  "id"?: any;
  tujuanPltu?: Pltu;
  pasokan?: PlnRencanaPasokan[];
}

export class PlnRencana implements PlnRencanaInterface {
  "code": string = '';
  "tahun": number = 0;
  "bulan": number = 0;
  "totalKebutuhan": number = 0;
  "tujuanPltuId": any = <any>null;
  "lock": boolean = false;
  "id": any = <any>null;
  tujuanPltu: Pltu = null;
  pasokan: PlnRencanaPasokan[] = null;
  constructor(data?: PlnRencanaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlnRencana`.
   */
  public static getModelName() {
    return "PlnRencana";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlnRencana for dynamic purposes.
  **/
  public static factory(data: PlnRencanaInterface): PlnRencana{
    return new PlnRencana(data);
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
      name: 'PlnRencana',
      plural: 'pln_rencana',
      path: 'pln_rencana',
      idName: 'id',
      properties: {
        "code": {
          name: 'code',
          type: 'string'
        },
        "tahun": {
          name: 'tahun',
          type: 'number'
        },
        "bulan": {
          name: 'bulan',
          type: 'number'
        },
        "totalKebutuhan": {
          name: 'totalKebutuhan',
          type: 'number'
        },
        "tujuanPltuId": {
          name: 'tujuanPltuId',
          type: 'any'
        },
        "lock": {
          name: 'lock',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        tujuanPltu: {
          name: 'tujuanPltu',
          type: 'Pltu',
          model: 'Pltu',
          relationType: 'belongsTo',
                  keyFrom: 'tujuanPltuId',
          keyTo: 'id'
        },
        pasokan: {
          name: 'pasokan',
          type: 'PlnRencanaPasokan[]',
          model: 'PlnRencanaPasokan',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'rencanaId'
        },
      }
    }
  }
}
