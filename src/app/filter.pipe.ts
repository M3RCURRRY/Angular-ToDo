import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './TodoTypes';

@Pipe({
  name: 'itemfilter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data: ITask[], filter: string): ITask[] {
    if (!data || !filter) return data;
    
    return data.filter(item => item.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
