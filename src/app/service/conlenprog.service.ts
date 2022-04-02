import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Lnp} from '../../Lnp'
@Injectable({
  providedIn: 'root'
})
export class ConlenprogService {

  apiUrl = 'https://porfoarp.herokuapp.com';
  
 //apiUrl = 'http://localhost:8080';
 constructor(private http: HttpClient) { }

getTasks():Observable<Lnp[]>{
   const httpOptions = {

     headers: new HttpHeaders(
       {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': localStorage.getItem('auth_token')!,
       }
     )
     
   
   };
  
   return this.http.get<Lnp[]> (this.apiUrl+'/lenprog/traer',httpOptions)

}

deleteTask(task:Lnp):  Observable<Lnp> {
    const body={title: 'Angular POST Request Example'};
    const headers = { 'Authorization': localStorage.getItem('auth_token')!, 'Content-Type': 'application/json' };
    const url = `${this.apiUrl}/lenprog/borrar/${task.id}`;
    return this.http.delete<Lnp>(url,{headers});

}

updateTaskReminder(task:Lnp): Observable<Lnp>{
   
    const option ={
      headers: new HttpHeaders(
        {
        
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')!
        })
    };
    const body={title: 'Angular POST Request Example'};
    const url = `${this.apiUrl}/lenprog/editar/${task.id}`;
    return this.http.put<Lnp>(url+'?personaid='+task.persona_id
    +'&php='+task.php
    +'&java='+task.java
    +'&ruby='+task.ruby
    +'&javascript='+task.javascript
    +'&typescript='+task.typescript
    +'&python='+task.python
    +'&otros='+task.otros
    
    , body, option);
}

addTask(task:Lnp): Observable<Lnp>{
 const option ={
   headers: new HttpHeaders(
     {
     
   'Content-Type': 'application/json',
   'Authorization': localStorage.getItem('auth_token')!
     })
 };
 
 return this.http.post<Lnp>(this.apiUrl+'/lenprog/crear', task, option);

}
}
