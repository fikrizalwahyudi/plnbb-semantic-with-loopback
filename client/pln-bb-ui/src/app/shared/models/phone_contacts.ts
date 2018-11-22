export class PhoneContacts {
    id:number;
    owner_id:number;
    owner_name="";
    phone_number="";
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
