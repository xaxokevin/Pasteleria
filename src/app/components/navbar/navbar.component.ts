import { getTestBed } from '@angular/core/testing';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean= false;


  constructor(private authService: AuthService) { }

  ngOnInit() {
   
    this.isCurrentUser();
    

  }


  isCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  onLogout(){
    this.authService.logoutUser();
  }

 
}
