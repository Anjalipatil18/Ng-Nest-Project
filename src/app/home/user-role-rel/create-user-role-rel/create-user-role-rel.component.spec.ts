import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserRoleRelComponent } from './create-user-role-rel.component';

describe('CreateUserRoleRelComponent', () => {
  let component: CreateUserRoleRelComponent;
  let fixture: ComponentFixture<CreateUserRoleRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserRoleRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserRoleRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
