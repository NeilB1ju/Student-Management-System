import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal-delete-student/modal.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import { ModalApiComponent } from './components/modal-api/modal-api.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddStudentComponent,
    StudentListComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    EditStudentComponent,
    FormComponent,
    ModalComponent,
    NavbarTopComponent,
    NavbarLeftComponent,
    ApiListComponent,
    ModalApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
