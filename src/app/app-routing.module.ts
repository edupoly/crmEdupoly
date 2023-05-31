import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { AddcourseComponent } from './addcourse/addcourse.component';

const routes: Routes = [
  {
    path:'studentRegistration',
    component:StudentRegistrationComponent
  },
  {
    path:'showStudents',
    component:StudentsListComponent
  },
  {
    path:'editStudent',
    component:EditstudentComponent
  },
  {
    path:'addCourse',
    component:AddcourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
