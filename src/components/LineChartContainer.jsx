import React, { useState } from 'react'
import LineChart from './LineChart'


const LineChartContainer = () => {


  const [data, setData] = useState({
    dataSet1 : [100,200,250,300],
    dataSet2: [100,300,180,500,280]
  })

  const [value, setValue] = useState('May-June');

  const handleChange = (e) => {
    setValue(e.target.value);
    const curr = e.target.value
    if(curr==="May-June"){
      setData({
        dataSet1 : [100,200,250,300],
        dataSet2: [100,300,180,500,280]
      })
    }
    if(curr==="June-July"){
      setData({
        dataSet1 : [180,240,350,400],
        dataSet2: [500,200,480,400,180]
      })
    }
    if(curr==="July-Aug"){
      setData({
        dataSet1 : [200,170,220,400],
        dataSet2: [140,320,280,450,280]
      })
    }
  };

  return (
    <div className=' mt-5 py-3 m-auto w-[90%] sm:w-[90%] sm:h-72 flex flex-col items-center bg-white rounded-xl'>
        <div className='flex justify-between w-full'>
          <div className='px-10'>
            <h3 className='font-bold'>Activities</h3>
            <select value={value} onChange={(e)=>handleChange(e)}>
              <option value={"May-June"}>
                May-June
              </option>
              <option value={"June-July"}>
                June-July
              </option>
              <option value={"July-Aug"}>
                July-Aug
              </option>
            </select>
          </div>
          <div className='flex mr-10'>
            <div className='flex  items-center'>
              <span className='w-3 h-3 rounded-full bg-red-400'></span>
              <h4 className='ml-2'>Guest</h4>
            </div>
            <div className='ml-5 flex items-center'>
              <span className='w-3 h-3 rounded-full bg-green-400'></span>
              <h4 className='ml-2'>User</h4>
            </div>
          </div>
        </div>
        <LineChart dataObj={data}/>
      </div>
  )
}

export default LineChartContainer