import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loop',
})
export class LoopPipe implements PipeTransform {
  transform(value: number[], ...args: any[]): number[] {
    for (let i = 0; i < args[0]; i++) {
      value.push(args[1]);
    }
    return value;
  }
}
