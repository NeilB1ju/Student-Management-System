import { Component } from '@angular/core';
import LoginCredentials from '../../LoginCredentials';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  userName!: string;
  password!: string;
  confirmPassword?: string;

  invalidUsername: boolean = false;
  passwordDoNotMatch: boolean = false;

  checkPassword(): void {
    this.invalidUsername = false;
    this.passwordDoNotMatch = false;
    if (!this.loginService.checkUsernamePresence(this.userName)) {
      this.invalidUsername = true;
    } else if (this.password !== this.confirmPassword) {
      this.passwordDoNotMatch = true;
    } else {
      const loginCredential: LoginCredentials = {
        username: this.userName,
        password: this.password,
      };
      this.loginService.modifyLogin(loginCredential);
      this.router.navigate(['/']);
    }
  }
}
