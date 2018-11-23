import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchRefKontrak'
})
export class SearchRefKontrakPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.no.toLowerCase().includes(args)) || (val.nama_pekerjaan.includes(args)) || (val.nama_pekerjaan.toLowerCase().includes(args));
      return rVal;
    })

  }

}