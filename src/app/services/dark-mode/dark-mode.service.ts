import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  toggleDarkMode(): void {
    const currentDarkModeState = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentDarkModeState);
    document.body.classList.toggle('light-mode', this.darkModeSubject.value);
  }

  currentState() {
    return this.darkModeSubject.value;
  }
}
