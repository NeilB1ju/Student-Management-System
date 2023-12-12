import { Injectable } from '@angular/core';
import LoginCredentials from '../../LoginCredentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {
    //Loading data from local storage on itialization
    this.loadFromLocalStorage();
  }

  loginCredentials: LoginCredentials[] = [
    {
      username: 'Neil',
      password: 'Neilmahin99!',
    },
  ];

  localStorageKey: string = 'loginDetails';

  currentUsername: string = '';

  addLogin(login: LoginCredentials): void {
    this.loginCredentials.push(login);
    this.saveToLocalStorage();
  }

  modifyLogin(login: LoginCredentials): void {
    this.loginCredentials.map((currentLogin: LoginCredentials) => {
      if (currentLogin.username == login.username) {
        currentLogin.password = login.password;
      }
    });
    this.saveToLocalStorage();
  }

  validateLogin(userName: string, password: string): string {
    for (const user of this.loginCredentials || []) {
      if (user.username === userName && user.password === password) {
        return 'SUCCESS';
      } else if (user.username === userName && user.password !== password) {
        return 'INVALID_PASSWORD';
      }
    }

    return 'INVALID_USERNAME';
  }

  checkUsernamePresence(userName: string): boolean {
    for (const user of this.loginCredentials || []) {
      if (user.username == userName) {
        return true;
      }
    }
    return false;
  }

  saveToLocalStorage(): void {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.loginCredentials)
    );
  }

  loadFromLocalStorage(): void {
    const storedLogin = localStorage.getItem(this.localStorageKey);
    if (storedLogin) {
      this.loginCredentials = JSON.parse(storedLogin);
    }
  }
}
