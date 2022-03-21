import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {RouterModule, Routes,Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import{Task} from '../../Task';
import{Reg} from '../../Reg'
import Swal from 'sweetalert2';

import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  times:number=10600;
  fech?:Date;
  today = new Date();
  num:number=20;
  limite?:number;
  timdm:number=0;
  cl:any;
  cl2:any;
  tt= new Date();
  conta:number=0;
  pepito:boolean=false;
  apiUrl = 'http://localhost:7000';
  constructor(private http: HttpClient,public router:Router,public _location:Location) { }
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
   // const headers = { 'content-type': 'application/json'};
    
    const body = { 
     head: new HttpParams()
    .set('user', user)
    .set('password', password)
  };
  const params = new URLSearchParams()
  params.set('user', user)
  params.set('password',password)
  
  

  // const options = new RequestOptions({
  //   headers: this.getAuthorizedHeaders(),
  //   responseType: ResponseContentType.Json,
  //   params: params,
  //   withCredentials: false
  // });
    this.http.post(this.apiUrl + '/user',params,{headers})
    .subscribe((resp: any)=>{
      //this.clinT();
      //this.sesionEsp();
      
      this.limite=0;
    
      localStorage.setItem('auth_token', resp.token);
      localStorage.setItem('usr',user);
      localStorage.removeItem('id');
      var titon=new Date();
      localStorage.setItem('data',titon.getMinutes()!.toString())
      localStorage.setItem('timeps','5');
      
      localStorage.setItem('passw',password);
      if(resp.token !==null){
        this.secc();
        this.router.navigate(['/PortFolio']);
      }else{
        this.logout();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'usuario o contraseña invalido!',
          footer: 'Registrarse!'
        })
      }
      
      
    } )

  };
  secc(){
    
    this.cl=  setInterval(() => {
      
      var fifi =new Date()
      fifi.getMinutes();
      console.log("este es fifi "+" "+fifi);
      this.limite=0;
      this.limite=fifi.getMinutes()-parseInt(localStorage.getItem('data')!);

     
      // if(this.limite !== parseInt(localStorage.getItem('tip')!) ){
      //   localStorage.setItem('tip',this.limite?.toString());
      //   let t=parseInt(localStorage.getItem('timeps')!)-parseInt(localStorage.getItem('tip')!);
      // localStorage.setItem('timeps',t.toString());
      // }
      
      console.log("este es Limite"+" "+ this.limite)
       if (this.limite>=parseInt(localStorage.getItem('timeps')!)){
         if(this.conta===0){
           clearInterval(this.cl);
           this.conta=2;
           localStorage.removeItem('tip');
           localStorage.setItem('timeps','6')
           this.secc();
          this.tiempos();
         }else{
          if(this.conta===2){
            this.logout();
          }
          if(this.conta===1){
            this.logout();
          }
         }
         
          
          //this.logout();
       }
    }, 1000);
  }
  sesionEsp(){
    setTimeout(() => {
        this.tiempos();
  
      },500000)
  }
  cerrSesi(){
    setTimeout(() => {
      this.logout();

    },90000)
  }
  refresh(): void {
    this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
    console.log(decodeURI(this._location.path()));
    this.router.navigate([decodeURI(this._location.path())]);
    });
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
     // console.log("este es el tiempo "+ " "+ localStorage.getItem('time') );
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
      // setTimeout(() => {
      //   this.tiempos();
  
      // },600000)
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
     // console.log("este es el tiempo "+ " "+ localStorage.getItem('time') );
     if(localStorage.getItem('timedm') !==''){
      this.timdm=parseInt(localStorage.getItem('timedm')!);
      this.timdm-=1;
      localStorage.setItem('timedm',this.timdm.toString());
      if(parseInt(localStorage.getItem('timedm')!)===9890){
        this.logout();
    }
  }
      
      // setTimeout(() => {
      //   this.tiempos();
  
      // },600000)
     }, 1000);
  }
  tiempos(){
    Swal.fire({
      
     title: 'Extender secion',
     text: "La secion esta por caducar,¿desea extenderla?",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si, extender!'
   }).then((result) => {
    //localStorage.setItem('timedm','10100');
    //this.clinT2();
     if (result.isConfirmed) {
       clearInterval(this.cl);
       this.limite=0;
      
       localStorage.removeItem('data');
       this.secc;
       
       this.login(localStorage.getItem('usr')!,localStorage.getItem('passw')!);
     }else{
      clearInterval(this.cl);
      this.conta=1;
      localStorage.setItem('timeps','6')
      this.secc();
      // localStorage.setItem('time','10100');
      // //localStorage.setItem('timedm','9999');
      // this.clinT();
     }
   })
  }
   logout(){
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
    localStorage.removeItem('timeps');
    this.router.navigate(['/Inic']);

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
       )//,
      //    head: new HttpParams()
      //    .set('Content-Type', 'application/json')
    
    }
    /*const tasks =of(TASKS);
    return tasks;*/
      
    return this.http.get<Task[]> (this.apiUrl+'/personas/traer',httpOptions)
    
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
       )//,
      //    head: new HttpParams()
      //    .set('Content-Type', 'application/json')
    
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
addTask(task:Task): Observable<Task>{
  const httpOptions = {

    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('auth_token')!
      }
     )//,
    //    head: new HttpParams()
    //    .set('Content-Type', 'application/json')
  
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
     )//,
    //    head: new HttpParams()
    //    .set('Content-Type', 'application/json')
  
  }
  return this.http.post<Reg>(this.apiUrl+'/user/crear', reg);

}
}
