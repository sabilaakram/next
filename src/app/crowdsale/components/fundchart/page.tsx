import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const FundingAllocationChart = () => {
  const seriesData = [355, 150, 10, 0.04];
  const labelsData = [
    'Token',
    'Token Sale',
    'Hard Cap',
    'Coin Price',
  ];
  const colorsData = ['#0BDE99', '#08BDB5', '#007471', '#435965'];

  const options: ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: 'donut',
    },
    series: seriesData,
    labels: labelsData,
    colors: colorsData,
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 380,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      show: false, // Hide the default legend
    },
  };

  return (
    <div className="flex flex-col items-center">
      <ReactApexChart options={options} series={seriesData} type="donut" width={300} />
      <div className="flex flex-col items-start mt-4 font-normal font-Montserrat text-[12px]">
        {labelsData.map((label, index) => (
          <div key={index} className="flex items-center justify-start text-start mb-2 ">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: colorsData[index] }}
            ></div>
            <span className="font-bold p-1 gap-1"> {seriesData[index]} millions </span> {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundingAllocationChart;