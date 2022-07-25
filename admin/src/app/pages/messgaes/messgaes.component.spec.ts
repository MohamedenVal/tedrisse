import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessgaesComponent } from './messgaes.component';

describe('MessgaesComponent', () => {
  let component: MessgaesComponent;
  let fixture: ComponentFixture<MessgaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessgaesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessgaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
