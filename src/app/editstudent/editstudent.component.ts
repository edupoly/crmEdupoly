import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl} from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
  constructor(public ar:ActivatedRoute,public studentService:StudentService){}
  studentForm:FormGroup= new FormGroup({
    fullname:new FormControl(),
    phonenumber:new FormControl(),
    email:new FormControl(),
    course:new FormControl(),
    remarks:new FormControl(),
    id:new FormControl()
  })
  ngOnInit(){
    this.ar.queryParams.subscribe((data)=>{
      this.studentForm.setValue(data)
    })
  }
  updateStudent(){
    this.studentService.updateStudent(this.studentForm.value).subscribe((updatedStudent)=>{
      console.log("updatedStudent::",updatedStudent)
    })
  }
}
