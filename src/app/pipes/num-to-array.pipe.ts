import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArray'
})
export class NumToArrayPipe implements PipeTransform {
  transform(value: number, args?: any): number[] {
    return new Array(value).fill(0).map( (val:any, index:number) => index+1);
  }
}
