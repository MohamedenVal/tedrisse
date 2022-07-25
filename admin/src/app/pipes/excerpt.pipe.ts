import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(text: string | undefined, limit: number = 100) {
    if (!text) {
      return '...';
    } else {
      if (text.length <= limit) {
        return text;
      }
      return text.substring(0, limit) + '...';
    }

  }

}
