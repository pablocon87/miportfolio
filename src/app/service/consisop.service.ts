import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams ,HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Sop} from '../../Sop'
@Injectable({
  providedIn: 'root'
})
export class ConsisopService {
 //apiUrl = 'https://porfoarp.herokuapp.com';
  
 apiUrl = 'http://localhost:8080';
 constructor(private http: HttpClient) { }

 getTasks():Observable<Sop[]>{
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
   return this.http.get<Sop[]> (this.apiUrl+'/sisop/traer',httpOptions)
 }
 deleteTask(task:Sop):  Observable<Sop> {
   const body={title: 'Angular POST Request Example'};
   const headers = { 'Authorization': localStorage.getItem('auth_token')!, 'Content-Type': 'application/json' };
const url = `${this.apiUrl}/sisop/borrar/${task.id}`;
return this.http.delete<Sop>(url,{headers});

 }
 updateTaskReminder(task:Sop): Observable<Sop>{
   
   const option ={
     headers: new HttpHeaders(
       {
       
     'Content-Type': 'application/json',
     'Authorization': localStorage.getItem('auth_token')!
       })
   };
   const body={title: 'Angular POST Request Example'};
 const url = `${this.apiUrl}/sisop/editar/${task.id}`;
 return this.http.put<Sop>(url+'?personaid='+task.persona_id
 +'&windows='+task.windows
 +'&linux='+task.linux
 +'&macos='+task.macos
 +'&otros='+task.otros
 
 
 , body, option);
}
addTask(task:Sop): Observable<Sop>{
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
 return this.http.post<Sop>(this.apiUrl+'/sisop/crear', task, option);

}
}
