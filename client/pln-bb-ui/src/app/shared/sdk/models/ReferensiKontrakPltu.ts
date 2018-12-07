/* tslint:disable */
import {
  Pltu,
  ReferensiKontrak
} from '../index';

declare var Object: any;
export interface ReferensiKontrakPltuInterface {
  "referensiKontrakId"?: any;
  "pltuId"?: any;
  "id"?: any;
  pltu?: Pltu;
  referensiKontrak?: ReferensiKontrak;
}

export class ReferensiKontrakPltu implements ReferensiKontrakPltuInterface {
  "referensiKontrakId": any = <any>null;
  "pltuId": any = <any>null;
  "id": any = <any>null;
  pltu: Pltu = null;
  referensiKontrak: ReferensiKontrak = null;
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
          type: 'any'
        },
        "pltuId": {
          name: 'pltuId',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        pltu: {
          name: 'pltu',
          type: 'Pltu',
          model: 'Pltu',
          relationType: 'belongsTo',
                  keyFrom: 'pltuId',
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
      }
    }
  }
}
