import { AfterViewInit,QueryList,Injectable,Component, OnInit,Renderer2,RendererFactory2,ElementRef,Directive,Input,ViewChildren } from '@angular/core';
import * as CanvasJSs from '../../../../canvasjs.min';
import {ConocimientoService} from '../../service/conocimiento.service';
import {AutenticacionService} from '../../service/autenticacion.service';
import {EducacionService} from '../../service/educacion.service'
import {ExperienciaService} from '../../service/experiencia.service'

import {Cnc} from '../../../Cnc';
import {Usr} from '../../../Usr'
import {faTimes,faEdit,faPlus,faTrash} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ConocimientoComponent implements OnInit,AfterViewInit {
  
  @Directive({
    selector: 'input[id]',
  })
  @Input() id?: number;
  @Input() name?: string;
@ViewChildren(ConocimientoComponent) els!: QueryList<ConocimientoComponent>;
  sobre:String="";
  de:String="";
  saber?:number=0;
  persona_id?:number;
  showall:boolean=false;
  showallin:boolean=false;
  form?:FormGroup;
  conoc:Cnc[]=[];
  conoc2:any[]=[];
  faPlus=faPlus;
  faTrash=faTrash;
  faEdit=faEdit;
 conta:number=0;
 cont:number=0;
 concat:String="";
 adjunt:String="";
 users:Usr[]=[];
 rol?:number;
  rendererFactory?:RendererFactory2;
  recaptchaContainer:any="";
  recaptchaContainerc:any="";
  recaptchaContainersrut:any="";
  recaptchaContainersru="";
  recaptchaContainersry="";
  recaptchaContainersr="";
  recaptchaContainers:any="";
  recaptchaContainertss="";
  recaptchaContainera="";
  recaptchaContainertst="";
  recaptchaContainerts="";
  recaptchaContainert="";
  tech=[];
  
  
  StylesCss(cono:Cnc[]=[]){

    for(let me of cono){
    const divel = document.createElement('div').setAttribute("style","background-color:#E64C65;transform:nonerotate(144deg);")
                                                
  }
   
   }
  
  constructor(public c:ConocimientoService,public per:AutenticacionService,private renderer: Renderer2,ref: ElementRef<HTMLDivElement>,public e:ExperienciaService) {
   
    this.cc = ref.nativeElement;
   }
   @ViewChildren("elReference") elReference!: QueryList<ElementRef>;
   cc:HTMLDivElement;
  
   
   toDo(cf:Cnc){
    
     this.conta+=1;
     //(<HTMLInputElement>document.getElementById("cot"+this.conta+"")).innerHTML="";
     this.recaptchaContainerc = this.renderer.createElement('div');
     // Set the id of the div
     this.renderer.setProperty(this.recaptchaContainerc, 'id', 'cot'+this.conta+'');
     this.renderer.setAttribute(this.recaptchaContainerc, 'class','col-sm-6');
     //this.renderer.setAttribute(recaptchaContainer,'style','background-color: #E64C65;transform: rotate('+result+'deg);!important')
     // Append the created div to the body element
     this.renderer.appendChild(document.getElementById('pic'), this.recaptchaContainerc);
      
      
  
    /*********** */
     this.recaptchaContainer = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(this.recaptchaContainer, 'id', 'todo'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainer, 'class','donut-chart-block block col-sm-4');
    //this.renderer.setAttribute(recaptchaContainer,'style','background-color: #E64C65;transform: rotate('+result+'deg);!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('cot'+this.conta+''), this.recaptchaContainer);
   
     
   
    /************************************************************************************************ */
    this.recaptchaContainert = this.renderer.createElement('h2');
    // Set the id of the div
    this.renderer.setProperty(this.recaptchaContainert, 'id', 'seg'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainert, 'class','titular');
    //this.renderer.setAttribute(recaptchaContainer,'style','background-color: #E64C65;transform: rotate('+result+'deg);!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('todo'+this.conta+''), this.recaptchaContainert);
/******************* */
this.recaptchaContainerts = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(this.recaptchaContainerts, 'id', 'ter'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainerts, 'class','donut-chart');
    //this.renderer.setAttribute(recaptchaContainer,'style','background-color: #E64C65;transform: rotate('+result+'deg);!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('seg'+this.conta+''), this.recaptchaContainerts);

    /***************************** */
    this.recaptchaContainertst = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(this.recaptchaContainertst, 'id', 'porsion1'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainertst, 'class','recorte row');
    this.renderer.setAttribute(this.recaptchaContainertst,'style','border-radius: 50%;clip: rect(0px, 200px, 200px, 100px);height: 100%;position: absolute;width: 100%;important;')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('ter'+this.conta+''), this.recaptchaContainertst);
  
   /***** */
   this.recaptchaContainera = this.renderer.createElement('div');
   // Set the id of the div
   var result=(cf.saber!*360)/100;
   this.renderer.setProperty(this.recaptchaContainera, 'id', 'deios'+this.conta+'');
   this.renderer.setAttribute(this.recaptchaContainera, 'class','quesito ios col-sm-4');
   this.renderer.setAttribute(this.recaptchaContainera,'style','background-color: #E64C65;transform: rotate('+result+'deg);!important;')
   // Append the created div to the body element
   this.renderer.appendChild(document.getElementById('porsion1'+this.conta+''), this.recaptchaContainera);
   
   
   
    /********************************* */
    this.recaptchaContainertss = this.renderer.createElement('p');
    // Set the id of the div
    this.renderer.setProperty(this.recaptchaContainertss, 'id', 'centro'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainertss, 'class','center-date row');
    //this.renderer.setAttribute(recaptchaContainer,'style','background-color: #E64C65;transform: rotate('+result+'deg);!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('ter'+this.conta+''), this.recaptchaContainertss);

    /************* */
    this.recaptchaContainers = this.renderer.createElement('div');
    // Set the id of the div
    //alert(coni.de);
    this.recaptchaContainers.innerHTML=cf.de;
    
    this.renderer.setProperty(this.recaptchaContainers, 'id', 'sp'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainers, 'class','scnd-font-color col-sm-4');
    this.renderer.setAttribute(this.recaptchaContainers,'style',' color: #9099b7;!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('centro'+this.conta+''), this.recaptchaContainers);
    
    /*********************** */
    this.recaptchaContainersr = this.renderer.createElement('ul');
    // Set the id of the div
    //recaptchaContainers.innerHTML=conocs.de;
    this.renderer.setProperty(this.recaptchaContainersr, 'id', 'del'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainersr, 'class','os-percentages horizontal-list');
    //this.renderer.setAttribute(recaptchaContainersr,'style',' color: #9099b7;!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('todo'+this.conta+''), this.recaptchaContainersr);
    
    /******************** */
    this.recaptchaContainersry = this.renderer.createElement('li');
    // Set the id of the div
    //recaptchaContainers.innerHTML=conocs.de;
    this.renderer.setProperty(this.recaptchaContainersry, 'id', 'dela'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainersry, 'class','row');
    //this.renderer.setAttribute(recaptchaContainersr,'style',' color: #9099b7;!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('del'+this.conta+''), this.recaptchaContainersry);

    /********************* */
    this.recaptchaContainersru = this.renderer.createElement('p');
    // Set the id of the div
    //recaptchaContainers.innerHTML=conocs.de;
    this.renderer.setProperty(this.recaptchaContainersru, 'id', 'delp'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainersru, 'class','ios os scnd-font-color col-sm-4');
    //this.renderer.setAttribute(recaptchaContainersr,'style',' color: #9099b7;!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('dela'+this.conta+''), this.recaptchaContainersru);

    /************************************ */
    this.recaptchaContainersrut = this.renderer.createElement('p');
    // Set the id of the div
    //recaptchaContainers.innerHTML=conocs.de;
    this.recaptchaContainersrut.innerHTML=cf.saber+'%';
    this.renderer.setProperty(this.recaptchaContainersrut, 'id', 'delpp'+this.conta+'');
    this.renderer.setAttribute(this.recaptchaContainersrut, 'class','os-percentage col-sm-4');
    //this.renderer.setAttribute(recaptchaContainersr,'style',' color: #9099b7;!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('dela'+this.conta+''), this.recaptchaContainersrut);
 
  }
   createRecaptchaContainer() {
    // Use Angular's Renderer2 to create the div element
    for(let conocs of this.conoc){
      this.conta+=1;
    var result=(conocs.saber!*360)/100;
    const recaptchaContainer = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(recaptchaContainer, 'id', 'quesito ios'+this.conta+'');
    this.renderer.setAttribute(recaptchaContainer, 'class','quesito ios'+this.conta+'');
    this.renderer.setAttribute(recaptchaContainer,'style','background-color: #E64C65;transform: rotate('+result+'deg);!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('porcion1'), recaptchaContainer);

    return recaptchaContainer;
  }
  }
  createRecaptchaContainers() {
    // Use Angular's Renderer2 to create the div element
    for(let conocs of this.conoc){
      this.conta+=1;
    var result=(conocs.saber!*360)/100;
    const recaptchaContainers = this.renderer.createElement('div');
    // Set the id of the div
    recaptchaContainers.innerHTML=conocs.de;
    this.renderer.setProperty(recaptchaContainers, 'id', 'quesito ios'+this.conta+'');
    this.renderer.setAttribute(recaptchaContainers, 'class','scnd-font-color');
    this.renderer.setAttribute(recaptchaContainers,'style',' color: #9099b7;!important')
    // Append the created div to the body element
    this.renderer.appendChild(document.getElementById('centro'), recaptchaContainers);

    return recaptchaContainers;
  }
  }
ngOnInit(): void {
     

    (<HTMLInputElement>document.getElementById("demo")).innerHTML=this.saber!.toString();
    
    this.per.getTasks().subscribe(
      data => {
        data;
        for(let l of data ){
          this.persona_id=l.id;
          
        }
      console.log("PUT Request is successful ", data);
      },
      error => {
        
      console.log("Rrror", error);
      }
      );
     
      this.c.getTasks().subscribe(
        data => {
          this.conoc=data;
         
        },
        error => {
          
        console.log("Rrror", error);
        }
        );
       
        
       
}

ngAfterViewInit(): void{
        
        this.c.getTasks().subscribe(
          data => {
            this.conoc2=data;
            
           this.recar();
           this.cont=0;
           this.adjunt="";
           var desobre;
           for(let cfs of this.conoc){
            for(let i =0; i < document.getElementsByClassName(cfs.sobre.toString()).length;i++){
   

                 if(document.getElementsByClassName(cfs.sobre.toString())[i].innerHTML!==this.adjunt){
                  desobre=cfs.de
                  this.adjunt=document.getElementsByClassName(cfs.sobre.toString())[i].innerHTML;
                  document.getElementsByClassName(cfs.sobre.toString())[i].innerHTML=this.adjunt.toString();
                 }else{
                    if(this.adjunt===document.getElementsByClassName(cfs.sobre.toString())[i].innerHTML){

                      var lerolero;
                      this.cont+=1;
                       if (this.cont<=1){
                         
                         if(desobre===cfs.de){
                          lerolero=i;
                          document.getElementsByClassName(cfs.sobre.toString())[i].innerHTML="";
                          document.getElementsByClassName(cfs.sobre.toString())[lerolero-1].innerHTML=this.adjunt.toString();
                         }
                       
                     }else{
                       
                         if(lerolero-1 !== i){
                        document.getElementsByClassName(cfs.sobre.toString())[i].innerHTML="";
                      }
                       
                    }
                    }

                 }
                 
                 
            
            }
         
          }
             
            
          },
          error => {
            
          console.log("Rrror", error);
          }
          );
        for(let dpi of this.conoc){
          this.graFico(dpi);
          (<HTMLInputElement>document.getElementById(dpi.de+"a"+dpi.id)).innerHTML=dpi.saber!.toString();
        }
          console.log("MUESTRA"+this.elReference.toArray()
          .filter(r => r.nativeElement.hasAttribute('foo')));

          this.per.getTasksUsr().subscribe((resp:any)=>{
           
              this.rol=resp.rol;
            
          })
          
}
        
recar(){
   
    for(let cfsst of this.conoc){
 
      this.graFico(cfsst);
    }
} 

submitadd(){
  this.id;
  this.sobre= (<HTMLInputElement>document.getElementById("sobre")).value;
  this.de=(<HTMLInputElement>document.getElementById("de")).value;
  this.saber=parseInt((<HTMLInputElement>document.getElementById("demo")).innerHTML);
  this.persona_id
  if(this.de==="" || this.sobre===""){
    Swal.fire(
      'Campos Vacios!',
      'Debe colocar Sobre y DE',
      'warning'
    )
    return;
  }
  const {id,sobre,de,saber,persona_id}=this;
  const AddCon={id,sobre,de,saber,persona_id};
  this.c.addTask(AddCon).subscribe({
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
      this.showall=false;
      if(ver.text==='Success'){
        this.ngOnInit();
        localStorage.setItem("testJSON", '');
        this.per.addmiSwetTasadd();
        this.ngOnInit();
        this.ngAfterViewInit();
      }
      this.ngOnInit();
      this.ngAfterViewInit();
    }
});
}

submit(cnb:Cnc){

  this.id=cnb.id;
  this.de=(<HTMLInputElement>document.getElementById(cnb.id+''+cnb.de)).value;
  this.sobre=(<HTMLInputElement>document.getElementById(cnb.id+''+cnb.sobre)).value;
  this.saber=parseInt((<HTMLInputElement>document.getElementById(cnb.de+'a'+cnb.id)).innerHTML);
  this.persona_id;
  if(this.de==="" || this.sobre===""){
    Swal.fire(
      'Campos Vacios!',
      'Debe colocar Sobre y DE',
      'warning'
    )
    return;
  }
  const {id,sobre,de,saber,persona_id}=this;
  const modiFi={id,sobre,de,saber,persona_id};

  this.c.updateTaskReminder(modiFi).subscribe(
    data => {
     
      this.concat="";
      this.per.addmiSwetTasm();
       this.ngOnInit();
       this.ngAfterViewInit();
    console.log("PUT Request is successful ", data);
    },
    error => {
    console.log("Rrror", error);
    }
    );

}

ValorRanT(){
  var slider = (<HTMLInputElement>document.getElementById("ext"));
  var output = (<HTMLInputElement>document.getElementById("demo"));
  output.innerHTML = slider.value; 
  this.de=(<HTMLInputElement>document.getElementById("de")).value;
  this.saber = parseInt(slider.value);
  this.graFicoT();
 
}

graFicoT(){
     var chart = new CanvasJSs.Chart("chartContainer11", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: this.saber, label: ""+this.de+"" },
        
        
      ]
    }]
  });
  chart.render();
}

