import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import mapDataUSA from '@highcharts/map-collection/countries/us/us-all.geo.json';
import HighchartsMap from 'highcharts/modules/map';

HighchartsMap(Highcharts);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    this.chartOptions = this.initializeChartOptions();
  }

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  private initializeChartOptions(): Highcharts.Options {
    return {
      chart: {
        map: 'countries/us/us-all'
      },
      title: {
        text: 'Assets Under Management By advisors'
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
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        data: [
          ['us-ca', 10],
          ['us-tx', 11],
          ['us-ny', 12],
          ['us-fl', 13],
          ['us-il', 14],
          ['us-pa', 15],
          ['us-oh', 16],
          ['us-mi', 17],
          ['us-ga', 18],
          ['us-nc', 19],
          ['us-new', 20]
     
        ],
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    };
  }
}


