/* tslint:disable */

declare var Object: any;
export interface PhoneContactsInterface {
  "id"?: number;
  "owner_id"?: number;
  "owner_name"?: string;
  "phone_number"?: string;
}

export class PhoneContacts implements PhoneContactsInterface {
  "id": number = 0;
  "owner_id": number = 0;
  "owner_name": string = '';
  "phone_number": string = '';
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "owner_id": {
          name: 'owner_id',
          type: 'number'
        },
        "owner_name": {
          name: 'owner_name',
          type: 'string'
        },
        "phone_number": {
          name: 'phone_number',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
