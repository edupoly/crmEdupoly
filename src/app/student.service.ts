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
  deleteStudent(id:number){
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }
  updateStudent(student:any){
    return this.http.put(`http://localhost:3000/students/${student.id}`,student)
  }
}
