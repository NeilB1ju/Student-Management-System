import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from '../../services/student/student.service';
import Student from '../../Student';
import { Router } from '@angular/router';
import { EditStudentService } from '../../services/edit-student/edit-student.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal-delete-student/modal.component';
import { DeleteCommunicationService } from '../../services/delete-communication/delete-communication.service';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';

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
    private deleteCommunicationService: DeleteCommunicationService,
    private darkModeService: DarkModeService
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
  lightMode!: boolean;

  //Clear and reinitialize the student list everytime the component is loaded
  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.lightMode = darkMode;
    });

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

  //Used to apply different colors on successive rows
  isEven(index: number): boolean {
    return index % 2 === 0;
  }

  selectedSortOption!: string;
  onSortOptionChange(): void {
    this.studentService.sortStudents(this.selectedSortOption);
    this.students = this.studentService.getStudents();
  }

  searchTerm: string = '';
  onSearchChange(): void {
    if (this.searchTerm.trim() === '') {
      this.students = this.studentService.getStudents();
    } else {
      this.students = this.studentService.searchStudents(this.searchTerm);
    }
  }
}
