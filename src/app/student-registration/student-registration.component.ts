import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  constructor(public studentService:StudentService){}
  studentForm:FormGroup= new FormGroup({
    fullname:new FormControl(),
    phonenumber:new FormControl(),
    email:new FormControl(),
    course:new FormControl(),
    remarks:new FormControl()
  })
  addStudent(){
    this.studentService
    .addStudent(this.studentForm.value)
    .subscribe((data)=>{
      console.log("inside addstudent ",data)
    })
  }
}
