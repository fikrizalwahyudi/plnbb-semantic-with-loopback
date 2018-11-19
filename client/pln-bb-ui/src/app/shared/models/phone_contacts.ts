export class Phone_contacts {
    id=0;
    owner_id=0;
    owner_name="";
    phone_number=0;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
