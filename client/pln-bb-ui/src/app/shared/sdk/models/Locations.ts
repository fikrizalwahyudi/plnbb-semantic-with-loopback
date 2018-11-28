/* tslint:disable */

declare var Object: any;
export interface LocationsInterface {
  "id"?: number;
  "name"?: string;
  "status"?: number;
}

export class Locations implements LocationsInterface {
  "id": number = 0;
  "name": string = '';
  "status": number = 0;
  constructor(data?: LocationsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Locations`.
   */
  public static getModelName() {
    return "Locations";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Locations for dynamic purposes.
  **/
  public static factory(data: LocationsInterface): Locations{
    return new Locations(data);
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
      name: 'Locations',
      plural: 'locations',
      path: 'locations',
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
