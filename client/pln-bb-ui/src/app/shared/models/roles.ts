export class Roles {
    id:number;
    name="";
    description="";
    roleAuth="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
