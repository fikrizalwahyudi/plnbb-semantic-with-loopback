/* tslint:disable */

declare var Object: any;
export interface ModesInterface {
  "id"?: number;
  "name"?: string;
  "status"?: number;
}

export class Modes implements ModesInterface {
  "id": number = 0;
  "name": string = '';
  "status": number = 0;
  constructor(data?: ModesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Modes`.
   */
  public static getModelName() {
    return "Modes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Modes for dynamic purposes.
  **/
  public static factory(data: ModesInterface): Modes{
    return new Modes(data);
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
      name: 'Modes',
      plural: 'modes',
      path: 'modes',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
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
