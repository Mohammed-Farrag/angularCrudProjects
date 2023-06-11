import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { IUser } from '../../Models/iUser';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router, private firestore: Firestore){}

  user: FormGroup = new FormGroup({
   
    password: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

 
  newUser: IUser = { } as IUser

  login(){
    this.userService.login(this.user.value.email, this.user.value.password)
    .then((userCredential: any) => {
      if(userCredential.user){
        this.newUser = {
          name: this.user.value.name,
          email: this.user.value.email,
          role: this.user.value.role,
        }

        
        this.userService.userSubject.next(this.newUser)
        this.userService.isAuthSubject.next(true)
        this.userService.isLoggedinSubject.next(true)
        // Swal.fire('login success', 'login operation success', 'success')
        addDoc(collection(this.firestore, '/users'), this.newUser);
        console.log(userCredential.user)
        this.router.navigate(['/products-list']);
    }
      console.log("memo", userCredential.user);
      }).catch((err) => {console.log(err); this.handleErrCode(err.code)})
    
  }
  
  handleErrCode(code:string){
    switch(code){
      case "auth/wrong-password":
        return Swal.fire('Wrong Password', 'The Password you have entered was incorrect', 'error');
      case 'auth/user-not-found':
       return  Swal.fire('Wrong Password or Email', 'The Password or Email you have entered was incorrect', 'error');
      default :
      return false;
    }
  }
}
