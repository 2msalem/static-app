import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCustomerComponent } from './demo-customer.component';

describe('DemoCustomerComponent', () => {
  let component: DemoCustomerComponent;
  let fixture: ComponentFixture<DemoCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
