import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleRelComponent } from './user-role-rel.component';

describe('UserRoleRelComponent', () => {
  let component: UserRoleRelComponent;
  let fixture: ComponentFixture<UserRoleRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
