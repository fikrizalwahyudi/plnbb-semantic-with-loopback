export class RequestShipping {
   	id:number;
    realisasi_kirim_id:number;
    mitra_id:number;
    no_si="";
    laycan="";
    jetty="";
    nama_kapal="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
