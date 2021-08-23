import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { headerItems } from '../core/constant/headers-items';
import { sideBarItems } from '../core/constant/sidebar-items';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  public headers = headerItems;
  public sidebarItems = sideBarItems;
  display = true;

  constructor() { }

  ngOnInit() {
  }

}
