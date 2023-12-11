import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email!: string;
  password!: string;

  display(): void {
    console.log(this.email, this.password);
  }
}
