export class Roles {
    id:number;
    name="";
    description="";
    role_auth="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
