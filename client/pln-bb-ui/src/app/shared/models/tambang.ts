export class Tambang {
    id:number;
    name="";
    sertifikat="";
    jenis_tambang_id:number;
    location_id:number;
    tanggal_berlaku:Date;
    tanggal_habis:Date;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}