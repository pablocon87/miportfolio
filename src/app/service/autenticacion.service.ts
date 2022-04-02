import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {RouterModule, Routes,Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import{Task} from '../../Task';
import{Reg} from '../../Reg'
import {Usr} from '../../Usr'
import Swal from 'sweetalert2';
import {JwtHelperService,JWT_OPTIONS} from '@auth0/angular-jwt';
import { Location } from '@angular/common';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
  
})
export class AutenticacionService {
  id?:number;
  user:String="";
  password:String="";
  token:String="";
  expired?:number;
  conec?:number=0;
  auten?:number=1;
  timelim?:number=0;
  times:number=10600;
  rol?:number;
  fech?:Date;
  today = new Date();
  num:number=20;
  limite?:number;
  timdm:number=0;
  inter:any;
  tim:any;
  cl:any;
  cl2:any;
  showdanger:boolean=false;
  showsucces:boolean=false;
  numb?:number;
  tt= new Date();
  conta:number=0;
  pepito:boolean=false;
  //apiUrl = 'https://porfoarp.herokuapp.com';
  apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient,public router:Router,public _location:Location,private jwtHelper: JwtHelperService) { }
  
//** encriptador */
set(keys, value){
  var key = CryptoJS.enc.Utf8.parse(keys);
  var iv = CryptoJS.enc.Utf8.parse(keys);
  var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
  {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });

  return encrypted.toString();
}

//The get method is use for decrypt the value.
get(keys, value){
  var key = CryptoJS.enc.Utf8.parse(keys);
  var iv = CryptoJS.enc.Utf8.parse(keys);
  var decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
//**fin encript */
login(user: string, password: string){
    if(user==="" && password===""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tiene que iniciar seción!!',
        footer: ''
      })
      return;
    }
    
    const headers = { 'content-type': 'application/x-www-form-urlencoded'};
   
    
    const body = { 
     head: new HttpParams()
    .set('user', user)
    .set('password', password)
    };
    const params = new URLSearchParams()
    params.set('user', user)
    params.set('password',password)
    
  


    this.http.post(this.apiUrl + '/user',params,{headers})
    .subscribe((resp: any)=>{
     
      this.id=resp.id;
      
      localStorage.setItem('conec',resp.conec);
      localStorage.removeItem('id');
      var encrypted = this.set('123456$#@$^@1ERF', password);
      var decrypted = this.get('123456$#@$^@1ERF', encrypted);
     
      console.log('Encrypted :' + encrypted);
      console.log('Encrypted :' + decrypted);
  
      
      this.rol=resp.rol;
      localStorage.setItem('usr',user);
      
      localStorage.setItem('ids',resp.id);
      var titon=new Date();
      localStorage.setItem('data',titon.getMinutes()!.toString())
      localStorage.setItem('timeps','28');
      
      localStorage.setItem('passw',password);
      if(resp.token !=="nada"){
        localStorage.setItem('auth_token', resp.token);
        this.auten=1;
        localStorage.removeItem('conta');
        this.router.navigate(['/PortFolio']);
      }else{
        this.numb=parseInt(localStorage.getItem('conec')!);
        if(this.numb===1){
          localStorage.setItem('conta','4')
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ese Usuario esta Conectado!',
            footer: 'User On!'
          })
  
        }else{ 
          if (resp.auten>=3){
            this.auten=3;
            localStorage.setItem("conta",'4');
            this.logout();
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'contraseña invalida!',
              footer: 'Error!'
            })
           
          }else{
          
          if(localStorage.getItem('conta') === null){
            this.router.navigate(['/Inic']);
            this.auten=1;
            localStorage.setItem("conta",'1');
            this.valiD();
          
          }else{
          if(localStorage.getItem('conta') === '1'){
            this.auten=2;
            localStorage.setItem("conta",'2');
            this.valiD();
            
          }else{
          if(localStorage.getItem('conta') === '2'){
            this.auten=3;
            localStorage.setItem("conta",'3');
            this.valiD();
          

          }else{
            if(localStorage.getItem('conta') === '3'){
              this.auten=3;
              localStorage.setItem("conta",'4');
              this.valiD();
              
            }
          }          
        }
        }
          
        } 
            
            
      }
      
      
    }} )

  };
