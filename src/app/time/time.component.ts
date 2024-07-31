import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required for Angular template binding
  chartOptions: Highcharts.Options = {}; // Chart options type

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'line', // Set the chart type to 'line'
        height: 400
      },
      title: {
        text: 'Directional Entries Over Time' // Update title as needed
      },
      xAxis: {
        categories: ['Entry 1', 'Entry 2', 'Entry 3', 'Entry 4', 'Entry 5']
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      series: [{
        name: 'East',
        type: 'line',
        data: [5, 7, 3, 5, 8],
        color: '#FF0000' // Customize color if needed
      }, {
        name: 'West',
        type: 'line',
        data: [3, 2, 5, 7, 6],
        color: '#00FF00' // Customize color if needed
      }, {
        name: 'North',
        type: 'line',
        data: [8, 5, 6, 9, 3],
        color: '#0000FF' // Customize color if needed
      }, {
        name: 'South',
        type: 'line',
        data: [6, 9, 4, 2, 7],
        color: '#FFFF00' // Customize color if needed
      }]
    };

    Highcharts.chart('containerTime', this.chartOptions);
  }
}
