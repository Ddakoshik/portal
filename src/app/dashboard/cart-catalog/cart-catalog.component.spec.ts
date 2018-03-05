import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCatalogComponent } from './cart-catalog.component';

describe('CartCatalogComponent', () => {
  let component: CartCatalogComponent;
  let fixture: ComponentFixture<CartCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
