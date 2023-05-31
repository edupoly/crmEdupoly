import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http:HttpClient) { }
  addCourse(course:any){
    return this.http.post("http://localhost:3000/courses",course)
  }
  getAllCourses(){
    return this.http.get("http://localhost:3000/courses")
  }
  deleteCourse(){

  }
  updateCourse(){

  }
}
