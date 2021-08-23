import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoCustomerRoutingModule } from './demo-customer-routing.module';
import { DemoCustomerComponent } from './demo-customer.component';


@NgModule({
  declarations: [
    DemoCustomerComponent
  ],
  imports: [
    CommonModule,
    DemoCustomerRoutingModule
  ]
})
export class DemoCustomerModule { }
