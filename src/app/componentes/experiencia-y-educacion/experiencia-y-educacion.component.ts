import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {faTimes,faEdit,faPlus,faTrash} from '@fortawesome/free-solid-svg-icons';
import {Exp} from '../../../Exp';
import {Tipem} from '../../../Tipem';
import {Educ} from '../../../Educ'
import {Task} from '../../../Task'
import {ExperienciaService} from '../../service/experiencia.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  @Output() adds: EventEmitter <Exp>= new EventEmitter();
  @Output() onAddTask : EventEmitter <Exp>= new EventEmitter()
  @Output() btnClick = new EventEmitter();
 
@Input() color: string ="green"; 
status="";
faPlus=faPlus;
faEdit=faEdit;
faTrash=faTrash;
valor:string="";
id?:number;
show:boolean=false;
showadd:boolean=false;
nombreEmpresa:String="";
  estrabajoactual?:number;
    fechainicio?:Date;
    fechafin?:Date;
  descripcion:String="";
   persona_id?:number;
   tipo_empleo_id?:number;
   id_persona?:number=parseFloat(localStorage.getItem("id")!);
    principal:String="";
    segunda:String="";
    url_logo:String="";
    urlinst:String="";
    anoinic?:Date;
    anofin?:Date;
    titulo:String="";
exp:Exp[]=[];
  tipem:Tipem[]=[];
  edu:Educ[]=[];
  pers:Task[]=[];
  anio?:Date|'yyyy' ;
