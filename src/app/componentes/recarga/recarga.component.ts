import { Component, OnInit } from '@angular/core';
import {AutenticacionService} from '../../service/autenticacion.service'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent implements OnInit {
local: string="";
  constructor(public autenticacionService:AutenticacionService,public _router: Router, public _location: Location) { }

  ngOnInit(): void {
   if(localStorage.getItem('auth_token') !==null){
      this.local=localStorage.getItem('auth_token')!.toString();
   }else{this._router.navigate(['']);}
   
  }
compro(){

  if(localStorage.getItem('pepito') ==='false'){

this.autenticacionService.router.navigate(['/Inic'])

}

}

}
