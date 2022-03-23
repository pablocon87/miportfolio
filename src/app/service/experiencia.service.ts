import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import{Exp} from '../../Exp';
import { Tipem } from 'src/Tipem';
import {Task} from 'src/Task'
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiUrl = 'https://porfoarp.herokuapp.com';
  //apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getTasks():Observable<Exp[]>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!,
        }
      )
        // head: new HttpParams()
        // .set('Content-Type', 'application/json')
    
    }
    /*const tasks =of(TASKS);
    return tasks;*/
    return this.http.get<Exp[]> (this.apiUrl+'/experiencia/traer',httpOptions)
  }
  getTasksTip():Observable<Tipem[]>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!,
        }
      )
        // head: new HttpParams()
        // .set('Content-Type', 'application/json')
    
    }
    return this.http.get<Tipem[]> (this.apiUrl+'/tipoem/traer',httpOptions)
  }
  deleteTask(task:Exp):  Observable<Exp> {
    const option ={
      headers: new HttpHeaders(
        {
        
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')!
        })
    };
const url = `${this.apiUrl}/experiencia/borrar/${task.id}`;
return this.http.delete<Exp>(url,option);

  }
  updateTaskReminder(task:Exp): Observable<Exp>{
    const option ={
      headers: new HttpHeaders(
        {
        
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')!
        })
    };
    const body={title: 'Angular POST Request Example'};
  const url = `${this.apiUrl}/experiencia/editar/${task.id}`;
  return this.http.put<Exp>(url+'?nombreEmpresa='+ task.nombreEmpresa
  +'&estrabajoactual='+ task.estrabajoactual
  +'&fechainicio='+task.fechainicio
  +'&fechafin='+task.fechafin
+'&descripcion='+task.descripcion
+'&persona_id='+  task.persona_id
 +'&tipo_empleo_id='+ task.tipo_empleo_id
  
  
  , body, option);
}
addTask(task:Exp): Observable<Exp>{
  const options ={
    
    headers: new HttpHeaders(
      {
      
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('auth_token')!
      }),
      
  };
  return this.http.post<Exp>(this.apiUrl+'/experiencia/crear', task ,options);

}
addmiSwetEx(){
  Swal.fire(
    'Muy Bien!',
    'Se Agrego Correctamente!',
    'success'
  )
}
addmiSwetExm(){
  Swal.fire(
    'Muy Bien!',
    'Se Modifico Correctamente!',
    'success'
  )
}
addmiSwetExb(){
  Swal.fire(
    'Muy Bien!',
    'Se Borro Correctamente!',
    'success'
  )
}
}
