/* tslint:disable */

declare var Object: any;
export interface JenisTambangInterface {
  "name"?: string;
  "status"?: number;
  "id"?: any;
}

export class JenisTambang implements JenisTambangInterface {
  "name": string = '';
  "status": number = 0;
  "id": any = <any>null;
  constructor(data?: JenisTambangInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `JenisTambang`.
   */
  public static getModelName() {
    return "JenisTambang";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of JenisTambang for dynamic purposes.
  **/
  public static factory(data: JenisTambangInterface): JenisTambang{
    return new JenisTambang(data);
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
      name: 'JenisTambang',
      plural: 'jenis_tambang',
      path: 'jenis_tambang',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
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
      }
    }
  }
}
