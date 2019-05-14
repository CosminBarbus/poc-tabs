import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDefinitionComponent } from './item-definition.component';

describe('ItemDefinitionComponent', () => {
  let component: ItemDefinitionComponent;
  let fixture: ComponentFixture<ItemDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
