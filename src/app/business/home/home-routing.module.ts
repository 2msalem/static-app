import { ChartsComponent } from './charts/charts.component';
import { CalenderComponent } from './calender/calender.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MapBoxComponent } from './map-box/map-box.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'calender',
        pathMatch: 'full',
      },
      {
        path: 'calender',
        component: CalenderComponent,
      },
      {
        path: 'map-box',
        component: MapBoxComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
