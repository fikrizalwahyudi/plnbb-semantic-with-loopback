export class Unloading_realisasi_kirim {
    id:number;
    realisasi_kirim_id:number;
    bl="";
    ash="";
    idt="";
    gcv="";
    ts="";
    "720mm"="";
    tm="";
    hgi="";
    "238mm"="";
    time_arrival:Date;
    berthing:Date;
    commence_unloading:Date;
    complete_unloading:Date;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
