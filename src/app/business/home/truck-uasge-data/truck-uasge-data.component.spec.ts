import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckUasgeDataComponent } from './truck-uasge-data.component';

describe('TruckUasgeDataComponent', () => {
  let component: TruckUasgeDataComponent;
  let fixture: ComponentFixture<TruckUasgeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckUasgeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckUasgeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
