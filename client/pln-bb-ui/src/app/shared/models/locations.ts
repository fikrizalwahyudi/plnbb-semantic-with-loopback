export class Locations {
    id:number;
    name="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}