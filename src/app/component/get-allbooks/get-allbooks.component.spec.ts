import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllbooksComponent } from './get-allbooks.component';

describe('GetAllbooksComponent', () => {
  let component: GetAllbooksComponent;
  let fixture: ComponentFixture<GetAllbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
