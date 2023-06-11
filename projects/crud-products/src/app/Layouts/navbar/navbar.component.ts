import { Component , OnChanges} from '@angular/core';
import { UserService } from '../../Services/user.service';
import { IUser } from '../../Models/iUser';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges  {
  constructor(private userSer: UserService){
   this.userSer.isAuthSubject.subscribe(data => this.isAuth = data)
   this.userSer.isLoggedinSubject.subscribe(data => this.isLoggedin = data)
   this.userSer.userSubject.subscribe(data => this.user = data)
  }

  isAuth: boolean = false
  isLoggedin: boolean = false
  user: IUser = {} as IUser
  // user = getAuth();
  ngOnChanges(){
    console.log('changes')
  }

  logout(){
      this.userSer.logout()
  }
}
