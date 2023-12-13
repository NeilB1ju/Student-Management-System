import { TestBed } from '@angular/core/testing';

import { DeleteCommunicationService } from './delete-communication.service';

describe('DeleteCommunicationService', () => {
  let service: DeleteCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
