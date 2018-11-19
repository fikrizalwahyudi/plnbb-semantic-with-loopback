export class Phone_contacts {
    id:number;
    owner_id:number;
    owner_name="";
    phone_number="";
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
