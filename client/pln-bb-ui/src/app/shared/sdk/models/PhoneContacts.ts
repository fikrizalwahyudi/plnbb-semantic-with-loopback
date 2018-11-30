/* tslint:disable */

declare var Object: any;
export interface PhoneContactsInterface {
  "ownerId"?: string;
  "ownerName"?: string;
  "phoneNumber"?: string;
  "id"?: any;
}

export class PhoneContacts implements PhoneContactsInterface {
  "ownerId": string = '';
  "ownerName": string = '';
  "phoneNumber": string = '';
  "id": any = <any>null;
  constructor(data?: PhoneContactsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PhoneContacts`.
   */
  public static getModelName() {
    return "PhoneContacts";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PhoneContacts for dynamic purposes.
  **/
  public static factory(data: PhoneContactsInterface): PhoneContacts{
    return new PhoneContacts(data);
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
      name: 'PhoneContacts',
      plural: 'phone_contacts',
      path: 'phone_contacts',
      idName: 'id',
      properties: {
        "ownerId": {
          name: 'ownerId',
          type: 'string'
        },
        "ownerName": {
          name: 'ownerName',
          type: 'string'
        },
        "phoneNumber": {
          name: 'phoneNumber',
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
