import { NgxSpinnerModule} from 'ngx-spinner';
import { DulceService } from './services/dulce.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddDulceComponent } from './components/add-dulce/add-dulce.component';
import { Page404Component } from './components/page404/page404.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { DulceComponent } from './components/dulce/dulce.component';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AddDulceComponent,
    Page404Component,
    DulceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  }),
    
  ],
  providers: [AngularFireAuth
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
