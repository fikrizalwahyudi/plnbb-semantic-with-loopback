export class Users {
    id=0;
    email="";
    username="";
    password="";
    name="";
    role_id=0;
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}