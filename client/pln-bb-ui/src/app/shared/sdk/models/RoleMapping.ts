/* tslint:disable */
import {
  Role
} from '../index';

declare var Object: any;
export interface RoleMappingInterface {
  "id"?: any;
  "principalType"?: string;
  "principalId"?: any;
  "roleId"?: any;
  role?: Role;
}

export class RoleMapping implements RoleMappingInterface {
  "id": any = <any>null;
  "principalType": string = '';
  "principalId": any = <any>null;
  "roleId": any = <any>null;
  role: Role = null;
  constructor(data?: RoleMappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RoleMapping`.
   */
  public static getModelName() {
    return "RoleMapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RoleMapping for dynamic purposes.
  **/
  public static factory(data: RoleMappingInterface): RoleMapping{
    return new RoleMapping(data);
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
      name: 'RoleMapping',
      plural: 'RoleMappings',
      path: 'RoleMappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "principalType": {
          name: 'principalType',
          type: 'string'
        },
        "principalId": {
          name: 'principalId',
          type: 'any'
        },
        "roleId": {
          name: 'roleId',
          type: 'any'
        },
      },
      relations: {
        role: {
          name: 'role',
          type: 'Role',
          model: 'Role',
          relationType: 'belongsTo',
                  keyFrom: 'roleId',
          keyTo: 'id'
        },
      }
    }
  }
}
