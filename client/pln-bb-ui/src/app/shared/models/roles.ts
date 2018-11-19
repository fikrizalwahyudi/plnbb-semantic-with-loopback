export class Roles {
    id=0;
    name="";
    description="";
    role_auth="";
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
