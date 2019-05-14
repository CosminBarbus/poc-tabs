import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionTasksComponent } from './definition-tasks.component';

describe('DefinitionTasksComponent', () => {
  let component: DefinitionTasksComponent;
  let fixture: ComponentFixture<DefinitionTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
