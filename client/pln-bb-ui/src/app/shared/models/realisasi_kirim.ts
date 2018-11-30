export class RealisasiKirim {
    id:number;
	rencanaPasokanId:number;
    tanggalDikirim:Date;
    realisasi=0;
    userId:number;
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
