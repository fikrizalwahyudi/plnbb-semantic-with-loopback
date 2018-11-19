export class Tambang {
    id=0;
    name="";
    sertifikat="";
    jenis_tambang_id=0;
    location_id=0;
    tanggal_berlaku:Date;
    tanggal_habis:Date;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}