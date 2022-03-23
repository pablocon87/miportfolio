import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../canvasjs.min';
import {Ingl} from '../../../Ingl'
import {Task} from '../../../Task'
import {Lnp} from '../../../Lnp'
import {Sop} from '../../../Sop'
import {Bdt} from '../../../Bdt'
import {ConoinglesService} from '../../service/conoingles.service'
import { AutenticacionService} from '../../service/autenticacion.service'
import {ConlenprogService}from '../../service/conlenprog.service'
import {ConsisopService} from '../../service/consisop.service'
import {ConbasdatService} from '../../service/conbasdat.service'
@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
ingtec?:number=0;
ingescr?:number=0;
ingoral?:number=0;
ingbas?:number=0;
ingav?:number=0;
/**lenpro */
idl?:number;
     php?:number=0;
     java?:number=0;
     ruby?:number=0;
     javascript?:number=0;
     typescript?:number=0;
     python?:number=0;
     otros?:number=0;
     persona_idl?:number=0;
     showalllen:boolean=false;
     showalller:boolean=false;
     lengp:Lnp[]=[];
/** */
/**SisOp */
ids?:number;
windows?:number=0;
linux?:number=0;
macos?:number=0;
otross?:number=0;
persona_ids?:number;
sisop:Sop[]=[];
showsop:boolean=false;
showsopr:boolean=false;
showrelo:boolean=false;
/** */
/**Basdat */
idbd?:number;
mysql?:number=0;
sqlserver?:number=0;
postgresql?:number=0;
otrosbd?:number=0;
persona_idbd?:number;
showbasd:boolean=false;
showbd:boolean=false;
showbdr:boolean=false;
showsubm:boolean=false
/** */
pers:Task[]=[];
ingle:Ingl[]=[];
showall:boolean=false;
showrang:boolean=false;
showlen:boolean=false;
id?:number;
    inescrip?:number;
    inoral?:number;
    intecnico?:number;
    inbasico?:number;
    inavanzado?:number;
    persona_id?:number;
  constructor(public ing:ConoinglesService,public per:AutenticacionService,public lenp:ConlenprogService,public sip:ConsisopService,public bd:ConbasdatService) { }

  ngOnInit(): void {
    this.per.getTasks().subscribe(
      data => {
        this.pers=data;
        for(let l of this.pers ){
          this.persona_id=l.id;
          
        }
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.pers;
      console.log("Rrror", error);
      }
      );
      this.ing.getTasks().subscribe(
        data => {
          this.ingle=data;
          for(let l of this.ingle ){
            this.id=l.id;
            this.ingtec=l.intecnico;
           this.ingescr=l.inescrip;
           this.ingoral=l.inoral;
           this.ingbas=l.inbasico;
            this.ingav=l.inavanzado;
            this.showall=true;
            this.showrang=true;
            this.InglesC();
            
          }
        console.log("PUT Request is successful ", data);
        },
        error => {
          this.pers;
        console.log("Rrror", error);
        }
        );
        this.lenp.getTasks().subscribe(
          data => {
            data;
            for(let l of data ){
              this.idl=l.id;
              this.php=l.php;
              this.java=l.java;
              this.ruby=l.ruby;
              this.javascript=l.javascript;
              this.typescript=l.typescript;
              this.python=l.python;
              this.otros=l.otros;
              this.showalllen=true;
              this.showalller=true;
              
              this.progrC();
              
            }
          console.log("PUT Request is successful ", data);
          },
          error => {
            this.pers;
          console.log("Rrror", error);
          }
          );
          this.sip.getTasks().subscribe(
            data => {
              data;
              for(let l of data ){
                this.ids=l.id;
                this.windows=l.windows;
                this.linux=l.linux;
                this.macos=l.macos;
                this.otross=l.otros;
                this.showsop=true;
                this.showsopr=true;
                this.SisopC();
                
              }
            console.log("PUT Request is successful ", data);
            },
            error => {
              this.pers;
            console.log("Rrror", error);
            }
            );
            this.bd.getTasks().subscribe(
              data => {
                data;
                for(let l of data ){
                  this.idbd=l.id;
                  this.mysql=l.mysql;
                  this.postgresql=l.postgresql;
                  this.sqlserver=l.sqlserver;
                  this.otrosbd=l.otros;
                  this.showbasd=true;
                  this.showbd=true;
                  this.showbdr=true;
                  this.showsubm=true;
                  this.BasdaC();
                  
                }
              console.log("PUT Request is successful ", data);
              },
              error => {
                this.pers;
              console.log("Rrror", error);
              }
              );
    
    
  }
