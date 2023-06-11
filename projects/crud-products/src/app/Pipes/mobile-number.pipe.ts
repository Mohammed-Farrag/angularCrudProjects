import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'mobileNumber'
})
export class MobileNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(String(value).length != 11){
      Swal.fire('mobile number should be 11 digits only')
      return null 
    }else if(!String(value).startsWith('01')){
      
      Swal.fire('mobile number should start with 01')
      return null
    }
    return null;
  }

}
