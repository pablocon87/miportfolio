import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Educ} from '../../Educ'


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  apiUrl = 'http://localhost:7000';
  
  
  constructor(private http: HttpClient) { }

  getTasks():Observable<Educ[]>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!,
        }
      )
        // head: new HttpParams()
        // .set('Content-Type', 'application/json')
    
    };
    /*const tasks =of(TASKS);
    return tasks;*/
    return this.http.get<Educ[]> (this.apiUrl+'/educacion/traer',httpOptions)
  }
  deleteTask(task:Educ):  Observable<Educ> {
    const body={title: 'Angular POST Request Example'};
    const headers = { 'Authorization': localStorage.getItem('auth_token')!, 'Content-Type': 'application/json' };
const url = `${this.apiUrl}/educacion/borrar/${task.id}`;
return this.http.delete<Educ>(url,{headers});

  }
  updateTaskReminder(task:Educ): Observable<Educ>{
    alert(task.id);
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
  // const params = new URLSearchParams()
  // params.set('user', user)
  // params.set('password',password)
  return this.http.post<Educ>(this.apiUrl+'/educacion/crear', task, option);

}
}
