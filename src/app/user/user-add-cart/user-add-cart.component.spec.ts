import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddCartComponent } from './user-add-cart.component';

describe('UserAddCartComponent', () => {
  let component: UserAddCartComponent;
  let fixture: ComponentFixture<UserAddCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
