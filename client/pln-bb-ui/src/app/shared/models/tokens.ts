export class Tokens {
    id:number;
    token="";
    userId:number;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}