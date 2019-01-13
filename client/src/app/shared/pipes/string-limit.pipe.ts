import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stringLimit'})
export class StringLimit implements PipeTransform {
  transform(dataString: string, charLimit: number): string {
    return dataString.substr(0, charLimit) + (dataString.length >= charLimit ? '...' : '');
  }
}
