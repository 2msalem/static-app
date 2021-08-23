import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyTruckUsageReportComponent } from './quarterly-truck-usage-report.component';

describe('QuarterlyTruckUsageReportComponent', () => {
  let component: QuarterlyTruckUsageReportComponent;
  let fixture: ComponentFixture<QuarterlyTruckUsageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterlyTruckUsageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterlyTruckUsageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
