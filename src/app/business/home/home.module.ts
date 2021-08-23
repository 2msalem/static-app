// import { MapBoxService } from './services/map-box.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { CalenderComponent } from './calender/calender.component';
import {PanelModule} from 'primeng/panel';
import { MapBoxComponent } from './map-box/map-box.component';
import { QuarterlyTruckUsageReportComponent } from './quarterly-truck-usage-report/quarterly-truck-usage-report.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { TruckUasgeDataComponent } from './truck-uasge-data/truck-uasge-data.component';
import {FormsModule} from '@angular/forms'
import {ButtonModule} from 'primeng/button';
import { ChartsComponent } from './charts/charts.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    HomeComponent,
    CalenderComponent,
    MapBoxComponent,
    QuarterlyTruckUsageReportComponent,
    TruckUasgeDataComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TabMenuModule,
    PanelModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ChartModule
  ],
  providers: [

  ]
})
export class HomeModule { }
