import { user } from '@angular/fire/auth';
import { Observable ,BehaviorSubject, retry, Subscription, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, FirestoreError } from '@angular/fire/firestore';
import * as firebase from '@angular/fire/auth';
import { IUser } from '../Models/iUser';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore, 
    private route: ActivatedRoute,
    private router: Router,
  
    // private authSer: Auth,
   ) {
    const aCollection = collection(firestore, 'users');
    collectionData(aCollection).subscribe(users => {
      this.users = users;
    })

    this.isAuthSubject = new BehaviorSubject<boolean>(false)
    this.isLoggedinSubject = new BehaviorSubject<boolean>(false)
  }

  // isAuth: boolean = false;
  get isAuth(): boolean{
    let is: boolean = false;
     this.isAuthSubject.subscribe(d => {
      is=d
      
     });
     return is;
  }
  isAuthSubject: BehaviorSubject<boolean>;
  isLoggedinSubject: BehaviorSubject<boolean>;
  userToken: string = ''
  auth = firebase.getAuth()

  get user():IUser{
    let dummyUSer: IUser = {} as IUser;
    this.userSubject.subscribe(data => {
      dummyUSer = data;
    })
    return dummyUSer;
  }
  userSubject: Subject<IUser>  = new Subject();


  register(email: string, password: string){
  

      return firebase.createUserWithEmailAndPassword(this.auth, email, password)
      
  
  }

   login(email: string, password: string){
    
    
   return firebase.signInWithEmailAndPassword(this.auth, email, password)
    
  }
  
  logout() {
    this.isLoggedinSubject.next(false)
    firebase.signOut(this.auth)
  }

  users: any[] = []





}
