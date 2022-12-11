import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoUrl'
})
export class RepoUrlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === null) {
      return ""
    } else {
      console.log(value);
      return value;
    }
  }

}
