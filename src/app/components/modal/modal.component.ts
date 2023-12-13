import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../../services/student/student.service';
import { DeleteCommunicationService } from '../../services/delete-communication/delete-communication.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  rollNumberToDelete?: any;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private studentService: StudentService,
    private deleteCommunicationService: DeleteCommunicationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.rollNumberToDelete = data.roll_no;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  deleteUser(): void {
    this.studentService.deleteStudent(+this.rollNumberToDelete);
    this.deleteCommunicationService.emitStudentDeleted();
    this.closeModal();
  }
}
