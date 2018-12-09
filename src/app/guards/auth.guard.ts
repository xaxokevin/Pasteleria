import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isLogged: boolean = false;
 
  constructor(private authService: AuthService, private router: Router){}

  getUser(){
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
       
        this.isLogged = true;
      } else {
      
        this.isLogged = false;
      }
  
    });
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return this.authService.isAuth().pipe(map(
      user =>{
        if(user){
          return true;
        }else{
          return false;
        }
      }));
  
      }
  }

 
   
  

