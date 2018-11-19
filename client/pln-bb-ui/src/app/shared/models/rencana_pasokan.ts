export class Rencana_pasokan {
		id=0;
		no_kontrak="";
		tahun=0;
		bulan=0;
		tanggal_kirim:Date;
		pltu_id=0;
 		tipe_id=0;
		mode_id=0;
		tonnase=0;
		user_id=0;
		status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}