import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ModalApiComponent } from '../modal-api/modal-api.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrl: './api-list.component.css',
})
export class ApiListComponent {
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  users?: any;

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((user) => {
      this.users = user;
      this.users = this.users.users.filter((user: any) => {
        return user.id !== 29 && user.id !== 30;
      });
    });
  }

  openModal(Person: any): void {
    this.dialog.open(ModalApiComponent, {
      data: {
        person: Person,
      },
    });
    console.log(Person);
  }
}
