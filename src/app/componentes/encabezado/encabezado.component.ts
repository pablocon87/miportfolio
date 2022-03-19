import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import {Task} from '../../../Task'
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import Swal from 'sweetalert2'
const httpOptions = {

  headers: new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'/*application/json application/x-www-form-urlencoded */
      
      
      /*"Access-Control-Allow-Origin": "http://localhost:4200",
      'Access-Control-Allow-Credentials': 'true',
      "Authorization": localStorage.getItem('auth_token')!*/
    }
  )

}
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  fechaHora = new Date();
  times:number=parseInt(localStorage.getItem('time')!);
  tutu:number =1500;
  cl:any ="";
  @Output() adds: EventEmitter <Task>= new EventEmitter();
  @Output() onAddTask : EventEmitter <Task>= new EventEmitter()
  @Output() btnClick = new EventEmitter();
  faEdit=faEdit;
  color:String="green";
    tasks:Task[]=[];
    id?:number;
    feca?:Date|'dd-mm-yyyy';
    
      nombre:String="";
      apellido:String="";
      domicilio:String="";
     fechanac?:Date|'dd-mm-yyyy';
     telefono:String="";
      correo:String="";
      sobre_mi:String="";
     url_foto:String="";
     acerca_de:String="";
     facebook:String="";
     twiter:String="";
     instagram:String="";
  constructor(public t:AutenticacionService,public http:HttpClient) {
  
   }
   tiempo(){
    console.log("segundos!!"+" "+this.fechaHora.getSeconds())
    if(this.fechaHora.getSeconds()>600000){
          
          this.t.logout();
    }
  }
  
  ngOnInit(): void {
    clearInterval(this.t.cl);
     setTimeout(() => {
         this.funca();
    
     },1000)
  //  if (this.tutu>this.times){
    
  // }
    // window.setInterval('tiempo()',10000);
  //   setTimeout(function(){ 
    
  //     console.log("Ready");
  // }, 1000);
    //  this.cl=  setInterval(() => {
       
       
    //    if(this.times===parseInt(localStorage.getItem('time')!)){
    //     this.times-=1;
    //     localStorage.setItem('time',this.times.toString());
    //    }else{
    //      this.times=parseInt(localStorage.getItem('time')!);
    //      this.times-=1;
    //       localStorage.setItem('time',this.times.toString());
    //   }
    //   console.log("este es el tiempo "+ " "+ localStorage.getItem('time') );
    //   if(parseInt(localStorage.getItem('time')!)<10000){
    //     clearInterval(this.cl);
    //     this.tiempos();
    //   }
    //   // setTimeout(() => {
    //   //   this.tiempos();
  
    //   // },parseInt(localStorage.getItem('time')!))
    //  }, 1000);
    // this.t.getTasks().subscribe(
    //   data => {
    //     this.tasks=data;
    //     for(let taso of this.tasks){
    //         localStorage.setItem("id",taso.id!.toString())
    //     }
    //   console.log("PUT Request is successful ", data);
    //   },
    //   error => {
    //     this.tasks;
    //   console.log("Rrror", error);
    //   }
    //   );
      this.t.getTasks().subscribe((resp: any)=>{
             this.tasks=resp;
         for(let taso of this.tasks){
             localStorage.setItem("id",taso.id!.toString())
        }
        console.log("PUT Request is successful ", resp);
        
      } )
   
    this.faEdit;
  }
  funca(){
    this.t.clinT();
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
    if (result.isConfirmed) {
      this.t.login(localStorage.getItem('usr')!,localStorage.getItem('passw')!);
    }else{
      this.t.logout();
    }
  })
    
    
  }
  moDific(task: Task){
     this.id=task.id;
     this.acerca_de=task.acerca_de; 
      //(<HTMLInputElement>document.getElementById("idsm")).value = this.id;
     (<HTMLInputElement>document.getElementById("nombre")).value=task.nombre.toString();
     (<HTMLInputElement>document.getElementById("apellido")).value = task.apellido.toString();
    (<HTMLInputElement>document.getElementById("url_foto")).value = task.url_foto.toString();
     (<HTMLInputElement>document.getElementById("fechanac")).value = task.fechanac!.toString();
       (<HTMLInputElement>document.getElementById("domicilio")).value = task.domicilio.toString();
     (<HTMLInputElement>document.getElementById("sobre_mi")).value = task.sobre_mi.toString();
      (<HTMLInputElement>document.getElementById("telefono")).value = task.telefono.toString();
    (<HTMLInputElement>document.getElementById("correo")).value = task.correo.toString();
    (<HTMLInputElement>document.getElementById("facebook")).value = task.facebook.toString();
    (<HTMLInputElement>document.getElementById("twiter")).value = task.twiter.toString();
    (<HTMLInputElement>document.getElementById("instagram")).value = task.instagram.toString();
      //(<HTMLInputElement>document.getElementById("valor")).value = "Modificar";
    }
    onSubmit(){
    if((<HTMLInputElement>document.getElementById("valor")).value === "Guardar Cambios"){
    this.nombre=    (<HTMLInputElement>document.getElementById("nombre")).value;
    this.apellido=  (<HTMLInputElement>document.getElementById("apellido")).value ;
    this.url_foto=(<HTMLInputElement>document.getElementById("url_foto")).value ;
    var x:any = (<HTMLInputElement>document.getElementById("fechanac")).value;
    this.fechanac = x;
    this.domicilio=   (<HTMLInputElement>document.getElementById("domicilio")).value ;
    this.sobre_mi= (<HTMLInputElement>document.getElementById("sobre_mi")).value ;
    this.telefono= (<HTMLInputElement>document.getElementById("telefono")).value;
    this.correo=(<HTMLInputElement>document.getElementById("correo")).value ;
    this.facebook=(<HTMLInputElement>document.getElementById("facebook")).value ;
    this.twiter=(<HTMLInputElement>document.getElementById("twiter")).value ;
    this.instagram=(<HTMLInputElement>document.getElementById("instagram")).value ;
    var formData = new FormData();
   
    formData.append("id", this.id!.toString());
  formData.append("nombre", this.nombre.toString());
  formData.append("apellido", this.apellido.toString());
  formData.append("url_foto", this.url_foto.toString());
  formData.append("fechanac", this.fechanac!.toString());
  formData.append("domicilio", this.domicilio.toString());
  formData.append("sobre_mi", this.sobre_mi.toString());
  formData.append("telefono", this.telefono.toString());
  formData.append("correo", this.correo.toString());

        const {id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de,facebook,twiter,instagram}=this;
        const modiFi={id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de,facebook,twiter,instagram};
        const body = new HttpParams()
        .set('nombre', nombre.toString())
        .set('apellido', apellido.toString())
        .set('url_foto', url_foto.toString())
        .set('fechanac', fechanac!.toString())
        .set('domicilio', domicilio.toString())
        .set('sobre_mi', sobre_mi.toString())
        .set('telefono', telefono.toString())
        .set('correo', correo.toString())

        ;
    
        
       
      //  let md =[modiFi];
      if(this.nombre===""){
        alert ("vacio");
        return;
      }
  /*    this.http.put('http://localhost:8080/personas/editar/'+this.id, body.toString(),httpOptions).subscribe(
        data => {
        console.log("PUT Request is successful ", data);
        },
        error => {
        console.log("Rrror", error);
        }
        );*/
        this.t.updateTask(modiFi).subscribe(
          data => {
            this.ngOnInit();
            alert('Se modifico Correctamente');
          console.log("PUT Request is successful ", data);
          },
          error => {
          console.log("Rrror", error);
          }
          );
    
                //this.addTask(d)
     
    
    //this.onAddTask.prototype._maxListeners = 100;
      
      
      }else{
        this.color='green';
      }
      
    }
    onClick(task:Task){
      this.moDific(task);
      // if (this.color==='green'){
      //      this.color="red";
      //      this.moDific(task);
      //     }else{this.color="green";
         
      //   }
      }
      onClicks(){
        if (this.color==='green'){
          this.color="red";
     
         }else{this.color="green";
        
       }
       this.ngOnInit()
      }
}
