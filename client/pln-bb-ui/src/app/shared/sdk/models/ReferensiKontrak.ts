/* tslint:disable */

declare var Object: any;
export interface ReferensiKontrakInterface {
  "nomorKontrak"?: string;
  "namaPekerjaan"?: string;
  "tanggalPekerjaan"?: Date;
  "jenis"?: string;
  "status"?: number;
  "id"?: any;
}

export class ReferensiKontrak implements ReferensiKontrakInterface {
  "nomorKontrak": string = '';
  "namaPekerjaan": string = '';
  "tanggalPekerjaan": Date = new Date(0);
  "jenis": string = '';
  "status": number = 0;
  "id": any = <any>null;
  constructor(data?: ReferensiKontrakInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReferensiKontrak`.
   */
  public static getModelName() {
    return "ReferensiKontrak";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReferensiKontrak for dynamic purposes.
  **/
  public static factory(data: ReferensiKontrakInterface): ReferensiKontrak{
    return new ReferensiKontrak(data);
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
      name: 'ReferensiKontrak',
      plural: 'referensi_kontrak',
      path: 'referensi_kontrak',
      idName: 'id',
      properties: {
        "nomorKontrak": {
          name: 'nomorKontrak',
          type: 'string'
        },
        "namaPekerjaan": {
          name: 'namaPekerjaan',
          type: 'string'
        },
        "tanggalPekerjaan": {
          name: 'tanggalPekerjaan',
          type: 'Date'
        },
        "jenis": {
          name: 'jenis',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number'
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
