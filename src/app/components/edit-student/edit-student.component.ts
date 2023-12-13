import { Component, OnInit } from '@angular/core';
import Student from '../../Student';
import { EditStudentService } from '../../services/edit-student/edit-student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent {
  constructor(private editStudentService: EditStudentService) {}

  student!: Student;

  ngOnInit(): void {
    this.editStudentService.studentToBeEdited.subscribe((student) => {
      this.student = student;
    });
  }
}
