import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Product } from '../models/product.model';

@Pipe({
  name: "mypipe",
})
export class MypipePipe implements PipeTransform {
  transform(items: Product[], searchString: string): any {
    if (!isNullOrUndefined(items) && searchString.trim().length > 0) {
      let newArr = items.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchString.toLowerCase()) === 0 ||
          item.artikul.toLowerCase().indexOf(searchString.toLowerCase()) === 0
      );
      return newArr;
    } else {
      return items;
    }
  }
}
