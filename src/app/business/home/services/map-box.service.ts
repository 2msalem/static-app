import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import * as mapboxgl from 'mapbox-gl';

@Injectable()
export class MapBoxService {
  map: any;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 45.899977;
  lng = 6.172652;
  zoom = 12
  constructor() {
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiMm1zYWxlbSIsImEiOiJja3NuY2d5MGoxbmJ3MnBveHU1c2hlenV3In0.zEMXueNIM9kWtF_MshamYg',
      container:  'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
   this.map.addControl(new mapboxgl.NavigationControl());
  }
}
