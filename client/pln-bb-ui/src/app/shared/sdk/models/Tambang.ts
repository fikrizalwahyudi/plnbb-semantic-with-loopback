/* tslint:disable */

declare var Object: any;
export interface TambangInterface {
  "id"?: number;
  "name"?: string;
  "sertifikat"?: string;
  "jenis_tambang_id"?: number;
  "location_id"?: number;
  "tanggal_berlaku"?: Date;
  "tanggal_habis"?: Date;
}

export class Tambang implements TambangInterface {
  "id": number = 0;
  "name": string = '';
  "sertifikat": string = '';
  "jenis_tambang_id": number = 0;
  "location_id": number = 0;
  "tanggal_berlaku": Date = new Date(0);
  "tanggal_habis": Date = new Date(0);
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "sertifikat": {
          name: 'sertifikat',
          type: 'string'
        },
        "jenis_tambang_id": {
          name: 'jenis_tambang_id',
          type: 'number'
        },
        "location_id": {
          name: 'location_id',
          type: 'number'
        },
        "tanggal_berlaku": {
          name: 'tanggal_berlaku',
          type: 'Date'
        },
        "tanggal_habis": {
          name: 'tanggal_habis',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
