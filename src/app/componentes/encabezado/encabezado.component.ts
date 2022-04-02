import { AfterViewInit, Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {faTimes,faEdit,faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import {Task} from '../../../Task'
import { Usr } from 'src/Usr';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {JwtHelperService,JWT_OPTIONS} from '@auth0/angular-jwt';
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
  styleUrls: ['./encabezado.component.css'],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
]
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
  faDoorClosed=faDoorClosed;
  color:String="green";
    tasks:Task[]=[];
    id?:number;
    feca?:Date|'dd-mm-yyyy';
    clin:any;
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
     infcont:String="";
     limite?:number=0;
     tin?:number=0;
     inter:any;
     rol?:number;
     users:Usr[]=[];
  constructor(public t:AutenticacionService,public http:HttpClient,private jwtHelper: JwtHelperService,private elementRef:ElementRef) {
   
    //addEventListener('beforeunload', this.onClicka.bind(this));
   }
 
   tiempo(){
    console.log("segundos!!"+" "+this.fechaHora.getSeconds())
    if(this.fechaHora.getSeconds()>600000){
          
          this.t.logout();
    }
  }
  
  tokenVal(){
    if (this.jwtHelper.isTokenExpired(localStorage.getItem('auth_token')!)) {
      clearInterval(this.inter);
      this.t.tiempos();
    } else {
      console.log("el token es valido")
    }
  }
  sesionEsp(){
    this.inter=  setInterval(() => {this.tokenVal();},10000)
  }
  
  ngOnInit(): void {
   
    clearInterval(this.t.inter);
    this.t.sesionEspi();
    
    this.tin=0;
   
   
      this.t.getTasks().subscribe((resp: any)=>{
             this.tasks=resp;
         for(let taso of this.tasks){
             localStorage.setItem("id",taso.id!.toString())
        }
        console.log("PUT Request is successful ", resp);
        
      } )
      this.t.getTasksUsr().subscribe((resp: any)=>{
        resp;
        
         
            this.rol=resp.rol;
            this.t.rol=resp.rol;
        

   
 } )
   
    this.faEdit;
    
  }
AfterViewInit() {
    this.elementRef.nativeElement.querySelector('pepe')
                                  .addEventListener(HTMLElement,'click', this.onClicka.bind(this));
}
onClicka(event) {
    
    this.t.conec=0;
    this.t.logout();
    console.log("pepe");
    return;
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
      (<HTMLInputElement>document.getElementById("infcont")).value = task.infcont.toString();
      
    }

onSubmit(){
    if((<HTMLInputElement>document.getElementById("valore")).value === "Guardar Cambios"){
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
    this.infcont=(<HTMLInputElement>document.getElementById("infcont")).value;
   

        const {id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de,facebook,twiter,instagram,infcont}=this;
        const modiFi={id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de,facebook,twiter,instagram,infcont};
     
    
        
       
  
      if(this.nombre===""){
        alert ("vacio");
        return;
      }
 
        this.t.updateTask(modiFi).subscribe(
          data => {
            this.ngOnInit();
            this.t.addmiSwetTasm();
          console.log("PUT Request is successful ", data);
          },
          error => {
          console.log("Rrror", error);
          }
          );
    
               
      
      
      }else{
        alert("no anda")
        this.color='green';
      }
      
}

onClick(task:Task){
      if(this.rol===0){
        Swal.fire(
          'Aviso!',
          'Solo El Administrador Puede Editar!',
          'warning'
        )
        return;
      }
      this.moDific(task);
    
}

onClicks(){
        if (this.color==='green'){
          this.color="red";
     
         }else{this.color="green";
        
       }
       this.ngOnInit()
}

}
