import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  constructor(public studentService:StudentService){}
  students:any=[]
  ngOnInit(){
    this.studentService.getStudents().subscribe((students)=>{
      this.students=students;
    })
  }
}
