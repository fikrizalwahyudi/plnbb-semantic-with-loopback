/* tslint:disable */

declare var Object: any;
export interface TambangInterface {
  "name"?: string;
  "sertifikat"?: string;
  "jenisSertifikat"?: string;
  "lokasi"?: string;
  "tanggalBerlaku"?: Date;
  "tanggalHabis"?: Date;
  "province"?: string;
  "city"?: string;
  "latitude"?: string;
  "longitude"?: string;
  "id"?: any;
}

export class Tambang implements TambangInterface {
  "name": string = '';
  "sertifikat": string = '';
  "jenisSertifikat": string = '';
  "lokasi": string = '';
  "tanggalBerlaku": Date = new Date(0);
  "tanggalHabis": Date = new Date(0);
  "province": string = '';
  "city": string = '';
  "latitude": string = '';
  "longitude": string = '';
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
        "jenisSertifikat": {
          name: 'jenisSertifikat',
          type: 'string'
        },
        "lokasi": {
          name: 'lokasi',
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
        "province": {
          name: 'province',
          type: 'string'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "latitude": {
          name: 'latitude',
          type: 'string'
        },
        "longitude": {
          name: 'longitude',
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