ValorRan(ji:Cnc){
  var slider1 = (<HTMLInputElement>document.getElementById(ji.de+''+ji.id));
  var output1 = (<HTMLInputElement>document.getElementById(ji.de+"a"+ji.id));
  output1.innerHTML = slider1.value; 
  
  this.graFico(ji);
 
}

graFico(cf:Cnc){
  const el = undefined;
  
  var valor= (<HTMLInputElement>document.getElementById(cf.de+''+cf.id)).value;
    
  var result=100-parseInt(valor);
  var chartedin = new CanvasJSs.Chart("chartContai"+cf.de+"", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: valor, label: ""+cf.de+"" },
        { y: result, label: "Falta Por Saber" },
        
      ]
    }]
  });
  chartedin.render();
}

Borrarc(el:Cnc){
  if(this.rol===0 || this.rol===2){
    this.per.addRol();
    return;
  }
  this.c.deleteTask(el).subscribe({
    next: resp => {
      let obj=JSON.parse(resp.toString());
      console.log("ESTE ES "+obj.text);
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
        this.e.addmiSwetExb();
      }
      this.ngOnInit();
      this.ngAfterViewInit();
    }
});
  this.ngOnInit();
  this.ngAfterViewInit();
}

Clickmee(conos:Cnc){
  
 if(this.concat !==''){
  (<HTMLInputElement>document.getElementById(conos.id+''+conos.sobre)).value=conos.sobre.toString();
  (<HTMLInputElement>document.getElementById(conos.id+''+conos.de)).value=conos.de.toString();
  return true;

 }else{
   return false;
 }

}

