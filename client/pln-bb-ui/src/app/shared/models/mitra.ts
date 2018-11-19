export class Mitra {
    id=0;
    code="";
    name="";
    address="";
    npwp="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}