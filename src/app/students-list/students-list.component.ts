import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  constructor(public studentService:StudentService,public router:Router,public cS:CourseService){}
  students:any=[]
  skey:string='';
  allcourses:any=[];
  selectedCourses:any=[];
  filteredStudents:any=[]
  searchStudents(){
    var temp = this.students.filter((student:any)=>{
      var studentstring = JSON.stringify(student).toLowerCase();
      if(studentstring.includes(this.skey.toLowerCase())){
        return true;
      }
      else{
        return false
      }
    })
    console.log(temp)
  }

  ngOnInit(){
    this.getAllStudents()
    this.cS.getAllCourses().subscribe((courses)=>{
      this.allcourses=courses;
    })
  }
  getAllStudents(){
    this.studentService.getStudents().subscribe((students)=>{
      this.students=students;
      this.filteredStudents=students;
    })
  }
  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(()=>{
      this.getAllStudents()
    })
  }
  editStudent(student:any){
    this.router.navigate(["/editStudent"],{queryParams:student})
  }
  selectCourse(e:any,c:any){
    if(e.target.checked){
      this.selectedCourses.push(c.title);
    }
    else{

      this.selectedCourses=this.selectedCourses.filter((course:any)=>{
        if(c.title===course){
          return false
        }
        else{
          return true
        }
      })
    }
    // console.log(this.selectedCourses)
    // console.log(this.students)
    if(this.selectedCourses.length>0){
      this.filteredStudents = this.students.filter((student:any)=>{
        if(this.selectedCourses.includes(student.course)){
          return true
        }
        return false
      })
    }
    else{
      this.filteredStudents=this.students;
    }
    
    console.log(this.filteredStudents)
  }
}
