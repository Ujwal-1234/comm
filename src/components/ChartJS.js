import React, { useState, useEffect } from "react";
// import "./components/App.css"
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
import dummyData from './dummy.json'

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function App(props) {

  let datesorting=[];
  const [data, setData] = useState([]);
  const [datatype, setdatatype] = useState("temperature")
  const [gy, setGy] = useState([])
  const [gx, setGx] = useState([])

  console.log(props.from,props.to)
  useEffect(() => {
    setData(dummyData);
    console.log(data);    
    if(props.from=="" || props.to=="")
    {
      load_data(props.data1)
    }
    else{
      datesorting = sorting();
      load_data_1(props.from,props.to,props.data1)
    }
    
  }, [data,props.data1,props.from,props.to]);

  const load_data = (data_type) => {
    const updatedGx = [];
    const updatedGy = [];
    for (let i = 0; i < data.length; i++) {
      updatedGx.push(data[i].date.slice(0,10));
      updatedGy.push(Number(data[i][data_type]).toFixed(2));
    }
    setdatatype(props.data1);
    setGx(updatedGx.slice(-5));
    setGy(updatedGy.slice(-5));
    };

  const graphFunc = (xAxis, yAxis, graphType) => {
    const graph = {
      labels: xAxis,
      datasets: [{
        label: `${graphType}`,
        data: yAxis,
        backgroundColor: "rgba(15, 0, 77, 0.8)", // Fill color under the line
        borderColor: "rgba(214, 214, 214, 0.8)", // Line color
        pointBackgroundColor: "rgba(214, 214, 214, 0.8)", // Point color
        pointBorderColor: "rgba(214, 214, 214, 0.8)", // Border color of point
        pointHoverBackgroundColor: "rgba(214, 214, 214, 0.8)", // Point background color on hover
        pointHoverBorderColor: "rgba(214, 214, 214, 0.8)",
      }]
    };
    
    return graph
  }

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        grid: {
          color: "rgba(242, 242, 242, 0.8)", // Color of x-axis grid lines
        },
        ticks: {
          color: "rgba(242, 242, 242, 0.8)", // Color of the y-axis tick values
        },
      },
      y: {
        grid: {
          color: "rgba(242, 242, 242, 0.8)", // Color of y-axis grid lines
        },
        ticks: {
          color: "rgba(242, 242, 242, 0.8)", // Color of the y-axis tick values
        },
      },
    },
  };
  const graphPlotter = (xAxis, yAxis, graphType) => {
    return (data.length > 0 &&
        <Line
          data={graphFunc(xAxis, yAxis, graphType)} options={options}
        ></Line>
    )
  }
  let sorting = () => {
    const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(sortedData);
    return sortedData;
  }
  

const load_data_1=(date1,date2,datatype)=>{
  let updatedGx=[];
  let updatedGy=[];
  for(let i=0;i<data.length;i++)
{
  if(data[i].date>=date1 && data[i].date<=date2)
    {
      updatedGx.push(data[i].date.slice(0,10))
      updatedGy.push(data[i][datatype])
    } 
}
setGx(updatedGx);
setGy(updatedGy);
}
  return (
    <>      
      {data.length > 0 && (<div className='w-full h-full flex items-center justify-center rounded-xl  bg-blue-950'>
        {graphPlotter(gx, gy, datatype)}<br />
      </div>)}

    </>
  );
}

export default App