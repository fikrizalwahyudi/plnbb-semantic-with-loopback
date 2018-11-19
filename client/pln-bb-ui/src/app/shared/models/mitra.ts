export class Mitra {
    id:number;
    code="";
    name="";
    address="";
    npwp="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}