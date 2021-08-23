import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarterly-truck-usage-report',
  templateUrl: './quarterly-truck-usage-report.component.html',
  styleUrls: ['./quarterly-truck-usage-report.component.css'],
})
export class QuarterlyTruckUsageReportComponent implements OnInit {
  customers1: any[] = [];
  nameFilter: string = '';
  countryFilter: string = '';
  representativeNameFilter: string = '';
  statusFilter: string = '';
  cols = [
    { field: 'name', header: 'status' },
    { field: 'country', header: 'status' },
    { field: 'representative', header: 'status' },
    { field: 'status', header: 'status' },
  ];
  constructor() {}

  ngOnInit() {
    this.customers1 = [
      {
        name: 'motasem',
        country: 'jordan',
        representative: {
          name: 'amy',
          image: 'assets/04-nature_721703848.jpg',
        },
        status: 'qualified',
      },
      {
        name: 'maher',
        country: 'usa',
        representative: {
          name: 'motasem',
          image: 'assets/04-nature_721703848.jpg',
        },
        status: 'unqualified',
      },
    ];
    // this.customerService.getCustomersMedium().then(data => this.customers1 = data);
    // this.customerService.getCustomersMedium().then(data => this.customers2 = data);
  }
  filter(value: any, colName: string) {
    console.log(value, colName)
  }
  onPageChange(value: any, rows: number) {
    console.log(value, rows)
  }
}
