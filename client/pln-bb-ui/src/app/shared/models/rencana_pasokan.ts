export class RencanaPasokan {
		id:number;
		no_kontrak="";
		tahun=0;
		bulan=0;
		tanggal_kirim:Date;
		pltu_id:number;
 		tipe_id:number;
		mode_id:number;
		tonnase:number;
		user_id:number;
		status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}