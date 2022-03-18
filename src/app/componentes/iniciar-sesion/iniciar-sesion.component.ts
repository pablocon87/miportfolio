import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  pepin:boolean = false;
  email: string="";
  password: string="";
form:FormGroup;
constructor(private formBuilder:FormBuilder,public autenticacionService: AutenticacionService){
  this.form=this.formBuilder.group({
  email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.minLength(8)]]});
}

  ngOnInit(): void {
    if(localStorage.getItem('pepito')==='false'){
      this.pepin=this.autenticacionService.pepito=false;
   
    }
    if(localStorage.getItem('pepito') ==='true'){
      this.pepin=this.autenticacionService.pepito=true;
      }
  }
  get Email() {
    return this.form.get('email');
   }
   get Password() {
   
     return this.form.get('password');
   }
   onEnviar(event:Event){
     event.preventDefault;
     
     this.autenticacionService.login(this.form.get('email')!.value, this.form.get('password')!.value);

   }
}
