import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }

  getSingleValue(identifier: any, source: any[], keySource: string) {
    return source.find((item) => item[keySource] == identifier);
  }
}
