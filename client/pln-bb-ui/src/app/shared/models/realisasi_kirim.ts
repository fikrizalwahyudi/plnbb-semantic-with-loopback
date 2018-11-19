export class Realisasi_kirim {
    id=0;
	rencana_pasokan_id=0;
    tanggal_dikirim:Date;
    realisasi=0;
    user_id=0;
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
