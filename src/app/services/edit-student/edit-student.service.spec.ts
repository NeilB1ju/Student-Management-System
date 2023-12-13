import { TestBed } from '@angular/core/testing';

import { EditStudentService } from './edit-student.service';

describe('EditStudentService', () => {
  let service: EditStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
