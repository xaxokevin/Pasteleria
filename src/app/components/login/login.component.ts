import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(public afAuth: AngularFireAuth,private router: Router, private authService: AuthService, private spinnerService: NgxSpinnerService) { }

  public email: string='';
  public pass: string='';
  ngOnInit() {
  }

  onLogin(): void{
    this.authService.loginEmailUser(this.email, this.pass)
    .then((res) => {
      this.spinner();
      this.onLoginRedirect();
    }).catch(err => console.log('err',err.message));

    
  }

  onLoginGoogle(): void{

    this.authService.loginGoogleUser()
    .then((res) => {
      console.log('resUser', res);
      this.spinner();
      this.onLoginRedirect();
    }).catch (err => console.log('err', err.message));
   
  }

  onLogout(){
    this.spinner();
    this.authService.logoutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['add-dulce']);
  }

  spinner(): void {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    },2000);
    
  }

}
