declare module 'react-apexcharts' {
    import { Component } from 'react';
    import { ApexOptions } from 'apexcharts';
  
    interface Props {
      options: ApexOptions;
      series: ApexOptions['series'];
      type: string;
      width?: string | number;
      height?: string | number;
    }
  
    export default class ReactApexChart extends Component<Props> {}
  }
  