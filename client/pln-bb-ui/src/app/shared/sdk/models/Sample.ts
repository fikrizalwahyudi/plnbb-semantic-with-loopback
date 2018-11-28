/* tslint:disable */

declare var Object: any;
export interface SampleInterface {
  "name"?: string;
  "address"?: string;
  "description"?: Date;
  "id"?: number;
}

export class Sample implements SampleInterface {
  "name": string = '';
  "address": string = '';
  "description": Date = new Date(0);
  "id": number = 0;
  constructor(data?: SampleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Sample`.
   */
  public static getModelName() {
    return "Sample";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Sample for dynamic purposes.
  **/
  public static factory(data: SampleInterface): Sample{
    return new Sample(data);
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
      name: 'Sample',
      plural: 'samples',
      path: 'samples',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
