/* tslint:disable */

declare var Object: any;
export interface UsersInterface {
  "name"?: string;
  "roleId"?: number;
  "status"?: number;
  "id"?: any;
}

export class Users implements UsersInterface {
  "name": string = '';
  "roleId": number = 0;
  "status": number = 0;
  "id": any = <any>null;
  constructor(data?: UsersInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Users`.
   */
  public static getModelName() {
    return "Users";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Users for dynamic purposes.
  **/
  public static factory(data: UsersInterface): Users{
    return new Users(data);
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
      name: 'Users',
      plural: 'users',
      path: 'users',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "roleId": {
          name: 'roleId',
          type: 'number'
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
