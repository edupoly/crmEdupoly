import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http:HttpClient) { }
  addStudent(student:any){
    return this.http.post("http://localhost:3000/students",student)
  }
  getStudents(){
    return this.http.get("http://localhost:3000/students")
  }
}
