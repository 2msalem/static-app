import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-route.module';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    PanelMenuModule
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
