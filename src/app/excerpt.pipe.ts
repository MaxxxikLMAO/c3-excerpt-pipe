import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string): string {

     const remainder = "...";

    if(value.length > 3)
    return value.substring(0,3) + remainder;

      else return value;


  }

}
