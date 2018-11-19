export class Request_shipping {
   	id=0;
    realisasi_kirim_id=0;
    mitra_id=0;
    no_si="";
    laycan="";
    jetty="";
    nama_kapal="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
