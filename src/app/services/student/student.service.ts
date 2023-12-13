import { Injectable } from '@angular/core';
import Student from '../../Student';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private loginService: LoginService) {}

  getLocalStorageKey(): string {
    return `students_${this.loginService.currentUsername}`;
  }

  students: Student[] = [];

  getStudents(): Student[] {
    this.loadFromLocalStorage();
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
    this.saveToLocalStorage();
  }

  deleteStudent(roll_no: number): void {
    this.students = this.students.filter((student: Student) => {
      return student.roll_no !== roll_no;
    });
    this.saveToLocalStorage();
  }

  saveToLocalStorage(): void {
    const localStorageKey = this.getLocalStorageKey();
    localStorage.setItem(localStorageKey, JSON.stringify(this.students));
  }

  loadFromLocalStorage(): void {
    const localStorageKey = this.getLocalStorageKey();
    const storedStudents = localStorage.getItem(localStorageKey);
    if (storedStudents) {
      this.students = JSON.parse(storedStudents);
    } else {
      this.students = [];
    }
  }

  checkRollNumberPresence(rollNumber: number): boolean {
    for (const student of this.students || []) {
      if (student.roll_no == rollNumber) {
        return true;
      }
    }
    return false;
  }
}
