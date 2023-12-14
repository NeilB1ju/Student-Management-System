import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrl: './navbar-top.component.css',
})
export class NavbarTopComponent {
  constructor(private loginService: LoginService) {}
  username: string = this.loginService.currentUsername;
}
