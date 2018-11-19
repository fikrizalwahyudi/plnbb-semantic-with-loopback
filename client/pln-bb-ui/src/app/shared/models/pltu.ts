export class Pltu {
	id:number;
	code = "";
	name = "";
	address = "";
	npwp = "";
	status = 0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}