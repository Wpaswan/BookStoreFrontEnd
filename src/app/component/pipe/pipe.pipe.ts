import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
  transform(value: any = [], filterString?: string) {  // this is a transform method used to transform our O/P.
    console.log(filterString);

    if (filterString == '' || filterString == null) {
      return value;
    }

    const allbooks = []
    for (const book of value) {
      if (book.bookName.toLowerCase().includes(filterString)
        ) {
        allbooks.push(book);
      }
    }
    return allbooks;
  }
}
