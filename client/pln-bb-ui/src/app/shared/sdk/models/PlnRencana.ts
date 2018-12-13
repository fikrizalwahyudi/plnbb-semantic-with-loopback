/* tslint:disable */
import {
  Pltu
} from '../index';

declare var Object: any;
export interface PlnRencanaInterface {
  "tahun"?: number;
  "bulan"?: number;
  "tujuanPltuId"?: any;
  "id"?: any;
  tujuanPltu?: Pltu;
}

export class PlnRencana implements PlnRencanaInterface {
  "tahun": number = 0;
  "bulan": number = 0;
  "tujuanPltuId": any = <any>null;
  "id": any = <any>null;
  tujuanPltu: Pltu = null;
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
        "tahun": {
          name: 'tahun',
          type: 'number'
        },
        "bulan": {
          name: 'bulan',
          type: 'number'
        },
        "tujuanPltuId": {
          name: 'tujuanPltuId',
          type: 'any'
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
      }
    }
  }
}
