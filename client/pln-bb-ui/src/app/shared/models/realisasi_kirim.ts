export class Realisasi_kirim {
    id:number;
	rencana_pasokan_id:number;
    tanggal_dikirim:Date;
    realisasi=0;
    user_id:number;
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
