import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapserviceService {
  private geoJsonUrl = 'assets/geojson/madhya-pradesh-districts.geo.json'; // Path to your GeoJSON file

  constructor(private http: HttpClient) { }

  getMapData(): Observable<any> {
    return this.http.get(this.geoJsonUrl);
  }
}
