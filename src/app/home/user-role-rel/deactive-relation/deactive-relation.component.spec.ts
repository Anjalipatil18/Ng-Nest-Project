import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveRelationComponent } from './deactive-relation.component';

describe('DeactiveRelationComponent', () => {
  let component: DeactiveRelationComponent;
  let fixture: ComponentFixture<DeactiveRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
