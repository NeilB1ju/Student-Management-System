import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Student from '../../Student';

@Injectable({
  providedIn: 'root',
})
export class EditStudentService {
  studentToBeEdited: any = {};

  setStudentData(student: Student): void {
    this.studentToBeEdited = student;
  }

  getStudentData(): any {
    return this.studentToBeEdited;
  }
}
