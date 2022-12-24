import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodificaSesso'
})
export class DecodificaSessoPipe implements PipeTransform {

  transform(sesso: string, ...args: unknown[]): string {
    return sesso==='MASCHIO' ? 'M' : 'F';
  }

}
