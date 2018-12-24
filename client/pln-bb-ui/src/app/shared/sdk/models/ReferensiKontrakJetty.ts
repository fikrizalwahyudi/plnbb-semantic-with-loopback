/* tslint:disable */
import {
  ReferensiKontrak,
  Jetty
} from '../index';

declare var Object: any;
export interface ReferensiKontrakJettyInterface {
  "referensiKontrakId"?: any;
  "jettyId"?: any;
  "id"?: any;
  referensiKontrak?: ReferensiKontrak;
  jetty?: Jetty;
}

export class ReferensiKontrakJetty implements ReferensiKontrakJettyInterface {
  "referensiKontrakId": any = <any>null;
  "jettyId": any = <any>null;
  "id": any = <any>null;
  referensiKontrak: ReferensiKontrak = null;
  jetty: Jetty = null;
  constructor(data?: ReferensiKontrakJettyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReferensiKontrakJetty`.
   */
  public static getModelName() {
    return "ReferensiKontrakJetty";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReferensiKontrakJetty for dynamic purposes.
  **/
  public static factory(data: ReferensiKontrakJettyInterface): ReferensiKontrakJetty{
    return new ReferensiKontrakJetty(data);
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
      name: 'ReferensiKontrakJetty',
      plural: 'referensi_kontrak_jetty',
      path: 'referensi_kontrak_jetty',
      idName: 'id',
      properties: {
        "referensiKontrakId": {
          name: 'referensiKontrakId',
          type: 'any'
        },
        "jettyId": {
          name: 'jettyId',
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
