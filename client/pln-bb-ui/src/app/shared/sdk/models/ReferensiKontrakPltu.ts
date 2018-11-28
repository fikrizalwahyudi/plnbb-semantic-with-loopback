/* tslint:disable */

declare var Object: any;
export interface ReferensiKontrakPltuInterface {
  "id"?: any;
  "referensi_kontrak_id"?: string;
  "pltu_id"?: string;
}

export class ReferensiKontrakPltu implements ReferensiKontrakPltuInterface {
  "id": any = <any>null;
  "referensi_kontrak_id": string = '';
  "pltu_id": string = '';
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "referensi_kontrak_id": {
          name: 'referensi_kontrak_id',
          type: 'string'
        },
        "pltu_id": {
          name: 'pltu_id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
