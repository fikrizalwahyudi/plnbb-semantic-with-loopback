/* tslint:disable */

declare var Object: any;
export interface TokensInterface {
  "id"?: any;
  "token"?: string;
  "user_id"?: string;
}

export class Tokens implements TokensInterface {
  "id": any = <any>null;
  "token": string = '';
  "user_id": string = '';
  constructor(data?: TokensInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tokens`.
   */
  public static getModelName() {
    return "Tokens";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tokens for dynamic purposes.
  **/
  public static factory(data: TokensInterface): Tokens{
    return new Tokens(data);
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
      name: 'Tokens',
      plural: 'tokens',
      path: 'tokens',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "token": {
          name: 'token',
          type: 'string'
        },
        "user_id": {
          name: 'user_id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
