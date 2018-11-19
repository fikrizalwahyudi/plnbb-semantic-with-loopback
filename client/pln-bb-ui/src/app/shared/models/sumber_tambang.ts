export class Sumber_tambang {
 	id:number;
	realisasi_kirim_id:number;
	tambang_id:number;
	ammount=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
