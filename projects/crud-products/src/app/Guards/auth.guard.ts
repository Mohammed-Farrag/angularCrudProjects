import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../Services/user.service';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const userServise= inject(UserService);

  let  isCan: boolean = false;
  userServise.isAuthSubject.subscribe(data => {
    if(data){
    isCan = data
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Not Auth'
      });
      isCan = data;
    }
  })
  return isCan;
  // return false;
};
