import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSidebarComponent } from './lesson-sidebar.component';

describe('LessonSidebarComponent', () => {
  let component: LessonSidebarComponent;
  let fixture: ComponentFixture<LessonSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
