import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import { MapserviceService } from '../mapservice.service';

HighchartsMap(Highcharts);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options | undefined ;

  constructor(private mapService: MapserviceService) {}

  ngOnInit(): void {
    this.mapService.getMapData().subscribe((mapData: any) => {
      this.chartOptions = this.initializeChartOptions(mapData);
      Highcharts.chart('containerMap', this.chartOptions);
    });
  }

  private initializeChartOptions(mapData: any): Highcharts.Options {
    return {
      chart: {
        map: 'custom/madhya-pradesh'
      },
      title: {
        text: 'Assets Distribution in Madhya Pradesh'
      },
      colorAxis: {
        min: 0,
        stops: [
          [0, '#EFEFFF'],
          [0.5, '#4444FF'],
          [1, '#000022']
        ]
      },
      series: [{
        type: 'map',
        name: 'Assets',
        data: [
          ['district1', 10],
          ['district2', 20],
          ['district3', 30],
          ['district4', 40],
          ['district5', 50],
          // Add actual data for each district
        ],
        mapData: mapData,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.value}'
        },
        states: {
          hover: {
            color: '#BADA55'
          }
        }
      }]
    };
  }
}
