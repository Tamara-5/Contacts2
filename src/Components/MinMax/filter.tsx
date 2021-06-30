import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReceivedMessinge, SentMessinge } from '../../Redux/Action/Filter'
import Tegs from '../Filters/Tegs/Tags'
const Filter:React.FC=()=>{
    const [MinMAxSend,setMinMAxSend]=useState({min:"",max:""})
    const [MinMAxReceived,setMinMAxReceived]=useState({min:"",max:""})
    const dispatch=useDispatch()
    const sentinfo=()=>{
        dispatch(SentMessinge(MinMAxSend))
    }
    const sentinfoReciverd=()=>{
        dispatch(ReceivedMessinge(MinMAxReceived))
    }
    const sent=useSelector((state)=>state)
    return <div>
        <Tegs />
        <div className="Filterdiv">
            <p>Message Sent</p>
            <input type="number" value={MinMAxSend.min} placeholder="Min" onBlur={()=>sentinfo()} onChange={(e)=>{setMinMAxSend({...MinMAxSend,min:e.target.value})}} />
            <input type="number" value={MinMAxSend.max} placeholder="Max" onBlur={()=>sentinfo()} onChange={(e)=>{setMinMAxSend({...MinMAxSend,max:e.target.value})}}></input>
        </div>
        <div className="Filterdiv">
            <p>Message Received</p>
            <input type="number" value={MinMAxReceived.min} placeholder="Min" onBlur={()=>sentinfoReciverd()} onChange={(e)=>{setMinMAxReceived({...MinMAxReceived,min:e.target.value})}} />
            <input type="number" value={MinMAxReceived.max} placeholder="Max" onBlur={()=>sentinfoReciverd()} onChange={(e)=>{setMinMAxReceived({...MinMAxReceived,max:e.target.value})}}></input>
        </div>
    </div>
}
export default  Filter