import { Component, OnInit } from '@angular/core';
import {faTimes,faEdit} from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import {Task} from '../../../Task'
import {Usr} from '../../../Usr'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  faEdit=faEdit;
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
   infcont:String="";
   rol?:number;
   users:Usr[] = [];
  constructor(public t:AutenticacionService) { }

ngOnInit(): void {
    this.t.getTasks().subscribe((taskss)=>[
      this.tasks=taskss
     
      
    ]);
    this.t.getTasksUsr().subscribe((resp:any)=>{
     
     
        this.rol=resp.rol;
      
      
    })
     
}

moDific(task: Task){
    if(this.rol===0 || this.rol===2){
      Swal.fire(
        'Aviso!',
        'Solo El Administrador Puede Editar!',
        'warning'
      )
      return;
    }
    this.id=task.id;
    this.nombre=task.nombre;
    this.apellido=task.apellido;
    this.url_foto=task.url_foto;
    this.fechanac=task.fechanac;
    this.domicilio=task.domicilio;
    this.sobre_mi=task.sobre_mi;
    this.telefono=task.telefono;
    this.correo=task.correo;
    this.facebook=task.facebook;
    this.twiter=task.twiter;
    this.instagram=task.instagram;
    this.infcont=task.infcont;
    (<HTMLInputElement>document.getElementById("acerca_de")).value = task.acerca_de.toString();

}

onSubmit(){

    this.acerca_de= (<HTMLInputElement>document.getElementById("acerca_de")).value ;
    const {id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de,facebook,twiter,instagram,infcont}=this;
        const modiFi={id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de,facebook,twiter,instagram,infcont};
    this.t.updateTask(modiFi).subscribe(
      data => {
        this.ngOnInit();
        this.t.addmiSwetTasm();
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.ngOnInit();
      console.log("Rrror", error);
      }
      );
  }
}
