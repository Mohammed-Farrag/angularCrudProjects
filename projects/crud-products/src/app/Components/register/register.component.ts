import { user } from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { IUser } from '../../Models/iUser';
import { getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {


  constructor(
      private firestore: Firestore, 
      private userService: UserService, 
      private router: Router){
  }

  
  user: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',
    [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10) ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('')
  }) 

  get name(){
    return this.user.get('name');
  }
  get password(){
    return this.user.get('password');
  }


  register(){
    
    this.userService.register(this.user.value.email, this.user.value.password)
    .then((userCredential: any)  => {
      if(userCredential.user){
        
            this.router.navigate(['/login'])
      }
      console.log(userCredential.user)
      
    })
    .catch(err => {this.handleErrCode(err.code)})
  }

  
  handleErrCode(code:string){
    switch(code){
      case "auth/email-already-in-use":
        return Swal.fire('Already Registered', 'You should Login', 'info');
      case 'auth/weak-password':
       return  Swal.fire('Weak Password', 'Your password should contain letters, numbers and br 6 digits at least', 'warning');
      default :
      return false;
    }
  }
}
