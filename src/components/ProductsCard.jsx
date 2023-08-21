import React,{useState, useEffect} from 'react'
import PieChart from './PieChart'

const ProductsCard = () => {

    const [dataSet, setDataSet] = useState([14, 31, 55]);

    const [value, setValue] = useState('May - June 2021');

  const handleChange = (e) => {
    setValue(e.target.value);
    const curr = e.target.value
    if(curr==="May - June 2021"){
        setDataSet([14, 31, 55])
    }
    if(curr==="June - July 2021"){
        setDataSet([17, 35, 48])
    }
    if(curr==="July - Aug 2021"){
        setDataSet([36, 24, 40])
    }
  };

  return (
    <div className='flex flex-col w-[90%] sm:w-[48%] bg-white rounded-2xl mt-5 p-3'>
        <div className='flex justify-between'>
            <h4 className='font-bold'>Top Products</h4>
            <select value={value} onChange={(e)=>handleChange(e)}>
                <option value={"May - June 2021"}>May - June 2021</option>
                <option value={"June - July 2021"}>June - July 2021</option>
                <option value={"July - Aug 2021"}>July - Aug 2021</option>
            </select>
        </div>
        <div className='flex flex-col-reverse sm:flex-row justify-between items-center'>
            <div className='w-3/6 h-[185px]'>
                <PieChart dataSet={dataSet}/>
            </div>
            
            <div className='sm:w-3/6 mt-4'>
             <ul className='flex flex-row sm:flex-col'>
                <li className='flex'>
                    <span className='w-3 h-3 rounded-full bg-[#98D89E] mt-2'></span>
                    <div className='ml-3'>
                        <h4 className=' font-bold text-lg'>Basic Tees</h4>
                        <h5 className='text-gray-600'>{dataSet[2]}%</h5>
                    </div>
                </li>
                <li className='flex'>
                    <span className='w-3 h-3 rounded-full bg-[#F6DC7D] mt-2'></span>
                    <div className='ml-3'>
                        <h4 className=' font-bold text-lg'>Custom Short Pants</h4>
                        <h5 className='text-gray-600'>{dataSet[1]}%</h5>
                    </div>
                </li>
                <li className='flex'>
                    <span className='w-3 h-3 rounded-full bg-[#EE8484] mt-2'></span>
                    <div className='ml-3'>
                        <h4 className=' font-bold text-lg'>Super Hoodies</h4>
                        <h5 className='text-gray-600'>{dataSet[0]}%</h5>
                    </div>
                </li>
             </ul>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard