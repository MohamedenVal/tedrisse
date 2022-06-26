import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(text: string, limit?: number): null | string {

    if(!text) {
      return null;
    }

    const desiredLimit = (limit) ? limit : 50;

    return text.substring(0, desiredLimit) + '...';
  }

}
