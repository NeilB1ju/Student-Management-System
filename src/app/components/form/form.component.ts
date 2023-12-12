import { Component } from '@angular/core';
import Student from '../../Student';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private studentService: StudentService) {}

  name: string = '';
  roll_no: any = '';
  state: string = '';
  city: string = '';
  pincode: any = '';
  dob: string = '';
  address1: string = '';
  address2: string = '';
  country: string = '';
  department: string = '';
  phone: any = '';

  invalidPhoneNumber: boolean = false;
  invalidPincode: boolean = false;
  invalidRollNumber: boolean = false;
  missingFields: boolean = false;

  onSubmit(): void {
    this.invalidPhoneNumber = false;
    this.invalidPincode = false;
    this.invalidRollNumber = false;
    this.missingFields = false;

    //Form Validation
    if (
      this.name.trim() === '' ||
      this.roll_no === '' ||
      this.state.trim() === '' ||
      this.city.trim() === '' ||
      this.pincode === '' ||
      this.dob === '' ||
      this.address1.trim() === '' ||
      this.country.trim() === '' ||
      this.department.trim() === '' ||
      +this.phone === null
    ) {
      this.missingFields = true;
    } else if (!/^[789]\d{9}$/.test(String(this.phone))) {
      this.invalidPhoneNumber = true;
    } else if (!/^[1-9][0-9]{5}$/.test(String(this.pincode))) {
      this.invalidPincode = true;
    } else if (this.studentService.checkRollNumberPresence(this.roll_no)) {
      this.invalidRollNumber = true;
    } else {
      //Form has been validated
      const student: Student = {
        name: this.name,
        roll_no: +this.roll_no,
        state: this.state,
        city: this.city,
        pincode: +this.pincode,
        dob: this.dob,
        address1: this.address1,
        address2: this.address2,
        country: this.country,
        department: this.department,
        phone: +this.phone,
      };

      //Pass value to the service so it can be added to the students array
      this.studentService.addStudent(student);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.name = '';
    this.roll_no = '';
    this.state = '';
    this.city = '';
    this.pincode = '';
    this.dob = '';
    this.address1 = '';
    this.address2 = '';
    this.country = '';
    this.department = '';
    this.phone = '';
  }
}
