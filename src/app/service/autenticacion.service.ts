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
  apiUrl = 'https://porfoarp.herokuapp.com';
  //apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient,public router:Router,public _location:Location,private jwtHelper: JwtHelperService) { }
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
      this.id=resp.id;
      
      localStorage.setItem('conec',resp.conec);
      localStorage.removeItem('id');
     
      
      localStorage.setItem('auth_token', resp.token);
      localStorage.setItem('usr',user);
      
      localStorage.setItem('id',resp.id);
      var titon=new Date();
      localStorage.setItem('data',titon.getMinutes()!.toString())
      localStorage.setItem('timeps','28');
      
      localStorage.setItem('passw',password);
      if(resp.token.toString() !=="nada"){
       // alert(" TOKEN"+resp.token+""+"ids"+resp.id)
        //this.sesionEspi();
        this.auten=1;
        localStorage.removeItem('conta');
        this.router.navigate(['/PortFolio']);
      }else{
        this.numb=parseInt(localStorage.getItem('conec')!);
        console.log("este es num"+this.numb);
        console.log(JSON.stringify(resp));
        if(this.numb===1){
          this.logout();
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
            // localStorage.setItem('timelim',resp.timelim)
            // this.id=resp.id;    
            // this.user=resp.user
            // this.password=resp.password;
            // this.token="";
            // this.expired=0;
            // this.conec=0;
            // this.auten=1;
            // var titon=new Date();
            // this.timelim=titon.getMinutes();
            //  const {id,user,password,token,expired,conec,auten,timelim}=this;
            //  const ModiFi={id,user,password,token,expired,conec,auten,timelim};
            //  this.updateTaskUsr(ModiFi).subscribe(
            //   data => {
                
              
               
            //   },
            //   error => {
                
            //   alert("Se descuageringo todo"+ JSON.stringify(error));
              
            //   }
            //   );
            //   this.logout();
          }else{
          //alert(JSON.stringify(resp)+resp.conec);
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
          
        } //
            
            
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
      this.tiempos();
    }
  }
  sesionEspi(){
    this.inter=  setInterval(() => {this.tokenVal();},10000)
  }
  secc(){
    
    this.cl=  setInterval(() => {
      
      var fifi =new Date()
      fifi.getMinutes();
      //console.log("este es fifi "+" "+fifi);
      this.limite=0;
      this.limite=fifi.getMinutes()-parseInt(localStorage.getItem('data')!);

     
      // if(this.limite !== parseInt(localStorage.getItem('tip')!) ){
      //   localStorage.setItem('tip',this.limite?.toString());
      //   let t=parseInt(localStorage.getItem('timeps')!)-parseInt(localStorage.getItem('tip')!);
      // localStorage.setItem('timeps',t.toString());
      // }
      
      //console.log("este es Limite"+" "+ this.limite)
       if (this.limite>=parseInt(localStorage.getItem('timeps')!)){
         if(this.conta===0){
           clearInterval(this.cl);
           this.conta=2;
           localStorage.removeItem('tip');
           localStorage.setItem('timeps','29')
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
  this.tim =  setTimeout(() => {
        this.logout();
  
      },60000)
  }
  cerrSesi(){
    setTimeout(() => {
      this.logout();

    },90000)
  }
  // refresh(): void {
  //   this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
  //   console.log(decodeURI(this._location.path()));
  //   this.router.navigate([decodeURI(this._location.path())]);
  //   });
  // }
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
     text: "La seción caduco,¿desea extenderla?",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si, extender!'
   }).then((result) => {
    //localStorage.setItem('timedm','10100');
    //this.clinT2();
     if (result.isConfirmed) {
      this.updat();
       clearTimeout(this.tim);
       this.login(localStorage.getItem('usr')!,localStorage.getItem('passw')!);
     }else{
      clearTimeout(this.tim);
      this.logout();
      // localStorage.setItem('time','10100');
      // //localStorage.setItem('timedm','9999');
      // this.clinT();
     }
   })
  }
  updat(){
   if(this.id!==null){
     
  
    this.id;  
    this.user=localStorage.getItem('usr')!.toString();
    this.password=localStorage.getItem('passw')!.toString();
    this.token="";
    this.expired=0;
    this.conec=0;
    this.auten;
    this.timelim=0;
     const {id,user,password,token,expired,conec,auten,timelim}=this;
     const ModiFi={id,user,password,token,expired,conec,auten,timelim};
     this.updateTaskUsr(ModiFi).subscribe(
      data => {
      
       
      },
      error => {
        
      alert("Se descuageringo todo"+ JSON.stringify(error));
      
      }
      );
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

, body);
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
}
