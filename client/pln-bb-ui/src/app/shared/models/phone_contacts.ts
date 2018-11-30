export class PhoneContacts {
    id:number;
    ownerId:number;
    ownerName="";
    phoneNumber="";
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
