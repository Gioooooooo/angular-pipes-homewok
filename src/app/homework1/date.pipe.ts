import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: unknown, ...args: any[]): number {
    const d = new Date();
    return args[0] - d.getFullYear();
  }
}
