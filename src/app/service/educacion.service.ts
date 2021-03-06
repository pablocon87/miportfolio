import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Educ} from '../../Educ'


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 apiUrl = 'https://porfoarp.herokuapp.com';
  
 //apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

getTasks():Observable<Educ[]>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!,
        }
      )
        
    
    };
   
    return this.http.get<Educ[]> (this.apiUrl+'/educacion/traer',httpOptions)
}

deleteTask(task:Educ):  Observable<Educ> {
    const body={title: 'Angular POST Request Example'};
    const headers = { 'Authorization': localStorage.getItem('auth_token')!, 'Content-Type': 'application/json' };
    const url = `${this.apiUrl}/educacion/borrar/${task.id}`;
    return this.http.delete<Educ>(url,{headers});

}

updateTaskReminder(task:Educ): Observable<Educ>{
 
    const option ={
      headers: new HttpHeaders(
        {
        
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')!
        })
    };
    const body={title: 'Angular POST Request Example'};
    const url = `${this.apiUrl}/educacion/editar/${task.id}`;
    return this.http.put<Educ>(url+'?principal='+task.principal
    +'&segunda='+task.segunda
    +'&personaid='+task.id_persona
    +'&urllogo='+task.url_logo
    +'&urlinst='+task.urlinst
    +'&anoinic='+task.anoinic
    +'&anofin='+task.anofin
    +'&titulo='+task.titulo
    +'&persona_id='+task.persona_id

    
    , body, option);
}

addTask(task:Educ): Observable<Educ>{
  const option ={
    headers: new HttpHeaders(
      {
      
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('auth_token')!
      })
  };
 
  return this.http.post<Educ>(this.apiUrl+'/educacion/crear', task, option);

}
}
