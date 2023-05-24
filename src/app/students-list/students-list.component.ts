import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  constructor(public studentService:StudentService,public router:Router){}
  students:any=[]
  ngOnInit(){
    this.getAllStudents()
  }
  getAllStudents(){
    this.studentService.getStudents().subscribe((students)=>{
      this.students=students;
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
}
