import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  pepin:boolean = false;
  email: string="";
  password: string="";
  pass:String="";
  coinc:String="";
  color:String="";
  id?:number;
  user:String="";
  passwords:String="";
  token:String="";
  expired?:number;
  users:String="";
    form:FormGroup;
  show:boolean=false;
constructor(private formBuilder:FormBuilder,public autenticacionService: AutenticacionService){
  this.form=this.formBuilder.group({
  email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.minLength(8)]],
users:['',[Validators.required,Validators.email]],
passwords:['',[Validators.required,Validators.minLength(8)]],
pass:['',[Validators.required,Validators.minLength(8)]]});
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
   get Users(){
    return this.form.get('users');
   }
   get Passwords() {
   
    return this.form.get('passwords');
  }
   get Pass(){
    this.coinc=    (<HTMLInputElement>document.getElementById("passwords")).value;
     if((<HTMLInputElement>document.getElementById("pass")).value.length>=8){
      if(this.coinc!== (<HTMLInputElement>document.getElementById("pass")).value){
        this.color="text-danger";
        (<HTMLInputElement>document.getElementById("error")).innerHTML="Las contraseñas no coinciden";
      }else{
        this.color="text-success";
        (<HTMLInputElement>document.getElementById("error")).innerHTML="Las contraseñas coinciden";
      }
     }
    
    
     return this.form.get('pass')
   }
 
   onEnviar(event:Event){
     event.preventDefault;
     if (this.Email?.hasError('email')){
      Swal.fire({
        icon: 'error',
        title: 'Email Incorrecto',
        text: 'Debe colocar un email valido',
        footer: ''
      })
      return;
     }
     if (this.form.get('password')!.value.length < 8){
      Swal.fire({
        icon: 'error',
        title: 'Contraseña',
        text: 'La contraseña debe tener 8 caracteres',
        footer: ''
      })
      return;
     }
     this.autenticacionService.login(this.form.get('email')!.value, this.form.get('password')!.value);

   }
clickMe(tr:boolean){
 // this.clickMet();
  this.show=tr;
}
   onReg(event:Event){
    event.preventDefault;
    if (this.Users?.hasError('email')){
      Swal.fire({
        icon: 'error',
        title: 'Email Incorrecto',
        text: 'Debe colocar un email valido',
        footer: ''
      })
      return;
     }
     if (this.form.get('passwords')!.value.length < 8){
      Swal.fire({
        icon: 'error',
        title: 'Contraseña',
        text: 'La contraseña debe tener 8 caracteres',
        footer: ''
      })
      return;
     }
     this.user=this.form.get('users')!.value;
this.password=this.form.get('passwords')!.value;
    const {id,user,password,token,expired}=this
    const Registrar={id,user,password,token,expired}
     this.autenticacionService.addTaskReg(Registrar).subscribe({
      next: resp => {
        const myJSON = JSON.stringify(resp);
        localStorage.setItem("testJSON", myJSON);
        let texts = localStorage.getItem("testJSON");
        let obj = JSON.parse(texts!);
        let ver =obj.error;
        console.log("Se Cargo "+ ver.text);
        this.ngOnInit();
      },
      error: error => {
        const myJSON = JSON.stringify(error);
        localStorage.setItem("testJSON", myJSON);
        let texts = localStorage.getItem("testJSON");
        let obj = JSON.parse(texts!);
        let ver =obj.error;
        console.log("andaaaaa "+ ver.text);
        if(ver.text==='Succes'){
          localStorage.setItem("testJSON", '');
          alert("Se Agrego Correctamente")
        }
        if(ver.text==="nSucces"){
          localStorage.setItem("testJSON", '');
          alert("Ese email ya se encuentra registrado");
        }
        ;
      }
    });
   }
   clickMet(){
    (<HTMLInputElement>document.getElementById("email")).value="";
    (<HTMLInputElement>document.getElementById("password")).value="";
   }
}