valiD(){
          this.logout();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'usuario o contraseña invalido!',
            footer: 'Registrarse!'
          })
}
tokenVal(){
    if (this.jwtHelper.isTokenExpired(localStorage.getItem('auth_token')!)) {
      clearInterval(this.inter);
      this.sesionEsp();
      this.conec=0;
      this.updat();
      this.tiempos();
    }
}

sesionEspi(){
    this.inter=  setInterval(() => {this.tokenVal();},10000)
}

sesionEsp(){
  this.tim =  setTimeout(() => {
        this.logout();
  
      },60000)
}
cerrSesi(){
    setTimeout(() => {
      this.logout();

    },90000)
}
 
clinT(){
    
      this.cl=  setInterval(() => {
       
       
       if(this.times===parseInt(localStorage.getItem('time')!)){
        this.times-=1;
        localStorage.setItem('time',this.times.toString());
       }else{
         this.times=parseInt(localStorage.getItem('time')!);
         this.times-=1;
          localStorage.setItem('time',this.times.toString());
      }
    
     if(localStorage.getItem('timedm') !==''){
      this.timdm=parseInt(localStorage.getItem('timedm')!);
      this.timdm-=1;
      localStorage.setItem('timedm',this.timdm.toString());
      if(parseInt(localStorage.getItem('timedm')!)===10003){
        clearInterval(this.cl);
        this.logout();
    }
  }
      if(parseInt(localStorage.getItem('time')!)<10000){
        clearInterval(this.cl);
        this.tiempos();
      }
     
     }, 1000);
}

clinT2(){
   
      this.cl2=  setInterval(() => {
       
       
       if(this.times===parseInt(localStorage.getItem('time')!)){
        this.times-=1;
        localStorage.setItem('time',this.times.toString());
       }else{
         this.times=parseInt(localStorage.getItem('time')!);
         this.times-=1;
          localStorage.setItem('time',this.times.toString());
      }
     if(localStorage.getItem('timedm') !==''){
      this.timdm=parseInt(localStorage.getItem('timedm')!);
      this.timdm-=1;
      localStorage.setItem('timedm',this.timdm.toString());
      if(parseInt(localStorage.getItem('timedm')!)===9890){
        this.logout();
    }
  }
      
    
     }, 1000);
  }

 tiempos(){
  
    Swal.fire({
      
     title: 'Extender secion',
     text: "La seción caduco,¿desea extenderla?",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si, extender!'
   }).then((result) => {
   
     if (result.isConfirmed) {
      
       clearTimeout(this.tim);
       if(localStorage.getItem('usr') !==null){
        this.conec=0;
        this.updat();
        this.login(localStorage.getItem('usr')!,localStorage.getItem('passw')!);
        return;
       }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Caduco La Secion!',
          footer: 'Ingresa nuevamente!'
        })
        return;
       }
       
     }
     
      clearTimeout(this.tim);
      
      this.conec=0;
      this.logout();
      
     
   })
}

updat(){
    if(localStorage.getItem('usr') !==null ){
   if(this.id!==null){
     
  
    this.id=parseInt(localStorage.getItem('ids')!);  
    this.user=localStorage.getItem('usr')!.toString();
    this.password=localStorage.getItem('passw')!.toString();
    this.token="";
    this.expired=0;
    this.conec;
    this.auten;
    this.timelim=0;
    this.getTasksUsr().subscribe((resp:any)=>{

      
          this.rol=resp.rol;
    
    })
    
     const {id,user,password,token,expired,conec,auten,timelim,rol}=this;
     const ModiFi={id,user,password,token,expired,conec,auten,timelim,rol};
     this.updateTaskUsr(ModiFi).subscribe(
      data => {
      
       
      },
      error => {
        
      alert("Se descuageringo todo"+ JSON.stringify(error));
      
      }
      );
    }
  }
}
   
