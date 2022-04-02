import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Ingl} from '../../Ingl'
@Injectable({
  providedIn: 'root'
})
export class ConoinglesService {
 apiUrl = 'https://porfoarp.herokuapp.com';
  
 //apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

getTasks():Observable<Ingl[]>{
    const httpOptions = {

      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('auth_token')!,
        }
      )
        
    
    };
    
    return this.http.get<Ingl[]> (this.apiUrl+'/ingles/traer',httpOptions)
}

deleteTask(task:Ingl):  Observable<Ingl> {
    const body={title: 'Angular POST Request Example'};
    const headers = { 'Authorization': localStorage.getItem('auth_token')!, 'Content-Type': 'application/json' };
    const url = `${this.apiUrl}/ingles/borrar/${task.id}`;
    return this.http.delete<Ingl>(url,{headers});

}

updateTaskReminder(task:Ingl): Observable<Ingl>{
  
    const option ={
      headers: new HttpHeaders(
        {
        
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')!
        })
    };
    const body={title: 'Angular POST Request Example'};
    const url = `${this.apiUrl}/ingles/editar/${task.id}`;
    return this.http.put<Ingl>(url+'?inescrip='+task.inescrip
    +'&inoral='+task.inoral
    +'&intecnico='+task.intecnico
    +'&inbasico='+task.inbasico
    +'&inavanzado='+task.inavanzado
    +'&personaid='+task.persona_id

    
    , body, option);
}

addTask(task:Ingl): Observable<Ingl>{
  const option ={
    headers: new HttpHeaders(
      {
      
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('auth_token')!
      })
  };

  return this.http.post<Ingl>(this.apiUrl+'/ingles/crear', task, option);

}
}
