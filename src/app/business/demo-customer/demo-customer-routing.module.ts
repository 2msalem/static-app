import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCustomerComponent } from './demo-customer.component';

const routes: Routes = [{ path: '', component: DemoCustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoCustomerRoutingModule { }
