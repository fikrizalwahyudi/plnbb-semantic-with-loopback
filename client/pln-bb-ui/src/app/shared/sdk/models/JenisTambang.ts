/* tslint:disable */

declare var Object: any;
export interface JenisTambangInterface {
  "id"?: any;
  "name"?: string;
  "status"?: number;
}

export class JenisTambang implements JenisTambangInterface {
  "id": any = <any>null;
  "name": string = '';
  "status": number = 0;
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
