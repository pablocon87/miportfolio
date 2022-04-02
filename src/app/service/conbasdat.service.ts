import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Bdt} from '../../Bdt'
@Injectable({
  providedIn: 'root'
})
export class ConbasdatService {
 apiUrl = 'https://porfoarp.herokuapp.com';
  
 //apiUrl = 'http://localhost:8080';
 constructor(private http: HttpClient) { }

getTasks():Observable<Bdt[]>{
   const httpOptions = {

     headers: new HttpHeaders(
       {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': localStorage.getItem('auth_token')!,
       }
     )
       
   
   };
   
   return this.http.get<Bdt[]> (this.apiUrl+'/basdat/traer',httpOptions)
}

deleteTask(task:Bdt):  Observable<Bdt> {
    const body={title: 'Angular POST Request Example'};
    const headers = { 'Authorization': localStorage.getItem('auth_token')!, 'Content-Type': 'application/json' };
    const url = `${this.apiUrl}/basdat/borrar/${task.id}`;
    return this.http.delete<Bdt>(url,{headers});

}

updateTaskReminder(task:Bdt): Observable<Bdt>{
   
    const option ={
      headers: new HttpHeaders(
        {
        
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')!
        })
    };
    const body={title: 'Angular POST Request Example'};
    const url = `${this.apiUrl}/basdat/editar/${task.id}`;
    return this.http.put<Bdt>(url+'?personaid='+task.persona_id
    +'&mysql='+task.mysql
    +'&postgresql='+task.postgresql
    +'&sqlserver='+task.sqlserver
    +'&otros='+task.otros
    
    , body, option);
}

addTask(task:Bdt): Observable<Bdt>{
 const option ={
   headers: new HttpHeaders(
     {
     
   'Content-Type': 'application/json',
   'Authorization': localStorage.getItem('auth_token')!
     })
 };
 return this.http.post<Bdt>(this.apiUrl+'/basdat/crear', task, option);

}

}
