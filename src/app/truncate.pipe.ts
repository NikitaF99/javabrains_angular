import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value:any, args?: any): string {
    //since we are passing argument as 30, it shows 30 chracters
    const limit = args.length > 0 ? parseInt(args[0],10):20; //by default it truncates to 20 characters
    const trail = args.length >1 ? args[1]: '...';
    return value.length > limit ? value.substring(0,limit) + trail : value;

    //limit => how long the test needs to be truncated
    //trail=>what needs to be put at the end ti indicate there is more text
  }

}
