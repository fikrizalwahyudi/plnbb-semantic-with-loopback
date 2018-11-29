/* tslint:disable */
import {
  Pltu
} from '../index';

declare var Object: any;
export interface ReferensiKontrakPltuInterface {
  "referensiKontrakId"?: string;
  "pltuId"?: string;
  "id"?: any;
  "pltu_id"?: any;
  "referensi_kontrak_id"?: any;
  pltu?: Pltu;
}

export class ReferensiKontrakPltu implements ReferensiKontrakPltuInterface {
  "referensiKontrakId": string = '';
  "pltuId": string = '';
  "id": any = <any>null;
  "pltu_id": any = <any>null;
  "referensi_kontrak_id": any = <any>null;
  pltu: Pltu = null;
  constructor(data?: ReferensiKontrakPltuInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReferensiKontrakPltu`.
   */
  public static getModelName() {
    return "ReferensiKontrakPltu";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReferensiKontrakPltu for dynamic purposes.
  **/
  public static factory(data: ReferensiKontrakPltuInterface): ReferensiKontrakPltu{
    return new ReferensiKontrakPltu(data);
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
      name: 'ReferensiKontrakPltu',
      plural: 'referensi_kontrak_pltu',
      path: 'referensi_kontrak_pltu',
      idName: 'id',
      properties: {
        "referensiKontrakId": {
          name: 'referensiKontrakId',
          type: 'string'
        },
        "pltuId": {
          name: 'pltuId',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "pltu_id": {
          name: 'pltu_id',
          type: 'any'
        },
        "referensi_kontrak_id": {
          name: 'referensi_kontrak_id',
          type: 'any'
        },
      },
      relations: {
        pltu: {
          name: 'pltu',
          type: 'Pltu',
          model: 'Pltu',
          relationType: 'belongsTo',
                  keyFrom: 'pltu_id',
          keyTo: 'id'
        },
      }
    }
  }
}
