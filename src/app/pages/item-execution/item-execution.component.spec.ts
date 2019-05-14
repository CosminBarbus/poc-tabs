import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExecutionComponent } from './item-execution.component';

describe('ItemExecutionComponent', () => {
  let component: ItemExecutionComponent;
  let fixture: ComponentFixture<ItemExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
