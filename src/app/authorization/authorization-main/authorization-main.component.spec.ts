import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationMainComponent } from './authorization-main.component';

describe('AuthorizationMainComponent', () => {
  let component: AuthorizationMainComponent;
  let fixture: ComponentFixture<AuthorizationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
