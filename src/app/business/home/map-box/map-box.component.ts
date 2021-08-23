import { MapBoxService } from './../services/map-box.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css'],
  providers: [
    MapBoxService
  ]
})
export class MapBoxComponent implements OnInit {
  // @ViewChild('map') map: Eleme/*  */ntRef<HTMLInputElement>;

  constructor(private mapService: MapBoxService) { }

  ngOnInit(): void {
    this.mapService.buildMap()

  }

}
