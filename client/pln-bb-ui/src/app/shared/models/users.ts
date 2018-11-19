export class Users {
    id:number;
    email="";
    username="";
    password="";
    name="";
    role_id:number;
    status=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}