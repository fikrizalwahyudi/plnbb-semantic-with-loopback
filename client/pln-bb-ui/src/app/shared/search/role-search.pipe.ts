import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchRole'
})
export class SearchRolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.name.includes(args)) || (val.name.toLowerCase().includes(args));
      return rVal;
    })

  }

}