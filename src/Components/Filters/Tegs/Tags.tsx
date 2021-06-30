import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TegsSave } from '../../../Redux/Action/Filter'
import "./Tags.css"
const Tags:React.FC=()=>{
    const Tags:any=useSelector((state)=>state)
    const [count,setCount]=useState(5)
    const [isActive,setIsactive]=useState([])
    const dispatch=useDispatch()
    const moer=()=>{
        if(count===5)
        setCount(Tags.filters.Tags.length)
        else{
        setCount(5)
        }
    }
    const active=(i:any)=>{
        let temp=[...isActive]
        // @ts-ignore
        if(temp.includes(i)){
             // @ts-ignore
            let index=temp.indexOf(i)
            temp.splice(index,1)
        }
        else{        
        // @ts-ignore
        temp.push(i)
    }   
       dispatch(TegsSave(temp))
       setIsactive(temp)
    }
    let newTages:any=[]
    if(Tags.filters.Tags.length!==0)
    for(let i=0;i<count;i++){
        newTages.push(Tags.filters.Tags[i])
    }

    return <div className="Tags">
        <h4>Tags</h4>
        {newTages.length!==0 && newTages.map((elm:any,i:number)=>{
            return <div onClick={()=>active(elm.name)} key={i} className="tegselement">
                  <p>{elm.name}</p>
                            {/* @ts-ignore */}
                    {isActive.includes(elm.name)  && 
                        <label className="container1">
                            {/* @ts-ignore */}
                        <input className="chechinput1" onChange={()=>{}} checked={isActive.includes(elm.name)} type="checkbox"  id="" />
                        <span className="checkmark1"></span>
                        </label>
                    }
                  
                </div>
        })}
        <button onClick={()=>moer()} className="morebutton">...</button>
    </div>
}
export default Tags