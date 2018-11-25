export class ReferensiKontrak {
    id:number;
    nomor_kontrak="";
    nama_pekerjaan="";
    tanggal_pekerjaan:Date;
    pltu_id:number;
    mitra_id:number;
    jenis=0;
    status=0;
    
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
