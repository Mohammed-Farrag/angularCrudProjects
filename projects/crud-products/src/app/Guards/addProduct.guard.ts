import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../Services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userServise= inject(UserService);

  let  isCan: boolean = false;
  userServise.isAuthSubject.subscribe(data => {
    if(data){
    isCan = data
    }else{
      alert('you have not access to this route') 
      isCan = data;
    }
  })
  return isCan;
  // return false;
};
