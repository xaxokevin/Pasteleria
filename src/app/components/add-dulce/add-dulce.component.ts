import {NgxSpinnerService} from 'ngx-spinner';
import { DulceInterface } from './../../models/dulce.Interface';
import { DulceService } from './../../services/dulce.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms/src/directives/ng_form';
import { SwalComponent } from '@toverux/ngx-sweetalert2';



@Component({
  selector: 'app-add-dulce',
  templateUrl: './add-dulce.component.html',
  styleUrls: ['./add-dulce.component.scss']
})
export class AddDulceComponent implements OnInit {
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  dulce: DulceInterface = {

     
    nombre: '',
    sabor: '',
    ingredientes: '',
    receta: '',
    precio: ''

  };

  constructor(private dulceService: DulceService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
  }

  onGuardarDulce(myForm: NgForm){
    if(myForm.valid == true){

   this.dulceService.addDulce(this.dulce);
   myForm.resetForm();
   this.spinner();
    }else{
      console.log('Algun campo del formulario esta mal');
      
      
    }

  }

  spinner(): void {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    },2000);
    
  }

  

 

  


}
