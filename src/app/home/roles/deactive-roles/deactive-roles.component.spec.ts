import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveRolesComponent } from './deactive-roles.component';

describe('DeactiveRolesComponent', () => {
  let component: DeactiveRolesComponent;
  let fixture: ComponentFixture<DeactiveRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
