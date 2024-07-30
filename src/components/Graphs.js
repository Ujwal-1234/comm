import React,{useEffect, useRef, useState} from 'react'
import ChartJS from './ChartJS'
import BarChart from './BarChart';
const Graphs = () => {

  let[s,setS]=useState("temperature")
  let [datepick,setDatepick]=useState("");
  let [datepick1,setDatepick1]=useState("");
  let[graph,setGraph]=useState(false);
  const [from, setFrom] = useState("")
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };
  const [to, setTo] = useState("")
  let datepicker=()=>{
    // console.log(from);
    // console.log(to);
    setDatepick(from)
    setDatepick1(to)
  }
  return (
    <>
      <div className='flex h-full flex-wrap'>
        <div className=' min-h-full p-1 w-full'><BarChart data={chartData}/></div>
        {/* <div className='lg:w-1/6 w-full lg:h-full flex flex-col justify-center items-center gap-5 py-10 bg-slate-400 bg-opacity-20'>
        <div className=" rounded-md p-2 bg-slate-300 bg-opacity-40 w-full flex items-center justify-center flex-wrap  ">
          <table cellPadding={10} width={"100%"}>
            <tr>
              <td>From</td>
              <td><input type="date" className=' rounded-md w-full p-2 text-center' value={from} onChange={(e) => setFrom(e.target.value)}/></td>
            </tr>
            <tr>
              <td>To</td>
              <td><input type="date" value={to} className=' w-full p-2 text-center rounded-md' onChange={(e) => setTo(e.target.value)}/></td>
            </tr>
          </table>
          {from==""||to=="" ?(<button type="submit" disabled="disabled" className="bg-slate-500 text-white rounded-md p-2" border-hidden>Submit</button>)
          :
          (<button type="submit" className=" bg-nice-blue text-white rounded-md p-2 hover:bg-opacity-25" border-hidden onClick={()=>{datepicker()}}>Submit</button>)}
          </div>
          <div className=' w-full flex flex-wrap items-center justify-center '>
            <button className="bg-nice-blue rounded-md hover:bg-opacity-25 h-12 w-28 m-2 text-white " onClick={()=>{setS("temperature")}}>Triaxial Accelerometer</button>
            <button className="bg-nice-blue rounded-md hover:bg-opacity-25 h-12 w-28 m-2 text-white " onClick={()=>{setS("pressure")}}>Temperature Sensor</button>
            <button className="bg-nice-blue rounded-md hover:bg-opacity-25 h-12 w-28 m-2 text-white " onClick={()=>{setS("methane")}}>Strain Gauge</button>
            <button className="bg-nice-blue rounded-md hover:bg-opacity-25 h-12 w-28 m-2 text-white " onClick={()=>{setS("tankpressure")}}>Biaxial Inclinometer</button>
            <button className="bg-nice-blue rounded-md hover:bg-opacity-25 h-12 w-28 m-2 text-white " onClick={()=>{setS("tankpressure")}}>Acoustic Sensor</button>
            <button className="bg-nice-blue rounded-md hover:bg-opacity-25 h-12 w-28 m-2 text-white " onClick={()=>{setS("tankpressure")}}>Displacement Sensor</button>
            <button className="bg-nice-blue rounded-md hover:bg-opacity-25 h-12 w-28 m-2 text-white "onClick={()=>{setGraph(!graph)}}>{graph?"Bar Graph":"Line Graph" }</button>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Graphs
