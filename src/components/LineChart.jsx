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

const LineChart = ({}) => {


    const [data, setData] = useState(null);

    useEffect(()=>{
        let labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
        const data = {
          labels,
          datasets: [
            {
              label: 'Clicks',
              data: [100,200,250,300],
              borderColor: 'rgb(255, 99, 132)',
              borderColor: 'cyan',
              borderWidth: 2,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              tension: 0,
              pointStyle: false,
            },
            {
              label: 'Clicks',
              data: [100,300,180,500,280],
              borderColor: 'red',
              borderColor: 'red',
              borderWidth: 2,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              tension: 0,
              pointStyle: false,
            },
          ],
        };

        setData(data);
    },[])


  return (
    <div className="h-full w-5/6 canvas-div line" id="all_three_line-div d-inline-block">
      {
        data && <Line options={options} data={data} />
      }
    </div>
  )
}

export default LineChart