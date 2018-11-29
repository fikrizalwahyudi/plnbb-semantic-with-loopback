export class RencanaPasokan {
		id:number;
		noKontrak="";
		tahun=0;
		bulan=0;
		tanggalKirim:Date;
		pltuId:number;
 		tipeId:number;
		modeId:number;
		tonnase:number;
		userId:number;
		status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}