export class RequestShipping {
   	id:number;
    realisasiKirimId:number;
    mitraId:number;
    noSi="";
    laycan="";
    jetty="";
    namaKapal="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
