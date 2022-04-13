import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import {Observable, observable, throwError } from 'rxjs';
import { StudentModel } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient : HttpClient
  ) { }
  
  masterAPI = "http://localhost:7001/";

  getStudents(): Observable<any> {
    return this.httpClient
    .get<StudentModel[]>(this.masterAPI + 'student/all',{})
  }
  
createStudent(student?:StudentModel): Observable<any> {
  return this.httpClient
  .post<StudentModel[]>(this.masterAPI + 'student/new',{student})
}
getStudent(id:any):Observable<any>{
  return this.httpClient.get<StudentModel[]>(this.masterAPI + `student/${id}`)
}
saveStudent(id:any,student:any):Observable<any> {
  return this.httpClient
  .put<StudentModel[]>(this.masterAPI + `student/${id}`,{student})
}
deleteStudent(id:any):Observable<any> {
  return this.httpClient
  .delete(this.masterAPI + `student/${id}`,{responseType:'text'})
}

}
