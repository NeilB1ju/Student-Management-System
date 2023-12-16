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

  sortStudents(sortBy: string): void {
    this.students.sort((a, b) => {
      switch (sortBy) {
        case 'roll_no':
          return a.roll_no - b.roll_no;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'department':
          return a.department.localeCompare(b.department);
        default:
          return 0;
      }
    });
    this.saveToLocalStorage(); // Save the sorted array to local storage
  }
  searchStudents(searchTerm: string): Student[] {
    return this.students.filter((student: Student) => {
      return (
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.address1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.address2.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.roll_no == +searchTerm ||
        student.phone == +searchTerm
      );
    });
  }
}
