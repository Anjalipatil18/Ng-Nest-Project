import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRelationComponent } from './active-relation.component';

describe('ActiveRelationComponent', () => {
  let component: ActiveRelationComponent;
  let fixture: ComponentFixture<ActiveRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
