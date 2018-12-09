import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public email: string = '';
  public pass: string = '';

  ngOnInit() {
  }

  onAddUser(){
    this.authService.registerUser(this.email,this.pass)
    .then((res)=> {
      this.router.navigate(['add-dulce']);
    }).catch(err => console.log('err', err.message));
  }

}