i?:number;
 myDates = new Date();
 years = this.myDates.getFullYear();
 personas_ids?:number;
 ii?:any;
 aa:any=[];
 io:any=[];
 tee:any[]=[];
 conta:number=0;
  constructor(public e:ExperienciaService,public per:AutenticacionService,public educ:EducacionService) { }

  ngOnInit(): void {
    type MyArrayType = Array<any>;
    for(var i = 1900; i < this.years+1; i++){
    
      const arr: MyArrayType = [
        "ida",i
        
    ];
    this.aa.push(arr);
    
    

     
      }
      for (this.tee of this.aa){
        
         
        for ( let ioa of this.tee){
          
            this.io.push(this.tee)
          
         }
        
  }
  
      //alert(JSON.stringify(this.ii))
    //console.log("ESTE THIS"+JSON.stringify(this.aa))
        
       
      this.Recarga();
   
  }
  OpRe(){
    let opt;
   
  }
  Recarga(){
    this.per.getTasks().subscribe(
      data => {
        this.pers=data;
        for(let l of this.pers ){
          this.persona_id=l.id;
          this.id_persona=l.id;
          this.personas_ids=l.id;
        }
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.exp;
      console.log("Rrror", error);
      }
      );
    this.e.getTasks().subscribe(
      data => {
        this.exp=data;
       
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.exp;
      console.log("Rrror", error);
      }
      );
    this.e.getTasksTip().subscribe((tip)=>[
     this.tipem= tip
  
    ]);
    this.educ.getTasks().subscribe(
      data => {
        this.edu=data;
     
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.exp;
      console.log("Rrror", error);
      }
      );
  }
  addExp(ex:Exp){
    this.persona_id=ex.persona_id;
    if (this.color==='green'){
      this.color="red";
    
     }else{this.color="green";
    
   }
  }
  Selec(){
    var myDate = new Date();
    var year = myDate.getFullYear();
    for( this.i = 1900; this.i < year+1; this.i++){
      document.write("<option></option>");
    // document.write('<option value="'+this.i+'">'+this.i+'</option>');
    }
  }
  onSubmit(){
    if((<HTMLInputElement>document.getElementById("Save")).value!=="Guardar"){
    if(  (<HTMLInputElement>document.getElementById("btncheck1")).checked===true){
      this.estrabajoactual=1;
    }
    this.persona_id;
    const {id,nombreEmpresa,estrabajoactual,fechainicio,fechafin,descripcion,persona_id,tipo_empleo_id}=this;
    const modiFi={id,nombreEmpresa,estrabajoactual,fechainicio,fechafin,descripcion,persona_id,tipo_empleo_id};
    let datas={ responseType: 'text'};
    
    this.e.addTask(modiFi).subscribe({
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
        this.ngOnInit();
         
      }
  });
  // this.e.addTask(modiFi).pipe(map(resp => console.log("VER"+" "+JSON.stringify(resp)) ))
    
  //   this.e.addTask(modiFi).subscribe({
  //     next:data =>  {
        
  //     },
  //     error: error => {
  //        const s={responseType:'text'};
  //         console.error('There was an error!'+ error.message);
  //     }
  // })
  }else{
    this.id;
    this.persona_id;
  this.nombreEmpresa=  (<HTMLInputElement>document.getElementById("nombreEmpresa")).value;
  var fini:any =  (<HTMLInputElement>document.getElementById("fechainicio")).value;
  this.fechainicio=fini;
   var fefin:any= (<HTMLInputElement>document.getElementById("fechafin")).value;
   this.fechafin=fefin;
   this.descripcion= (<HTMLInputElement>document.getElementById("descripcion")).value;
 // this.persona_id=    (<HTMLInputElement>document.getElementById("persona_id")).value;
let val =  (<HTMLInputElement>document.getElementById("tipo_empleo_id")).value;
    this.tipo_empleo_id=parseFloat(val);
    if( (<HTMLInputElement>document.getElementById("btncheck1")).checked===true){
      this.estrabajoactual=1;
    }else{this.estrabajoactual=0}
    this.persona_id;
    const {id,nombreEmpresa,estrabajoactual,fechainicio,fechafin,descripcion,persona_id,tipo_empleo_id}=this;
    const modiFi={id,nombreEmpresa,estrabajoactual,fechainicio,fechafin,descripcion,persona_id,tipo_empleo_id};
    this.e.updateTaskReminder(modiFi).subscribe(
      data => {
      
        this.ngOnInit();
      alert("Se Guardo correctamente "+ data);
      
      },
      error => {
        this.ngOnInit();
      alert("Se descuageringo todo"+ error);
     
      }
      );
      (<HTMLInputElement>document.getElementById("Save")).value!=="Guardar Cambios";
  }
  }
  onClicks(){
    
    if (this.color==='green'){
      this.color="red";
    
     }else{this.color="green";
     this.recarga();
     this.ngOnInit();
     this.valor="";
   }
  }
  pepito(velior:any){
    alert(velior)

  }
  Modif(exp:Exp,tipem:Tipem){
    //this.addExp();
    this.id=exp.id;
    this.tipo_empleo_id=tipem.id;
    this.persona_id=exp.persona_id;
   
    (<HTMLInputElement>document.getElementById("nombreEmpresa")).value=exp.nombreEmpresa.toString();
    (<HTMLInputElement>document.getElementById("fechainicio")).value=exp.fechainicio!.toString();
    (<HTMLInputElement>document.getElementById("fechafin")).value=exp.fechafin!.toString();
    (<HTMLInputElement>document.getElementById("descripcion")).value=exp.descripcion.toString();
    //(<HTMLInputElement>document.getElementById("persona_id")).value=localStorage.getItem("id")!.toString();
    (<HTMLInputElement>document.getElementById("tipo_empleo_id")).valueAsNumber!=tipem.id;
    (<HTMLInputElement>document.getElementById("btncheck1")).checked=exp.estrabajoactual===1;
    (<HTMLInputElement>document.getElementById("Save")).value = "Guardar";
  
  }
  Borrar(el:Exp){
    this.e.deleteTask(el).subscribe({
      next: resp => {
        let obj=JSON.parse(resp.toString());
        console.log("ESTE ES "+obj.text);
        this.ngOnInit();
          this.status = 'Delete successful';
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
          alert("Se Borro Correctamente")
        }
        this.ngOnInit();
      }
  });
    this.ngOnInit();
  }
  recarga(){
    (<HTMLInputElement>document.getElementById("nombreEmpresa")).value="";
    (<HTMLInputElement>document.getElementById("fechainicio")).value="";
    (<HTMLInputElement>document.getElementById("fechafin")).value="";
    (<HTMLInputElement>document.getElementById("descripcion")).value="";
    //(<HTMLInputElement>document.getElementById("persona_id")).value=localStorage.getItem("id")!.toString();
    (<HTMLInputElement>document.getElementById("tipo_empleo_id")).valueAsNumber!=1;
    (<HTMLInputElement>document.getElementById("btncheck1")).checked=false;
    (<HTMLInputElement>document.getElementById("Save")).value = "Guardar Cambios";

  }
  educCl(ed:Educ){
  
    // if(this.showadd===false){
      this.id=ed.id; 
      this.id_persona=ed.id_persona;
      this.showadd=true;  
      (<HTMLInputElement>document.getElementById("Sapves")).value="Modificar";
      (<HTMLInputElement>document.getElementById("urllogo")).value=ed.url_logo.toString();
    (<HTMLInputElement>document.getElementById("principal")).value=ed.principal.toString();
      (<HTMLInputElement>document.getElementById("segunda")).value=ed.segunda.toString();
       (<HTMLInputElement>document.getElementById("urlinst")).value=ed.urlinst.toString();
       (<HTMLInputElement>document.getElementById("anoinic")).value=ed.anoinic!.toString();
       (<HTMLInputElement>document.getElementById("anofin")).value=ed.anofin!.toString();
       (<HTMLInputElement>document.getElementById("titulo")).value=ed.titulo.toString();
      //this.id= parseFloat((<HTMLInputElement>document.getElementById("ided")).value);
      //((<HTMLInputElement>document.getElementById("ided")).value)=ed.id?;
      
       
  
  // }else{this.showadd=false;
  //   (<HTMLInputElement>document.getElementById("Sapve")).value="Guardar Cambios";
  // }
  }
  addEdu(){
    // if(this.showadd===false){
      (<HTMLInputElement>document.getElementById("urllogo")).value="";
      (<HTMLInputElement>document.getElementById("principal")).value="";
      (<HTMLInputElement>document.getElementById("segunda")).value="";
      (<HTMLInputElement>document.getElementById("urlinst")).value="";
      (<HTMLInputElement>document.getElementById("anoinic")).value="";
      (<HTMLInputElement>document.getElementById("anofin")).value="";
      (<HTMLInputElement>document.getElementById("titulo")).value="";
      (<HTMLInputElement>document.getElementById("Sapves")).value="Guardar Cambios";
      this.showadd=true;    
  // }else{this.showadd=false}
   }
  envEd(){
  if( (<HTMLInputElement>document.getElementById("Sapves")).value!=="Modificar"){
  if(this.principal==="" || this.segunda===""){
    alert("Debe llenar los campos al agregar");
    return;
  }
  
    const {principal,segunda,id_persona,url_logo,urlinst,anoinic,anofin,titulo,persona_id}=this;
    const modiFi={principal,segunda,id_persona,url_logo,urlinst,anoinic,anofin,titulo,persona_id}
    this.educ.addTask(modiFi).subscribe(
      data => {
        this.showadd=false;    
        this.ngOnInit();
      
      alert("Se Agrego Correctamente "+ data);
      },
      error => {
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
        this.ngOnInit();
      }
      );
      this.ngOnInit();
    }else{
      this.envEdm();
    }
    this.ngOnInit();
  }
  envEdm(){
   // alert(parseFloat((<HTMLInputElement>document.getElementById("ided")).value));
   this.url_logo= (<HTMLInputElement>document.getElementById("urllogo")).value;
     this.principal= (<HTMLInputElement>document.getElementById("principal")).value;
 this.segunda= (<HTMLInputElement>document.getElementById("segunda")).value;
 this.urlinst=(<HTMLInputElement>document.getElementById("urlinst")).value;
 var x:any=     (<HTMLInputElement>document.getElementById("anoinic")).value;
 this.anoinic=x;
   var xx:any=   (<HTMLInputElement>document.getElementById("anofin")).value;
   this.anofin=xx;   
   this.titulo=(<HTMLInputElement>document.getElementById("titulo")).value;
 //this.id=  parseFloat((<HTMLInputElement>document.getElementById("ided")).value);
//  alert(this.principal);
//  alert(this.segunda);
// alert(this.id);
// alert(this.id_persona)
// return;
  const {principal,segunda,id_persona,id,url_logo,urlinst,anoinic,anofin,titulo,persona_id}=this;
  const modiFi={principal,segunda,id_persona,id,url_logo,urlinst,anoinic,anofin,titulo,persona_id}
  if(this.principal==="" || this.segunda==="" || this.id===null){
    alert("Debe llenar los campos de la Modificacion");
    return;
  }
  this.educ.updateTaskReminder(modiFi).subscribe(
    data => {
      this.showadd=false;    
      this.ngOnInit();
    
    alert("Se Modifico Correctamente "+ data);
    },
    error => {
      this.showadd=false;    
      this.ngOnInit();
    alert("Se descuageringo todo"+ error);
    }
    );
    this.ngOnInit();

  }
  deleT(ed:Educ){
    this.educ.deleteTask(ed).subscribe(
      data => {
      
        this.showadd=false;    
        this.ngOnInit();
      alert("Se Modifico Correctamente "+ data);
      },
      error => {
        const myJSON = JSON.stringify(error);
        localStorage.setItem("testJSON", myJSON);
        let texts = localStorage.getItem("testJSON");
        let obj = JSON.parse(texts!);
        let ver =obj.error;
        console.log("andaaaaa "+ ver.text);
        if(ver.text==='Succes'){
          localStorage.setItem("testJSON", '');
          alert("Se Borro Correctamente")
        }
        this.ngOnInit();
      }
      );
     
  
    }
  
}
