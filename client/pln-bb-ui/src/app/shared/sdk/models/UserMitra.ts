/* tslint:disable */

declare var Object: any;
export interface UserMitraInterface {
  "id"?: number;
  "user_id"?: number;
  "mitra_id"?: number;
}

export class UserMitra implements UserMitraInterface {
  "id": number = 0;
  "user_id": number = 0;
  "mitra_id": number = 0;
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "user_id": {
          name: 'user_id',
          type: 'number'
        },
        "mitra_id": {
          name: 'mitra_id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
