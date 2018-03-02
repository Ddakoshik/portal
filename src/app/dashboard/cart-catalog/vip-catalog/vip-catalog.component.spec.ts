import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCatalogComponent } from './vip-catalog.component';

describe('VipCatalogComponent', () => {
  let component: VipCatalogComponent;
  let fixture: ComponentFixture<VipCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
