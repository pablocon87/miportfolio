import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Cnc} from '../../Cnc'
@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {

  apiUrl = 'https://porfoarp.herokuapp.com';
  
  //apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
 
  getTasks():Observable<Cnc[]>{
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
    return this.http.get<Cnc[]> (this.apiUrl+'/conoc/traer',httpOptions)
  }
  deleteTask(task:Cnc):  Observable<Cnc> {
    const body={title: 'Angular POST Request Example'};
    const headers = { 'Authorization': localStorage.getItem('auth_token')!, 'Content-Type': 'application/json' };
 const url = `${this.apiUrl}/conoc/borrar/${task.id}`;
 return this.http.delete<Cnc>(url,{headers});
 
  }
  updateTaskReminder(task:Cnc): Observable<Cnc>{
    
    const option ={
      headers: new HttpHeaders(
        {
        
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')!
        })
    };
    const body={title: 'Angular POST Request Example'};
  const url = `${this.apiUrl}/conoc/editar/${task.id}`;
  return this.http.put<Cnc>(url+'?personaid='+task.persona_id
  +'&sobre='+task.sobre
  +'&de='+task.de
  +'&saber='+task.saber
  
  
  , body, option);
 }
 addTask(task:Cnc): Observable<Cnc>{
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
  return this.http.post<Cnc>(this.apiUrl+'/conoc/crear', task, option);
 
 }

}
