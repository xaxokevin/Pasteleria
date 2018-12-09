import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean=false;

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser(email: string, pass: string){
    return new Promise ((resolve,reject)=>{
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    })
  }

  loginEmailUser(email: string, pass: string){

    return new Promise((resolve,reject) => {

      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }

  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    
  }

  logoutUser(){

    this.afsAuth.auth.signOut();
  }
  
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  

}
