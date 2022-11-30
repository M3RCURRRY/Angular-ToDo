import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './TodoTypes';

@Pipe({
  name: 'itemfilter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data: ITask[], filter: string): any {
    if (!data || !filter) return data;
    
    return data.filter(item => item.text.indexOf(filter) !== -1);
  }
}
