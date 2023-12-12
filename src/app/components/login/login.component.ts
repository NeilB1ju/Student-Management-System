import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  userName!: string;
  password!: string;

  invalidUsername: boolean = false;
  invalidPassword: boolean = false;

  onLogin(): void {
    this.invalidPassword = false;
    this.invalidUsername = false;
    const result = this.loginService.validateLogin(
      this.userName,
      this.password
    );
    if (result == 'INVALID_PASSWORD') {
      this.invalidPassword = true;
    } else if (result == 'INVALID_USERNAME') {
      this.invalidUsername = true;
    } else {
      this.loginService.currentUsername = this.userName;
      this.router.navigate(['/dashboard']);
    }
  }
}
