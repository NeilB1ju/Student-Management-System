import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrl: './api-list.component.css',
})
export class ApiListComponent {
  constructor(private apiService: ApiService) {}

  users?: any;

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((user) => {
      this.users = user;
      this.users = this.users.users.filter((user: any) => {
        return user.id !== 29 && user.id !== 30;
      });
    });
  }
}
