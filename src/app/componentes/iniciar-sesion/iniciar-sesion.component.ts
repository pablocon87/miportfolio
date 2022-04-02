import { TryCatchStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
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
  conec?:number;
  auten?:number;
  cuenta?:number;
  timelim?:number;
  rol?:number;
  users:String="";
    form:FormGroup;
  show:boolean=false;
  showsucces=false;
  showdanger=false;
  a:String="";
  b:String="";
  c:String="";
  d:String="";
  e:String="";
  code:String="";
  why:String="";
constructor(private formBuilder:FormBuilder,public autenticacionService: AutenticacionService){
  this.form=this.formBuilder.group({
  email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.minLength(8)]],
users:['',[Validators.required,Validators.email]],
passwords:['',[Validators.required,Validators.minLength(8)]],
pass:['',[Validators.required,Validators.minLength(8)]]});
}

  ngOnInit(): void {
    if(localStorage.getItem('timelim') ===null){
      this.show=true;

    }
   
    this.why = "";
    this.a = Math.ceil(Math.random() * 9)+ '';
     this.b = Math.ceil(Math.random() * 9)+ '';
     this.c = Math.ceil(Math.random() * 9)+ '';
     this.d = Math.ceil(Math.random() * 9)+ '';
     this.e = Math.ceil(Math.random() * 9)+ '';
    
     this.code = this.a +""+ this.b+"" + this.c+"" + this.d+"" + this.e;
    (<HTMLInputElement>document.getElementById("txtCaptcha")).value = this.code.toString();
    (<HTMLInputElement>document.getElementById("CaptchaDiv")).innerHTML = this.code.toString();
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
     
     this.validF();
     this.autenticacionService.login(this.form.get('email')!.value, this.form.get('password')!.value);
     setTimeout(() => {
      this.validF();
    },2000)
     
   }
   validF(){
    if(localStorage.getItem("conta")==='1'){
      this.cuenta=1; 
      this.showdanger=true
      
     }
     if(localStorage.getItem("conta")==='2'){
      this.cuenta=2; 
      this.showdanger=true
 
     }
     if(localStorage.getItem("conta")==='3'){
      this.cuenta=3; 
      this.showdanger=true
      
     }
     if(localStorage.getItem("conta")==='4'){
       this.why='';
       this.ngOnInit();
       this.showdanger=false;
      this.cuenta=4; 
      this.show=false;
      return;
     }
   }
clickMe(tr:boolean){

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
     this.conec=0;
     this.auten=1
     this.timelim=0;
     this.rol=0;
     const {id,user,password,token,expired,conec,auten,timelim,rol}=this
     const Registrar={id,user,password,token,expired,conec,auten,timelim,rol}
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
          this.autenticacionService.addmiSwet();
        }
        if(ver.text==="nSucces"){
          localStorage.setItem("testJSON", '');
          this.autenticacionService.addmiSwetER();
        }
        ;
      }
    });
}

clickMet(){
    (<HTMLInputElement>document.getElementById("email")).value="";
    (<HTMLInputElement>document.getElementById("password")).value="";
}

checkform(){
    
    
    if((<HTMLInputElement>document.getElementById('CaptchaInput'))!.value == ""){
    this.why += "- Please Enter CAPTCHA Code.\n";
    console.log(this.why);
    }
    if((<HTMLInputElement>document.getElementById('CaptchaInput'))!.value != ""){
    if(this.ValidCaptcha() == false){
    this.why += "- The CAPTCHA Code Does Not Match.\n";
    console.log(this.why);
    }
    }
    if(this.why != ""){
    this.why;
    return false;
    }
    return true;
}
    
   
    
ValidCaptcha(){
    var str1 = this.removeSpaces((<HTMLInputElement>document.getElementById('txtCaptcha')).value);
    var str2 = this.removeSpaces((<HTMLInputElement>document.getElementById('CaptchaInput')).value);
    if (str1 == str2){
      this.showSucces();
      this.showsucces=true;
    return true;
    }else{
      this.showDanger();
      this.showdanger=true;
    return false;
    }
    }
    
    
removeSpaces(string){
    return string.split(' ').join('');
}

showDanger(){
  setTimeout(() => {
    this.showdanger=false;
   
  },5000)
}

showSucces(){
    setTimeout(() => {
      localStorage.removeItem('conta')
      this.showsucces=false;
      this.show=true;
    },5000)
  }
}
