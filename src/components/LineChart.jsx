import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  spanGaps: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      // text: 'Line Chart',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 100
      },
      gridLines: {
        display:false
      } 
    },
  }
};

const LineChart = ({dataObj}) => {


    const [data, setData] = useState(null);

    useEffect(()=>{
        let labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
        const data = {
          labels,
          datasets: [
            {
              label: 'Clicks',
              data: dataObj.dataSet1,
              borderColor: 'rgb(74 222 128)',
              borderWidth: 2,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              tension: 0,
              pointStyle: false,
            },
            {
              label: 'Clicks',
              data: dataObj.dataSet2,
              borderColor: 'rgb(248 113 113)',
              borderWidth: 2,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              tension: 0,
              pointStyle: false,
            },
          ],
        };

        setData(data);
    },[dataObj])


  return (
    <div className="h-full w-5/6 canvas-div line" id="all_three_line-div d-inline-block">
      {
        data && <Line options={options} data={data} />
      }
    </div>
  )
}

export default LineChart