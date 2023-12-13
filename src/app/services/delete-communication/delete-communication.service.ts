import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteCommunicationService {
  public studentDeleted = new EventEmitter<void>();

  emitStudentDeleted(): void {
    this.studentDeleted.emit();
  }
}
