export class ReferensiKontrak {
    id:number;
    nomorKontrak="";
    namaPekerjaan="";
    tanggalPekerjaan:Date;
    pltuId:number;
    mitraId:number;
    jenis=0;
    status=0;
    
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
