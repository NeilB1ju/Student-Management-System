import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from '../../services/student/student.service';
import Student from '../../Student';
import { Router } from '@angular/router';
import { EditStudentService } from '../../services/edit-student/edit-student.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { DeleteCommunicationService } from '../../services/delete-communication/delete-communication.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  constructor(
    private studentService: StudentService,
    private router: Router,
    private editStudentService: EditStudentService,
    private dialog: MatDialog,
    private deleteCommunicationService: DeleteCommunicationService
  ) {}

  students: Student[] = [];

  editStudent(student: Student): void {
    this.editStudentService.setStudentData(student);
    this.studentService.deleteStudent(+student.roll_no);
    this.router.navigate(['/edit']);
  }

  openModal(rollNumber: any): void {
    this.dialog.open(ModalComponent, {
      data: {
        roll_no: rollNumber,
      },
    });
  }

  studentsArrayEmpty: boolean = false;

  //Clear and reinitialize the student list everytime the component is loaded
  ngOnInit(): void {
    this.studentsArrayEmpty = false;
    this.students = this.studentService.getStudents();
    if (this.students.length == 0) {
      this.studentsArrayEmpty = true;
    }

    // Subscribe to the event emitted when a student is deleted
    this.deleteCommunicationService.studentDeleted.subscribe(() => {
      // Update the student list
      this.students = this.studentService.getStudents();
      if (this.students.length == 0) {
        this.studentsArrayEmpty = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.students! = [];
  }
}
