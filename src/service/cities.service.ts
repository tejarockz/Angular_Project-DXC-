import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import {Observable, observable, throwError } from 'rxjs';
import { citiesModel } from '../model/cities.model';

@Injectable({
  providedIn: 'root'
})
export class citiesService {

  constructor(
    private httpClient : HttpClient
  ) { }
  
  masterAPI = "http://localhost:7001/";

  getcities(): Observable<any> {
    return this.httpClient
    .get<citiesModel[]>(this.masterAPI + 'cities/all',{})
  }
  
createcities(cities?:citiesModel): Observable<any> {
  return this.httpClient
  .post<citiesModel[]>(this.masterAPI + 'cities/new',{cities})
}
// getcities(id:any):Observable<any>{
//   return this.httpClient.get<citiesModel[]>(this.masterAPI + `cities/${id}`)
// }
// saveStudent(id:any,student:any):Observable<any> {
//   return this.httpClient
//   .put<StudentModel[]>(this.masterAPI + `student/${id}`,{student})
// }
// deleteStudent(id:any):Observable<any> {
//   return this.httpClient
//   .delete(this.masterAPI + `student/${id}`,{responseType:'text'})
// }

}
