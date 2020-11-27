import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveUsersComponent } from './deactive-users.component';

describe('DeactiveUsersComponent', () => {
  let component: DeactiveUsersComponent;
  let fixture: ComponentFixture<DeactiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
