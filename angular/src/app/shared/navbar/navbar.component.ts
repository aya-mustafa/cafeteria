import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  
  isLog:any;
  isadmine:boolean = false;
  userName = localStorage.getItem("userName");

  constructor( private _authservice :AuthService,private _router:Router)
  {
    console.log(this.userName);
    let cuurentUserSate = localStorage.getItem("Admin");
    if(cuurentUserSate == "true")
    {
      this.isadmine = true;
      console.log(this.isadmine)
    }
    else
    {
      this.isadmine = false;
      console.log(this.isadmine)
    }

    this._authservice.isUserLogin()
    this.isLog = this._authservice.isLogin;

  }


  logOut()
  {
    localStorage.clear()
    this._router.navigateByUrl("/login");
    location.replace('/login')
  }

}
