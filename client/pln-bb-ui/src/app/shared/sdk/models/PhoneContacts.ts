/* tslint:disable */

declare var Object: any;
export interface PhoneContactsInterface {
  "id"?: any;
  "owner_id"?: string;
  "owner_name"?: string;
  "phone_number"?: string;
}

export class PhoneContacts implements PhoneContactsInterface {
  "id": any = <any>null;
  "owner_id": string = '';
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
          type: 'any'
        },
        "owner_id": {
          name: 'owner_id',
          type: 'string'
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
