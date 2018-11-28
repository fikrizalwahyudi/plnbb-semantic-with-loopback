/* tslint:disable */

declare var Object: any;
export interface ReferensiKontrakInterface {
  "id"?: any;
  "nomor_kontrak"?: string;
  "nama_pekerjaan"?: string;
  "tanggal_pekerjaan"?: Date;
  "pltu_id"?: string;
  "mitra_id"?: string;
  "jenis"?: number;
  "status"?: number;
}

export class ReferensiKontrak implements ReferensiKontrakInterface {
  "id": any = <any>null;
  "nomor_kontrak": string = '';
  "nama_pekerjaan": string = '';
  "tanggal_pekerjaan": Date = new Date(0);
  "pltu_id": string = '';
  "mitra_id": string = '';
  "jenis": number = 0;
  "status": number = 0;
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "nomor_kontrak": {
          name: 'nomor_kontrak',
          type: 'string'
        },
        "nama_pekerjaan": {
          name: 'nama_pekerjaan',
          type: 'string'
        },
        "tanggal_pekerjaan": {
          name: 'tanggal_pekerjaan',
          type: 'Date'
        },
        "pltu_id": {
          name: 'pltu_id',
          type: 'string'
        },
        "mitra_id": {
          name: 'mitra_id',
          type: 'string'
        },
        "jenis": {
          name: 'jenis',
          type: 'number'
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
