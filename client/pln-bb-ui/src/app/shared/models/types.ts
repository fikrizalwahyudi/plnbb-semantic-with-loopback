export class Types {
    id:number;
    name="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}