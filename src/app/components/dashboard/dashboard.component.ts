import { Component } from '@angular/core';
import {AgCartesianSeriesTooltipRendererParams, AgChartOptions, AgPolarChartOptions, AgTooltipRendererResult} from 'ag-charts-community';
import { getData } from './barchartdata';
// import { getDonutData } from './piechartdata';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  public options: AgChartOptions | any;
  public option: AgPolarChartOptions | any;

  
  constructor() {
    this.options = {
      autoSize: true,
      data: getData(),
      theme: {
        palette: {
          fills: ['#5BC0EB', '#FDE74C', '#9BC53D', '#E55934', '#FA7921'],
          strokes: ['#4086a4', '#b1a235', '#6c8a2b', '#a03e24', '#af5517'],
        },
        overrides: {
          column: {
            series: {
              strokeWidth: 0,
             
              highlightStyle: {
                series: {
                  strokeWidth: 1,
                  dimOpacity: 0.3
                },
              },
            },
          },
        },
      },
      title: {
        text: '',
        // fontSize: 18,
      },
      // subtitle: {
      //   text: 'Victoria Line (2010)',
      // },
      footnote: {
        text: 'Source: Transport for London',
      },
      series: [
        {
          type: 'column',
          xKey: 'station',
          yKey: 'early',
          stacked: true,
          yName: 'Early'
          },
        {
          type: 'column',
          xKey: 'station',
          yKey: 'morningPeak',
          yName: 'Morning peak',
          stacked: true
          },
        {
          type: 'column',
          xKey: 'station',
          yKey: 'interPeak',
          yName: 'Between peak',
          stacked: true
          },
        {
          type: 'column',
          xKey: 'station',
          yKey: 'afternoonPeak',
          yName: 'Afternoon peak',
          stacked: true
          },
        {
          type: 'column',
          xKey: 'station',
          yKey: 'evening',
          yName: 'Evening',
          stacked: true
          },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          label: {
            rotation: 30,
          },
        },
        {
          type: 'number',
          position: 'left',
          label: {
            formatter: (params:any) => {
              return params.value / 1000 + 'k';
            },
          },
        },
      ],
      padding: {
        bottom: 10,
        top:30
      },
    };
    // this.option = {
    //   autoSize: true,
    //   title: {
    //     text: 'Desktop Browser Market Share 2020 vs 2022',
    //     fontSize: 18,
    //     spacing: 25,
    //   },
    //   padding: {
    //     top: 32,
    //     right: 20,
    //     bottom: 20,
    //     left: 20,
    //   },
    //   series: [
    //     {
    //       type: 'pie',
    //       ...sharedSeriesOptions,
    //       data: getDonutData(),
    //       outerRadiusRatio: 0.5,
    //       showInLegend: false,
    //       title: {
    //         text: 'January 2020',
    //         fontWeight: 'bold',
    //       },
    //     },
    //     {
    //       type: 'pie',
    //       ...sharedSeriesOptions,
    //       data: getData2022(),
    //       innerRadiusRatio: 0.7,
    //       title: {
    //         text: 'September 2022',
    //         fontWeight: 'bold',
    //       },
    //       calloutLabelKey: 'browser',
    //       calloutLabel: {
    //         minAngle: 25,
    //       },
    //       calloutLine: {
    //         strokeWidth: 1,
    //       },
    //       strokes: ['black'],
    //     },
    //   ],
    // };
  }

  ngOnInit() {}
  
  mainCard=[
    {
      cardImage : '../../../assets/images/fare_well_icon.svg',
      cardTitle : 'Farewell Grant',
      cardAmount : 32
    },
    {
      cardImage : '../../../assets/images/funeral_icon.svg',
      cardTitle : 'Funeral Grant',
      cardAmount : 23
    },
    {
      cardImage : '../../../assets/images/marraige_icon.svg',
      cardTitle : 'Marriage Grant',
      cardAmount : 35
    },
    {
      cardImage : '../../../assets/images/monthly_grant_icon.svg',
      cardTitle : 'Monthly Grant',
      cardAmount : 10
    },
    {
      cardImage : '../../../assets/images/scholarship_icon.svg',
      cardTitle : 'Scholarship Grant',
      cardAmount : 15
    },
  ]
  
}
const numFormatter = new Intl.NumberFormat('en-US');
const tooltip = {
  renderer: ({
    title,
    xValue,
    yValue,
  }: AgCartesianSeriesTooltipRendererParams): AgTooltipRendererResult => ({
    title,
    content: `${xValue}: ${numFormatter.format(yValue)}`,
  }),
};


// const numFormatter = new Intl.NumberFormat('en-US', {
//   style: 'percent',
//   maximumFractionDigits: 0,
// });
// let datum:any;
// const sharedSeriesOptions: AgPolarSeriesOptions = {
//   sectorLabelKey: 'share',
//   angleKey: 'share',
//   sectorLabel: {
//     color: 'white',
//     fontWeight: 'bold',
//     formatter: ({ datum, sectorLabelKey }) => {
//       return numFormatter.format(datum[sectorLabelKey!]);
//     },
//   },
//   fills: ['#49afda', '#57cc8b', '#f4b944', '#fb7451', '#b7b5ba'],
//   strokeWidth: 0,
//   legendItemKey: 'browser',
//   tooltip: {
//     renderer: ({ datum, color, sectorLabelKey }) => {
//       return [
//         `<div style="background-color: ${color}; padding: 4px 8px; border-top-left-radius: 5px; border-top-right-radius: 5px; color: white; font-weight: bold;">`,
//         datum['year'],
//         `</div>`,
//         `<div style="padding: 4px 8px;">`,
//         `  <strong>${datum['browser']}:</strong> ${numFormatter.format(
//           datum[sectorLabelKey!]
//         )}`,
//         `</div>`,
//       ].join('\n');
//     },
//   },
//   highlightStyle: {
//     item: {
//       fillOpacity: 0,
//       stroke: '#535455',
//       strokeWidth: 1,
//     },
//   },
// };