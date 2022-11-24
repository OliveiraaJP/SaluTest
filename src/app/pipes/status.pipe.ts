import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    if(value.toLowerCase() === "ativo"){
      return 'done'
    }else{
      return 'close'
    }
  }

}