logout(){
      this.updat();
      clearInterval(this.cl);
      this.conta=0;
      this.limite=0;
      localStorage.removeItem('data');
      localStorage.removeItem('timedm');
      localStorage.removeItem('time');
      localStorage.removeItem('usr');
      localStorage.removeItem('passw');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('tip');
      localStorage.removeItem('ids');
      localStorage.removeItem('timeps');
      this.router.navigate(['']);

}


public get logIn(): boolean {
    return (localStorage.getItem('auth_token')!==null);

}

getTasks():Observable<Task[]>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!
        }
       )
    }
    
      
    return this.http.get<Task[]> (this.apiUrl+'/personas/traer',httpOptions)
    
}

getTasksUsr():Observable<Usr>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!
        }
       )
    
    }
    
    const body={title: 'Angular POST Request Example'};
    const url = `${this.apiUrl}/user/traer/${localStorage.getItem('usr')}`;
    return this.http.put<Usr>(url,body,httpOptions);
    
    
}

deleteTask(task:Task):  Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);

}

updateTaskReminder(task:Task): Observable<Task>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!
        }
       )
    }
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.put<Task>(url, task, httpOptions);
}

updateTask(task:Task): Observable<Task>{
  const option ={
    headers: new HttpHeaders(
      {
      
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('auth_token')!
      })
  };
  const body={title: 'Angular POST Request Example'};
  const url = `${this.apiUrl}/personas/editar/${task.id}`;
  return this.http.put<Task>(url+'?acerca_de='+task.acerca_de
  +'&nombre='+task.nombre
  +'&apellido='+task.apellido
  +'&domicilio='+task.domicilio
  +'&fechanac='+task.fechanac
  +'&telefono='+task.telefono
  +'&correo='+task.correo
  +'&sobre_mi='+task.sobre_mi
  +'&url_foto='+task.url_foto
  +'&facebook='+task.facebook
  +'&twiter='+task.twiter
  +'&instagram='+task.instagram
  +'&infcont='+task.infcont
  , body, option);
}

updateTaskUsr(task:Usr): Observable<Usr>{
  const option ={
    headers: new HttpHeaders(
      {
      
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('auth_token')!
      })
  };
  const body={title: 'Angular POST Request Example'};
  const url = `${this.apiUrl}/user/editar/${task.id}`;
  return this.http.put<Usr>(url+'?user='+task.user
  +'&password='+task.password
  +'&token='+task.token
  +'&expired='+task.expired
  +'&conec='+task.conec
  +'&auten='+task.auten
  +'&timelim='+task.timelim!.toString()
  +'&rol='+task.rol

  , body);
}
addTask(task:Task): Observable<Task>{
  const httpOptions = {

    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('auth_token')!
      }
     )
  
  }
  return this.http.post<Task>(this.apiUrl, task, httpOptions);

}

addTaskReg(reg:Reg): Observable<Reg>{
  const httpOptions = {

    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('auth_token')!
      }
     )
  
  }
  return this.http.post<Reg>(this.apiUrl+'/user/crear', reg);

}

addmiSwet(){
  Swal.fire(
    'Buen Trabajo!',
    'Te Registraste!',
    'success'
  )
}

addmiSwetER(){
  Swal.fire(
    'Sorry!',
    'Ese email ya se encuentra Registrado!',
    'error'
  )
}

addmiSwetTasm(){
  Swal.fire(
    'Muy Bien!',
    'Se Modifico Correctamente!',
    'success'
  )

}

addmiSwetTasadd(){
  Swal.fire(
    'Muy Bien!',
    'Se Agrego Correctamente!',
    'success'
  )
}

addmiSwetTasbor(){
  Swal.fire(
    'Muy Bien!',
    'Se borro Correctamente!',
    'success'
  )
}

addmiSwetERadd(){

  Swal.fire(
    'Info!',
    'No tiene que dejar campos en 0 !',
    'error'
  )
}

addRol(){
  Swal.fire(
    'Aviso!',
    'Solo El Administrador Puede Realizar Cambios!',
    'warning'
  )
}
}
