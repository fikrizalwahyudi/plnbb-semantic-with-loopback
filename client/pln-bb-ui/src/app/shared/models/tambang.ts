export class Tambang {
    id:number;
    name="";
    sertifikat="";
    jenisTambangId:number;
    locationId:number;
    tanggalBerlaku:Date;
    tanggalHabis:Date;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}