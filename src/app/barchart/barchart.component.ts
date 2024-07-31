import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required for Angular template binding
  chartOptions: Highcharts.Options = {}; // Chart options type

  constructor() { }

  ngOnInit() {
    const categories = ['BankMANAGED', 'MFP', 'FIXED', 'EQUITY', 'CSP'];
    const data = [10, 20, 30, 40, 50];
    const margin = 10; // 10px margin
    const markerData = data.map((value, index) => ({
      x: index,
      y: value + margin // Offset by 10px (adjust according to y-axis scale)
    }));

    this.chartOptions = {
      chart: {
        type: 'column', // Ensure the type is 'column'
        height: 400
      },
      title: {
        text: 'Asset Under Management By Product' // Update title if needed
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      series: [{
        name: 'Assets',
        type: 'column',
        data: data,
        color: '#6066AC',
      }, {
        type: 'scatter',
        name: 'Loss Indicator',
        data: markerData,
        marker: {
          symbol: 'triangle-down',
          fillColor: 'red',
          lineWidth: 1,
          lineColor: 'red',
          height: 10,
          width: 10
        }
      }]
    };

    Highcharts.chart('container', this.chartOptions);
  }
}