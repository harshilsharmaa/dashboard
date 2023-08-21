import { Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

let DATA_COUNT = 0;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      //   position: 'bottom',
    },
    title: {
      display: true,
      // text: 'Chart.js Pie Chart'
    }
  }
}
const PieChart = ({dataSet}) => {

  const labels = ["Super Hoodies", "Custom Short Pants", "Basic Tees"];

  const [data, setData] = useState(null);

  useEffect(()=>{
    let data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: dataSet,
          backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
          hoverOffset: 4,
          borderWidth: 0,
          offset: true,
        }
      ]
    };

    setData(data)
  },[dataSet])



  return (
    <div className="w-full h-full canvas-div pie" id="all_three_pie-div d-inline-block">
      {
        data && <Pie options={options} data={data} />
      }
    </div>
  )
}

export default PieChart