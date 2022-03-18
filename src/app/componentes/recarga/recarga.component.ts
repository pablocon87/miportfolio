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
   if(localStorage.getItem('auth_token') !==''){
      this.local=localStorage.getItem('auth_token')!.toString();
   }else{this.local="";}
  }
compro(){

  if(localStorage.getItem('pepito') ==='false'){

this.autenticacionService.router.navigate(['/Inic'])

}

}
refresh(): void {
  this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
  console.log(decodeURI(this._location.path()));
  this._router.navigate([decodeURI(this._location.path())]);
  });
}
}
