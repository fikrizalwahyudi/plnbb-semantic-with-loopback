/* tslint:disable */

declare var Object: any;
export interface TokensInterface {
  "token"?: string;
  "userId"?: string;
  "id"?: any;
}

export class Tokens implements TokensInterface {
  "token": string = '';
  "userId": string = '';
  "id": any = <any>null;
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
        "token": {
          name: 'token',
          type: 'string'
        },
        "userId": {
          name: 'userId',
          type: 'string'
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
