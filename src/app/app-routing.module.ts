import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  {
    path:'studentRegistration',
    component:StudentRegistrationComponent
  },
  {
    path:'showStudents',
    component:StudentsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
