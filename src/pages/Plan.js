function Plan(props){
    return <>
        <li className=" flex justify-between items-center p-2"><span className=" pr-2">{props.value}</span>
            <button className="border shadow-inner hover:bg-red-500 hover:text-red-100 shadow-white border-white text-red-400 p-2 rounded-lg" onClick={()=>{props.sendData(props.id)}}>-REMOVE</button>
        </li>
    </>
}
export default Plan;