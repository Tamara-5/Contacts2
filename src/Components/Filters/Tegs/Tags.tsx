import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TegsSave } from '../../../Redux/Action/Filter'
import { dataTypes } from '../../../Types/DataType'
import "./Tags.css"

type received={
    min:string,
    max:string
}
type Contact={
    isActive:Array<string>
    loading:boolean,
    newUserData:Array<dataTypes>
    select:boolean,
    users:Array<dataTypes>
}
type Filters ={  
    Received:received,
    Tags:Array<Tags>,
    sent:received,
    slectTags:Array<string>
}
type PropsT = {
    contact: Contact,
    filters: Filters,
  };

type Tags={
    name:string
}

const Tags:React.FC=()=>{
    const Tags=useSelector((state:PropsT)=>state)
    const [count,setCount]=useState(5)
    const [isActive,setIsactive]=useState<Array<string>>([])
    const dispatch=useDispatch()
    const moer=()=>{
        if(count===5)
        setCount(Tags.filters.Tags.length)
        else{
        setCount(5)
        }
    }
    const active=(i:string)=>{
        let temp=[...isActive]
        if(temp.includes(i)){
            let index=temp.indexOf(i)
            temp.splice(index,1)
        }
        else{        
        temp.push(i)
    }   
       dispatch(TegsSave(temp))
       setIsactive(temp)
    }
    let newTages=[]
    if(Tags.filters.Tags.length!==0)
    for(let i=0;i<count;i++){
        newTages.push(Tags.filters.Tags[i])
    }

    return <div className="Tags">
        <h4>Tags</h4>
        {newTages.length!==0 && newTages.map((elm,i:number)=>{
            return <div onClick={()=>active(elm.name)} key={i} className="tegselement">
                  <p>{elm.name}</p>
                    {isActive.includes(elm.name)  && 
                        <label className="container1">
                        <input className="chechinput1" onChange={()=>{}} checked={isActive.includes(elm.name)} type="checkbox"/>
                        <span className="checkmark1"></span>
                        </label>
                    }
                  
                </div>
        })}
        <button onClick={()=>moer()} className="morebutton">...</button>
    </div>
}
export default Tags