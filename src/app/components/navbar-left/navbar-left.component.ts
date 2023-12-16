import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrl: './navbar-left.component.css',
})
export class NavbarLeftComponent {
  constructor(private darkModeService: DarkModeService) {}

  lightMode!: boolean;

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.lightMode = darkMode;
    });
  }
}
