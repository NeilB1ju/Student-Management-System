import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Student from '../../Student';

@Injectable({
  providedIn: 'root',
})
export class EditStudentService {
  studentToBeEdited = new Subject<Student>();

  saveStudent(student: Student): void {
    this.studentToBeEdited.next({ ...student });
  }
}
