import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrl: './navbar-top.component.css',
})
export class NavbarTopComponent {
  constructor(
    private loginService: LoginService,
    private darkModeService: DarkModeService
  ) {}
  username: string = this.loginService.currentUsername;

  lightMode!: boolean;

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.lightMode = darkMode;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
