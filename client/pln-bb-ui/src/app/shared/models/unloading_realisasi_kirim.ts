export class UnloadingRealisasiKirim {
    id:number;
    realisasiKirimId:number;
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
