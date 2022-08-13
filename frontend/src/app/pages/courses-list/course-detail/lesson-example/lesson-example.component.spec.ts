import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonExampleComponent } from './lesson-example.component';

describe('LessonExampleComponent', () => {
  let component: LessonExampleComponent;
  let fixture: ComponentFixture<LessonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
