import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { LogrosComponent } from './componentes/logros/logros.component';
import {IniciarSesionComponent} from './componentes/iniciar-sesion/iniciar-sesion.component'
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { InterceptorService } from './service/interceptor.service';
import { AutenticacionService } from './service/autenticacion.service';
import { EducacionService } from './service/educacion.service';
import { RecargaComponent } from './componentes/recarga/recarga.component';
import {JwtHelperService,JWT_OPTIONS} from '@auth0/angular-jwt';
const appRoutes:Routes =[
  {path:'Inic', component: IniciarSesionComponent/*,pathMatch:'full'*/},
  { path: '', redirectTo: 'Inic', pathMatch: 'full' },
 // {path:'Inic', component: IniciarSesionComponent},
 {path:'PortFolio', component: RecargaComponent},
 
]
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    ExperienciaYEducacionComponent,
    LogrosComponent,
    IniciarSesionComponent,
    RecargaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
 
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [AutenticacionService,EducacionService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],//{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent/*,IniciarSesionComponent*/]
})
export class AppModule { }
