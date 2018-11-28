/* tslint:disable */

declare var Object: any;
export interface RolesInterface {
  "id"?: number;
  "name"?: string;
  "description"?: string;
  "role_auth"?: string;
  "status"?: number;
}

export class Roles implements RolesInterface {
  "id": number = 0;
  "name": string = '';
  "description": string = '';
  "role_auth": string = '';
  "status": number = 0;
  constructor(data?: RolesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Roles`.
   */
  public static getModelName() {
    return "Roles";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Roles for dynamic purposes.
  **/
  public static factory(data: RolesInterface): Roles{
    return new Roles(data);
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
      name: 'Roles',
      plural: 'roles',
      path: 'roles',
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
        "description": {
          name: 'description',
          type: 'string'
        },
        "role_auth": {
          name: 'role_auth',
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
