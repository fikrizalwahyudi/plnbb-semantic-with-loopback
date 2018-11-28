/* tslint:disable */
import {
  Mitra
} from '../index';

declare var Object: any;
export interface UserMitraInterface {
  "userId"?: string;
  "mitraId"?: string;
  "id"?: any;
  "mitra_id"?: any;
  mitra?: Mitra;
}

export class UserMitra implements UserMitraInterface {
  "userId": string = '';
  "mitraId": string = '';
  "id": any = <any>null;
  "mitra_id": any = <any>null;
  mitra: Mitra = null;
  constructor(data?: UserMitraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserMitra`.
   */
  public static getModelName() {
    return "UserMitra";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserMitra for dynamic purposes.
  **/
  public static factory(data: UserMitraInterface): UserMitra{
    return new UserMitra(data);
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
      name: 'UserMitra',
      plural: 'user_mitra',
      path: 'user_mitra',
      idName: 'id',
      properties: {
        "userId": {
          name: 'userId',
          type: 'string'
        },
        "mitraId": {
          name: 'mitraId',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "mitra_id": {
          name: 'mitra_id',
          type: 'any'
        },
      },
      relations: {
        mitra: {
          name: 'mitra',
          type: 'Mitra',
          model: 'Mitra',
          relationType: 'belongsTo',
                  keyFrom: 'mitra_id',
          keyTo: 'id'
        },
      }
    }
  }
}
