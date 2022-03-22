import { Component } from '@angular/core';
import{EncabezadoComponent} from './componentes/encabezado/encabezado.component'
import {AutenticacionService} from '../app/service/autenticacion.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miportfolio';
  fechaHora = new Date();
  
  
  constructor(
     public auten :AutenticacionService
  ) { }
  
  tiempo(){
    if(localStorage.getItem('pepito')==='false'){
      this.auten.pepito=false;
    }
    this.auten.router.navigate([''])
          
    
  }
}
