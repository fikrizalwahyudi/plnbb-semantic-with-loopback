export class Tokens {
    id:number;
    token="";
    user_id:number;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}