import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quarterly-truck-usage-report',
  templateUrl: './quarterly-truck-usage-report.component.html',
  styleUrls: ['./quarterly-truck-usage-report.component.css'],
})
export class QuarterlyTruckUsageReportComponent implements OnInit {
  customers1: {name: string, country: string, representative: {image: string, name: string}, status: string}[] = [];
  originalCustomers1: {name: string, country: string, representative: {image: string, name: string}, status: string}[] = [];
  nameFilter: string = '';
  countryFilter: string = '';
  countryList: string [] = [];
  numberFiltersApplied = 0;
  filtersAppliedList: {colName: string, value: string}[] = [];
  representativeNameFilter: string = '';
  statusFilter: string = '';
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'country', header: 'Country' },
    { field: 'name', header: 'Representative' },
    { field: 'Representative.image', header: 'RepresentativeImage' },
    { field: 'status', header: 'Status' },
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
      {
        name: 'ahamd',
        country: 'uk',
        representative: {
          name: 'am11y',
          image: 'assets/04-nature_721703848.jpg',
        },
        status: 'qualified',
      },
      {
        name: 'sal',
        country: 'swk',
        representative: {
          name: 'motasem',
          image: 'assets/04-nature_721703848.jpg',
        },
        status: 'unqualified',
      },
    ];
    this.originalCustomers1 = this.customers1;
    this.countryList = this.customers1.map((customer) => customer.country);
    this.countryList.unshift('all')
    // this.customerService.getCustomersMedium().then(data => this.customers1 = data);
    // this.customerService.getCustomersMedium().then(data => this.customers2 = data);
  }

  manageFilter(value: any, colName: string = 'name') {
    const val = value?.target?.value || value.value;
    console.log(val)
    this.customers1 = this.originalCustomers1;
    if (!val || val === 'all') {
      this.filtersAppliedList = this.filtersAppliedList.filter((filter) => filter.colName !== colName);
    } else {
      this.filtersAppliedList.forEach((filter) => {
        if ( filter.colName === colName) {
          filter.value = val;
        }
      });

      this.filtersAppliedList.push({colName,value: val});
    }
    this.filtersAppliedList.forEach((filter) => {
      this.applyFilter(filter.value, filter.colName);
    });
  }


  applyFilter(value: string, colName: string = 'name') {
    this.customers1 = this.customers1.filter((customer: any) => {
      if (typeof(customer[colName])  === 'string') {
        return customer[colName].includes(value);
      }
      return customer[colName].name.includes(value);
    })
  }
  onPageChange(value: any, rows: number) {
    console.log(value, rows)
  }
}
