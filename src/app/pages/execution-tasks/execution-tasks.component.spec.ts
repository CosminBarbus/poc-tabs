import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionTasksComponent } from './execution-tasks.component';

describe('ExecutionTasksComponent', () => {
  let component: ExecutionTasksComponent;
  let fixture: ComponentFixture<ExecutionTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
