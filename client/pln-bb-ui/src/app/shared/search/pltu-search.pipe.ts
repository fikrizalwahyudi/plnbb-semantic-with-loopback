import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchPLTU'
})
export class SearchPLTUPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.code.includes(args)) || (val.code.toLowerCase().includes(args)) || (val.name.includes(args)) || (val.name.toLowerCase().includes(args));
      return rVal;
    })

  }

}