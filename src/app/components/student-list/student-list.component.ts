import { Component } from '@angular/core';
import { StudentService } from '../../services/student/student.service';
import Student from '../../Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  constructor(private studentService: StudentService, private router: Router) {}

  //Add some sort of condition here that makes it so that the data is fetched everytime this component is
  students: Student[] = this.studentService.getStudents();

  deleteStudent(roll_no: any) {
    this.studentService.deleteStudent(+roll_no);
    this.students = this.studentService.students;
  }

  editStudent(student: Student): void {
    // this.router.navigate(['/edit']);
  }
}
