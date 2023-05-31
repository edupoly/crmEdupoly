import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  constructor(public fb:FormBuilder,public cS:CourseService){}

  newCourseForm=this.fb.group({
    title:[],
    price:[]
  })
  addCourse(){
    this.cS.addCourse(this.newCourseForm.value).subscribe((res)=>{
      console.log(res)
    })
  }
}
