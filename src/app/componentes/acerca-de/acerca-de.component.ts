import { Component, OnInit } from '@angular/core';
import {faTimes,faEdit} from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import {Task} from '../../../Task'
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
  constructor(public t:AutenticacionService) { }

  ngOnInit(): void {
    this.t.getTasks().subscribe((taskss)=>[
      this.tasks=taskss
     
      
    ]);
     
  }
  moDific(task: Task){
    this.id=task.id;
    this.nombre=task.nombre;
    this.apellido=task.apellido;
    this.url_foto=task.url_foto;
    this.fechanac=task.fechanac;
    this.domicilio=task.domicilio;
    this.sobre_mi=task.sobre_mi;
    this.telefono=task.telefono;
    this.correo=task.correo;
    
    (<HTMLInputElement>document.getElementById("acerca_de")).value = task.acerca_de.toString();

  }
  onSubmit(){

    this.acerca_de= (<HTMLInputElement>document.getElementById("acerca_de")).value ;
    const {id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de}=this;
        const modiFi={id,nombre,apellido,url_foto,fechanac,domicilio,sobre_mi,telefono,correo,acerca_de};
    this.t.updateTask(modiFi).subscribe(
      data => {
        this.ngOnInit();
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.ngOnInit();
      console.log("Rrror", error);
      }
      );
  }
}
