/* tslint:disable */

declare var Object: any;
export interface TypesInterface {
  "name"?: string;
  "status"?: number;
  "id"?: any;
}

export class Types implements TypesInterface {
  "name": string = '';
  "status": number = 0;
  "id": any = <any>null;
  constructor(data?: TypesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Types`.
   */
  public static getModelName() {
    return "Types";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Types for dynamic purposes.
  **/
  public static factory(data: TypesInterface): Types{
    return new Types(data);
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
      name: 'Types',
      plural: 'types',
      path: 'types',
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
