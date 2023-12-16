import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-api',
  templateUrl: './modal-api.component.html',
  styleUrl: './modal-api.component.css',
})
export class ModalApiComponent {
  personToDisplay!: any;

  constructor(
    private dialogRef: MatDialogRef<ModalApiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.personToDisplay = data.person;
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
