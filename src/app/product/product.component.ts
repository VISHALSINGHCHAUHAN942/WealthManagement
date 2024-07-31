import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required for Angular template binding
  chartOptions: Highcharts.Options = {}; // Chart options type

  constructor() { }

  ngOnInit() {
    const categories = ['BankMANAGED', 'MFP', 'FIXED', 'EQUITY', 'CSP'];
    const data = [10, 20, 30, 40, 50];
    const margin = 10; // 10px margin for vertical placement
    const xOffset = 0.25; // Offset for horizontal placement, adjust as necessary

    const redMarkerData = data.map((value, index) => ({
      x: index - xOffset,
      y: value + margin
    }));

    const greenMarkerData = data.map((value, index) => ({
      x: index + xOffset,
      y: value + margin
    }));

    this.chartOptions = {
      chart: {
        type: 'bar', 
        height: 400
      },
      title: {
        text: 'Asset Under Management By Product' 
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
        data: redMarkerData,
        marker: {
          symbol: 'triangle-down',
          fillColor: 'red',
          lineWidth: 1,
          lineColor: 'red',
          height: 10,
          width: 10
        }
      }, {
        type: 'scatter',
        name: 'Gain Indicator',
        data: greenMarkerData,
        marker: {
          symbol: 'triangle-down',
          fillColor: 'green',
          lineWidth: 1,
          lineColor: 'green',
          height: 10,
          width: 10
        }
      }]
    };

    Highcharts.chart('containerB', this.chartOptions);
  }
}
