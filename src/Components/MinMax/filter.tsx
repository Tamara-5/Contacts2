import react from 'react'
import { useState } from 'react'
const Filter:React.FC=()=>{
    const [MinMAxSend,setMinMAxSend]=useState({min:"",max:""})
    console.log(MinMAxSend)
    return <div>
        <div>

            <input type="number" placeholder="Min" onChange={(e)=>{setMinMAxSend({...MinMAxSend,min:e.target.value})}} ></input>
            <input type="number" placeholder="Max" onChange={(e)=>{setMinMAxSend({...MinMAxSend,max:e.target.value})}}></input>
        </div>
    </div>
}
export default  Filter