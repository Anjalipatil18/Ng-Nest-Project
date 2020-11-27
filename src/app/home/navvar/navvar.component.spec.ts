import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavvarComponent } from './navvar.component';

describe('NavvarComponent', () => {
  let component: NavvarComponent;
  let fixture: ComponentFixture<NavvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
