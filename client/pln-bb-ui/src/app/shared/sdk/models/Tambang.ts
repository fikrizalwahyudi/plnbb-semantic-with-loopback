/* tslint:disable */

declare var Object: any;
export interface TambangInterface {
  "name"?: string;
  "sertifikat"?: string;
  "jenisTambangId"?: string;
  "locationId"?: string;
  "tanggalBerlaku"?: Date;
  "tanggalHabis"?: Date;
  "id"?: any;
}

export class Tambang implements TambangInterface {
  "name": string = '';
  "sertifikat": string = '';
  "jenisTambangId": string = '';
  "locationId": string = '';
  "tanggalBerlaku": Date = new Date(0);
  "tanggalHabis": Date = new Date(0);
  "id": any = <any>null;
  constructor(data?: TambangInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tambang`.
   */
  public static getModelName() {
    return "Tambang";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tambang for dynamic purposes.
  **/
  public static factory(data: TambangInterface): Tambang{
    return new Tambang(data);
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
      name: 'Tambang',
      plural: 'tambang',
      path: 'tambang',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "sertifikat": {
          name: 'sertifikat',
          type: 'string'
        },
        "jenisTambangId": {
          name: 'jenisTambangId',
          type: 'string'
        },
        "locationId": {
          name: 'locationId',
          type: 'string'
        },
        "tanggalBerlaku": {
          name: 'tanggalBerlaku',
          type: 'Date'
        },
        "tanggalHabis": {
          name: 'tanggalHabis',
          type: 'Date'
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
