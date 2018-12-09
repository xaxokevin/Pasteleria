import { DulceService } from './../../services/dulce.service';
import { DulceInterface } from './../../models/dulce.Interface';
import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';



@Component({
  selector: 'app-dulce',
  templateUrl: './dulce.component.html',
  styleUrls: ['./dulce.component.scss']
})
export class DulceComponent implements OnInit {

  dulces: DulceInterface[];
  editState: boolean = false;
  dulceToEdit: DulceInterface;
  constructor(private dulceService: DulceService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.dulceService.getDulces().subscribe(dulces =>{
      this.dulces = dulces;
    })
  }

  editDulce(event, dulce: DulceInterface){
    this.editState = true;
    this.dulceToEdit = dulce;
  }

  onUpdateDulce(dulce: DulceInterface){
    this.dulceService.updateDulce(dulce);
    this.spinner();
    this.clearState();
  }

  deleteDulce(event, dulce: DulceInterface){
    this.dulceService.deleteDulce(dulce);
    this.spinner();
    this.clearState();

  }

  clearState(){
    this.editState= false;
    this.dulceToEdit = null;
  }

  spinner(): void {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    },2000);
    
  }

  
}
