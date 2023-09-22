import React, { useEffect, useRef, useState } from 'react';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
// import {Tabulator} from 'tabulator-tables';


const DataTable2 = () => {
  const tableDivRef = useRef(null);
  const tableRef = useRef(null);

  var tableData = [
    { name: "John", progress: 42, gender: "Male", rating: 5, col: "Blue", dob: "1985-05-15", car: true },
    { name: "Alice", progress: 65, gender: "Female", rating: 4, col: "Red", dob: "1990-12-28", car: false },
  ];

  useEffect(() => {

    tableRef.current = new Tabulator(tableDivRef.current, {
        height:"311px",
        data: tableData,
        columns:[
            {title:"Name", field:"name", width:200},
            {title:"Progress", field:"progress", width:100, sorter:"number"},
            {title:"Gender", field:"gender"},
            {title:"Rating", field:"rating", width:80},
            {title:"Favourite Color", field:"col"},
            {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date"},
            {title:"Driver", field:"car", hozAlign:"center", formatter:"tickCross"},
        ],
    });

    return () => {
        tableRef.current.destroy();
    };
  }, []);

  const exportCSVhandler = ()=>{
    tableRef.current.download('csv', 'demo.csv')
  }

  return (
    <div>
        <button onClick={()=>exportCSVhandler()}>Export CSV</button>
        <div ref={tableDivRef}></div>
    </div>
  );
};

export default DataTable2;