ValorRan(){
  
  var slider = (<HTMLInputElement>document.getElementById("ex1"));
  var output = (<HTMLInputElement>document.getElementById("demo"));
  output.innerHTML = slider.value; 
  this.ingtec=parseInt(slider.value);
  var slider1 = (<HTMLInputElement>document.getElementById("ex2"));
  var output1 = (<HTMLInputElement>document.getElementById("demo1"));
  output1.innerHTML = slider1.value;
  this.ingescr=parseInt(slider1.value);
  var slider2 = (<HTMLInputElement>document.getElementById("ex3"));
  var output2 = (<HTMLInputElement>document.getElementById("demo2"));
  output2.innerHTML = slider2.value;
  this.ingoral=parseInt(slider2.value);
  var slider3 = (<HTMLInputElement>document.getElementById("ex4"));
  var output3 = (<HTMLInputElement>document.getElementById("demo3"));
  output3.innerHTML = slider3.value;
  this.ingbas=parseInt(slider3.value);
  var slider4 = (<HTMLInputElement>document.getElementById("ex5"));
  var output4 = (<HTMLInputElement>document.getElementById("demo4"));
  output4.innerHTML = slider4.value;
  this.ingav=parseInt(slider4.value);
  this.InglesC();
  // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  // slider.oninput = function() {
  //   output.innerHTML = this.value;
  // }

}
ValorLen(){
  var slider = (<HTMLInputElement>document.getElementById("php"));
  var output = (<HTMLInputElement>document.getElementById("phpdemo"));
  output.innerHTML = slider.value; 
  this.php=parseInt(slider.value);
  var slider1 = (<HTMLInputElement>document.getElementById("java"));
  var output1 = (<HTMLInputElement>document.getElementById("javademo"));
  output1.innerHTML = slider1.value;
  this.java=parseInt(slider1.value);
  var slider2 = (<HTMLInputElement>document.getElementById("ruby"));
  var output2 = (<HTMLInputElement>document.getElementById("rubydemo"));
  output2.innerHTML = slider2.value;
  this.ruby=parseInt(slider2.value);
  var slider3 = (<HTMLInputElement>document.getElementById("javascript"));
  var output3 = (<HTMLInputElement>document.getElementById("javascriptdemo"));
  output3.innerHTML = slider3.value;
  this.javascript=parseInt(slider3.value);
  var slider4 = (<HTMLInputElement>document.getElementById("typescript"));
  var output4 = (<HTMLInputElement>document.getElementById("typescriptdemo"));
  output4.innerHTML = slider4.value;
  this.typescript=parseInt(slider4.value);
  var slider5 = (<HTMLInputElement>document.getElementById("python"));
  var output5 = (<HTMLInputElement>document.getElementById("pythondemo"));
  output5.innerHTML = slider5.value;
  this.python=parseInt(slider5.value);
  var slider6 = (<HTMLInputElement>document.getElementById("otros"));
  var output6 = (<HTMLInputElement>document.getElementById("otrosdemo"));
  output6.innerHTML = slider6.value;
  this.otros=parseInt(slider6.value);
  this.progrC();

}
ValorRanSop(){
 var slider = (<HTMLInputElement>document.getElementById("windows"));
  var output = (<HTMLInputElement>document.getElementById("windowsdemo"));
  output.innerHTML = slider.value; 
  this.windows=parseInt(slider.value);
  var slider1 = (<HTMLInputElement>document.getElementById("linux"));
  var output1 = (<HTMLInputElement>document.getElementById("linuxdemo"));
  output1.innerHTML = slider1.value;
  this.linux=parseInt(slider1.value);
  var slider2 = (<HTMLInputElement>document.getElementById("macos"));
  var output2 = (<HTMLInputElement>document.getElementById("macosdemo"));
  output2.innerHTML = slider2.value;
  this.macos=parseInt(slider2.value);
  var slider3 = (<HTMLInputElement>document.getElementById("otross"));
  var output3 = (<HTMLInputElement>document.getElementById("otrossdemo"));
  output3.innerHTML = slider3.value;
  this.otross=parseInt(slider3.value);
  this.SisopC();
}
ValorRanBd(){
  var slider = (<HTMLInputElement>document.getElementById("mysql"));
  var output = (<HTMLInputElement>document.getElementById("mysqldemo"));
  output.innerHTML = slider.value; 
  this.mysql=parseInt(slider.value);
  var slider1 = (<HTMLInputElement>document.getElementById("postgresql"));
  var output1 = (<HTMLInputElement>document.getElementById("postgresqldemo"));
  output1.innerHTML = slider1.value;
  this.postgresql=parseInt(slider1.value);
  var slider2 = (<HTMLInputElement>document.getElementById("sqlserver"));
  var output2 = (<HTMLInputElement>document.getElementById("sqlserverdemo"));
  output2.innerHTML = slider2.value;
  this.sqlserver=parseInt(slider2.value);
  var slider3 = (<HTMLInputElement>document.getElementById("otrosbd"));
  var output3 = (<HTMLInputElement>document.getElementById("otrosbddemo"));
  output3.innerHTML = slider3.value;
  this.otrosbd=parseInt(slider3.value);
  this.BasdaC();
}
  InglesC(){
    var chart = new CanvasJS.Chart("chartContainer", {
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
          { y: this.ingtec, label: "Ingles Técnico" },
          { y: this.ingescr, label: "Ingles Escrito" },
          { y: this.ingoral, label: "Ingles oral" },
          { y: this.ingbas, label: "Ingles Basico" },
          { y: this.ingav, label: "Ingles Avanzado" },
          
        ]
      }]
    });
    chart.render();

  }
  progrC(){
    var charter = new CanvasJS.Chart("chartContainer2", {
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
          { y: this.java, label: "java" },
          { y: this.php, label: "php" },
          { y: this.javascript, label: "Javascript" },
          { y: this.typescript, label: "Typescript" },
          { y: this.python, label: "Python" },
          { y: this.ruby, label: "Ruby" },
          { y: this.otros, label: "Otros" },
        ]
      }]
    });
    charter.render();
  }
  SisopC(){
    var charters = new CanvasJS.Chart("chartContainer3", {
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
          { y: this.windows, label: "Windows" },
          { y: this.linux, label: "Linux" },
          { y: this.macos, label: "MacOs" },
          { y: this.otross, label: "Otros" },
          
        ]
      }]
    });
    charters.render();
  }
 BasdaC(){
  var chartersa = new CanvasJS.Chart("chartContainer4", {
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
        { y: this.mysql, label: "MYSQL" },
        { y: this.sqlserver, label: "SQLServer" },
        { y: this.postgresql, label: "PostgreSQL" },
        { y: this.otrosbd, label: "Otros" },
        
        
      ]
    }]
  });
  chartersa.render();
 }
  submit(){
    if(this.showall===false){

    
    this.id;
    this.inescrip=parseInt((<HTMLInputElement>document.getElementById("demo1")).innerHTML);
    this.inoral=parseInt((<HTMLInputElement>document.getElementById("demo2")).innerHTML);
    this.intecnico=parseInt((<HTMLInputElement>document.getElementById("demo")).innerHTML);
    this.inbasico=parseInt((<HTMLInputElement>document.getElementById("demo3")).innerHTML);
    this.inavanzado=parseInt((<HTMLInputElement>document.getElementById("demo4")).innerHTML);
    this.persona_id;
    //alert(this.inoral)
    if (this.inoral===null || this.intecnico===null){
      
      alert("no ahy nada");
      return;
    }
    const {id,inescrip,inoral,intecnico,inbasico,inavanzado,persona_id}=this
    const ModiFi={id,inescrip,inoral,intecnico,inbasico,inavanzado,persona_id}
    this.ing.addTask(ModiFi).subscribe({
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
        if(ver.text==='Success'){
          localStorage.setItem("testJSON", '');
          alert("Se Agrego Correctamente")
          this.ngOnInit();
        }
        this.ngOnInit();
         
      }
  });
}else{

  this.id;
  this.inescrip=parseInt((<HTMLInputElement>document.getElementById("demo1")).innerHTML);
  this.inoral=parseInt((<HTMLInputElement>document.getElementById("demo2")).innerHTML);
  this.intecnico=parseInt((<HTMLInputElement>document.getElementById("demo")).innerHTML);
  this.inbasico=parseInt((<HTMLInputElement>document.getElementById("demo3")).innerHTML);
  this.inavanzado=parseInt((<HTMLInputElement>document.getElementById("demo4")).innerHTML);
  this.persona_id;
  //alert(this.inoral)
  if (this.inoral===null || this.intecnico===null){
    
    alert("no ahy nada");
    return;
  }
  const {id,inescrip,inoral,intecnico,inbasico,inavanzado,persona_id}=this
  const ModiFi={id,inescrip,inoral,intecnico,inbasico,inavanzado,persona_id}
  this.ing.updateTaskReminder(ModiFi).subscribe(
    data => {
      this.ngOnInit();
      alert("Se Modifco Correctamente")
    console.log("PUT Request is successful ", data);
    },
    error => {
      this.ngOnInit();
    console.log("Rrror", error);
    }
    );

}
  }
  submitLen(){
    if(this.showalller===true){

    
      this.id;
      this.php=parseInt((<HTMLInputElement>document.getElementById("phpdemo")).innerHTML);
      this.java=parseInt((<HTMLInputElement>document.getElementById("javademo")).innerHTML);
      this.javascript=parseInt((<HTMLInputElement>document.getElementById("javascriptdemo")).innerHTML);
      this.typescript=parseInt((<HTMLInputElement>document.getElementById("typescriptdemo")).innerHTML);
      this.python=parseInt((<HTMLInputElement>document.getElementById("pythondemo")).innerHTML);
      this.ruby=parseInt((<HTMLInputElement>document.getElementById("rubydemo")).innerHTML);
      this.otros=parseInt((<HTMLInputElement>document.getElementById("otrosdemo")).innerHTML);
      this.persona_id;
      //alert(this.inoral)
      if (this.php===null || this.java===null){
        
        alert("no ahy nada");
        return;
      }
      const {id,php,java,javascript,typescript,python,ruby,otros,persona_id}=this
      const ModiFi={id,php,java,javascript,typescript,python,ruby,otros,persona_id}
      this.lenp.addTask(ModiFi).subscribe({
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
          if(ver.text==='Success'){
            localStorage.setItem("testJSON", '');
            alert("Se Agrego Correctamente")
            this.ngOnInit();
          }
          this.ngOnInit();
           
        }
    });
  }else{
  
    this.id=this.idl;
      this.php=parseInt((<HTMLInputElement>document.getElementById("phpdemo")).innerHTML);
      this.java=parseInt((<HTMLInputElement>document.getElementById("javademo")).innerHTML);
      this.javascript=parseInt((<HTMLInputElement>document.getElementById("javascriptdemo")).innerHTML);
      this.typescript=parseInt((<HTMLInputElement>document.getElementById("typescriptdemo")).innerHTML);
      this.python=parseInt((<HTMLInputElement>document.getElementById("pythondemo")).innerHTML);
      this.ruby=parseInt((<HTMLInputElement>document.getElementById("rubydemo")).innerHTML);
      this.otros=parseInt((<HTMLInputElement>document.getElementById("otrosdemo")).innerHTML);
      
      this.persona_id;
    //alert(this.inoral)
    
    const {id,php,java,javascript,typescript,python,ruby,otros,persona_id}=this
    const ModiFi={id,php,java,javascript,typescript,python,ruby,otros,persona_id}
    this.lenp.updateTaskReminder(ModiFi).subscribe(
      data => {
        this.ngOnInit();
        alert("Se Modifco Correctamente")
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.ngOnInit();
      console.log("Rrror", error);
      }
      );
  
  }

  }
  submitSop(){
    if(this.showsop===false){

    
      this.id;
      this.windows=parseInt((<HTMLInputElement>document.getElementById("windowsdemo")).innerHTML);
      this.linux=parseInt((<HTMLInputElement>document.getElementById("linuxdemo")).innerHTML);
      this.macos=parseInt((<HTMLInputElement>document.getElementById("macosdemo")).innerHTML);
      this.otross=parseInt((<HTMLInputElement>document.getElementById("otrossdemo")).innerHTML);
      this.otros=this.otross;
      this.persona_id;
      //alert(this.inoral)
      if (this.php===null || this.java===null){
        
        alert("no ahy nada");
        return;
      }
      const {id,windows,linux,macos,otros,persona_id}=this
      const ModiFi={id,windows,linux,macos,otros,persona_id}
      this.sip.addTask(ModiFi).subscribe({
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
          if(ver.text==='Success'){
            localStorage.setItem("testJSON", '');
            alert("Se Agrego Correctamente")
            this.ngOnInit();
          }
          this.ngOnInit();
           
        }
    });
  }else{
  
    this.id=this.ids;
  
    this.windows=parseInt((<HTMLInputElement>document.getElementById("windowsdemo")).innerHTML);
    this.linux=parseInt((<HTMLInputElement>document.getElementById("linuxdemo")).innerHTML);
    this.macos=parseInt((<HTMLInputElement>document.getElementById("macosdemo")).innerHTML);
    this.otross=parseInt((<HTMLInputElement>document.getElementById("otrossdemo")).innerHTML);
    this.otros=this.otross;
    this.persona_id;
      
      this.persona_id;
    //alert(this.inoral)
    if (this.windows===null || this.linux===null){
      
      alert("no ahy nada");
      return;
    }
    const {id,windows,linux,macos,otros,persona_id}=this
      const ModiFi={id,windows,linux,macos,otros,persona_id}
    this.sip.updateTaskReminder(ModiFi).subscribe(
      data => {
        this.ngOnInit();
        alert("Se Modifco Correctamente")
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.ngOnInit();
      console.log("Rrror", error);
      }
      );
  
  }

  }
  submitBd(){
    if(this.showsubm===false){

    
      this.id;
      this.mysql=parseInt((<HTMLInputElement>document.getElementById("mysqldemo")).innerHTML);
      this.postgresql=parseInt((<HTMLInputElement>document.getElementById("postgresqldemo")).innerHTML);
      this.sqlserver=parseInt((<HTMLInputElement>document.getElementById("sqlserverdemo")).innerHTML);
      this.otrosbd=parseInt((<HTMLInputElement>document.getElementById("otrosbddemo")).innerHTML);
      this.otros=this.otrosbd;
      this.persona_id;
      //alert(this.inoral)
      
      const {id,mysql,postgresql,sqlserver,otros,persona_id}=this
      const ModiFi={id,mysql,postgresql,sqlserver,otros,persona_id}
      this.bd.addTask(ModiFi).subscribe({
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
          if(ver.text==='Success'){
            localStorage.setItem("testJSON", '');
            alert("Se Agrego Correctamente")
            this.ngOnInit();
          }
          this.ngOnInit();
           
        }
    });
  }else{
  
    this.id=this.idbd;

    this.mysql=parseInt((<HTMLInputElement>document.getElementById("mysqldemo")).innerHTML);
    this.postgresql=parseInt((<HTMLInputElement>document.getElementById("postgresqldemo")).innerHTML);
    this.sqlserver=parseInt((<HTMLInputElement>document.getElementById("sqlserverdemo")).innerHTML);
    this.otrosbd=parseInt((<HTMLInputElement>document.getElementById("otrosbddemo")).innerHTML);
    this.otros=this.otrosbd;
    this.persona_id;
    //alert(this.inoral)
    
    const {id,mysql,postgresql,sqlserver,otros,persona_id}=this
    const ModiFi={id,mysql,postgresql,sqlserver,otros,persona_id}
    this.bd.updateTaskReminder(ModiFi).subscribe(
      data => {
        this.ngOnInit();
        alert("Se Modifco Correctamente")
      console.log("PUT Request is successful ", data);
      },
      error => {
        this.ngOnInit();
      console.log("Rrror", error);
      }
      );
  
  }
  }
}