ClickRol(){
  if(this.rol===0 || this.rol===2){
     this.concat="";
     this.per.addRol();
     return;
  }
}

Clickeame(ccc,aaa,bbb){
 
if(this.concat ===ccc){
  
  (<HTMLInputElement>document.getElementById(bbb+''+aaa)).value=aaa.toString();
  (<HTMLInputElement>document.getElementById(bbb+''+ccc)).value=ccc.toString();
return false;
}else{
  return true;

}
}

AddN(){
  if(this.rol===0 || this.rol===2){
    this.showall=false;
    this.per.addRol();
    return;
  }
  (<HTMLInputElement>document.getElementById('sobre')).value="";
  (<HTMLInputElement>document.getElementById('de')).value="";
}
enviar_mensaje(){
  var a = (<HTMLInputElement>document.getElementById("chat-input"));
  if ("" != a.value) {
      var b = (<HTMLInputElement>document.getElementById("get-number")).innerHTML,c = (<HTMLInputElement>document.getElementById("chat-input")).value, d = "https://web.whatsapp.com/send", e = b,  f = "&text=" + c;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";  var g = d + "?phone=" + e + f;  window.open(g, "_blank");
  }
}


 
cerrar_chat(){
  let whatsapp_chat = (<HTMLElement>document.getElementById("whatsapp-chat"));
      whatsapp_chat.classList.add("hide");
      whatsapp_chat.classList.remove("show");
     
 }
 
 mostrar_chat(){
  let whatsapp_chat = (<HTMLElement>document.getElementById("whatsapp-chat"));
      whatsapp_chat.classList.add("show");
      whatsapp_chat.classList.remove("hide");
 }
}
