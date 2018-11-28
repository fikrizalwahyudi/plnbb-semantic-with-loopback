/* tslint:disable */

declare var Object: any;
export interface UsersInterface {
  "id"?: number;
  "email"?: string;
  "username"?: string;
  "name"?: string;
  "role_id"?: number;
  "status"?: number;
  "realm"?: string;
  "emailVerified"?: boolean;
  "password"?: string;
}

export class Users implements UsersInterface {
  "id": number = 0;
  "email": string = '';
  "username": string = '';
  "name": string = '';
  "role_id": number = 0;
  "status": number = 0;
  "realm": string = '';
  "emailVerified": boolean = false;
  "password": string = '';
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "role_id": {
          name: 'role_id',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
