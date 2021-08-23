import { Component, OnInit } from '@angular/core';
import { tabMenuItems } from 'src/app/core/constant/tab-menu-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabMenuItems = tabMenuItems;
  constructor() { }

  ngOnInit(): void {
  }
}
