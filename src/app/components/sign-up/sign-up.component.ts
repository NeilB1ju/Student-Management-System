import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import LoginCredentials from '../../LoginCredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  userName!: string;
  password!: string;
  confirmPassword?: string;

  passwordDoNotMatch: boolean = false;
  usernameExists: boolean = false;

  checkPassword(): void {
    this.passwordDoNotMatch = false;
    this.usernameExists = false;

    if (this.loginService.checkUsernamePresence(this.userName)) {
      this.usernameExists = true;
    } else if (this.password !== this.confirmPassword) {
      this.passwordDoNotMatch = true;
    } else {
      const loginCredential: LoginCredentials = {
        username: this.userName,
        password: this.password,
      };
      this.loginService.addLogin(loginCredential);
      this.router.navigate(['/']);
    }
  }
}
