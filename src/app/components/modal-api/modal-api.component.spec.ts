import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiComponent } from './modal-api.component';

describe('ModalApiComponent', () => {
  let component: ModalApiComponent;
  let fixture: ComponentFixture<ModalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
