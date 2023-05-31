import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StudentsListComponent } from './students-list/students-list.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { AddcourseComponent } from './addcourse/addcourse.component'
@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    NavbarComponent,
    StudentsListComponent,
    EditstudentComponent,
    AddcourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
