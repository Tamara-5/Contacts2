import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contactToken, GetContact, Tegs } from '../../Redux/Action/Contact';
import ContactCard from './ContactCard';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { stateTypes } from '../../Types/stateType';
import { dataTypes } from '../../Types/DataType';


const Contact: React.FC = () => {
  const dispatch=useDispatch()
  const users=useSelector((state:stateTypes)=>state)
  const [searc,serSearch]=useState('')
  const[SearchData,SetSearchData]=useState(Array)

  const SearchPeople=(value:string)=>{
      const new_data:Array<object>=[]
      users.contact.users.map((elm,i:number)=>{
        if(elm.name.startsWith(value)){
            new_data.push(elm)
        }
      })
      SetSearchData(new_data)
      if(value===''){
        SetSearchData([])
      }
    return serSearch(value)
  }
  useEffect(()=>{
    dispatch(contactToken())
    dispatch(Tegs())
  },[]);

const Scrol=(e:any)=>{
    if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight && e.target.scrollTop > 0 ) {
        if(searc===""){
          SetSearchData([])
        }
            dispatch(GetContact());
          }
  } 
  console.log(users.contact.users,SearchData)
    return (
      <div className='Contact' onScroll={(e:object) =>Scrol(e)}>

          {!users.contact.loading && 
            <div>
              <input placeholder="Search" className="search" value={searc} onChange={(e)=>SearchPeople(e.target.value)} />
            </div>
          }
          { users.contact.newUserData.length===0 && SearchData.length===0 &&searc==="" && (users.filters.Received.min==="" && users.filters.Received.max===""&& users.filters.sent.min==="" && users.filters.sent.max===""&&users.filters.slectTags.length===0) && users.contact.users.map((elm:dataTypes,i:number)=>{
             return <ContactCard key={i} data={elm} />
          })}
          {SearchData.length!==0 &&
            SearchData.map((elm:any,i:number)=>{
              return <ContactCard key={i} data={elm} />
            })
          }
           {users.contact.newUserData.length!==0 && (users.filters.Received.min!=="" ||users.filters.Received.max!==""||users.filters.sent.min!=="" ||users.filters.sent.max!=="" || users.filters.slectTags.length!==0) &&
            users.contact.newUserData.map((elm,i:number)=>{
              return <ContactCard key={i} data={elm} />
            })
          }
      </div>
    );
  }
export default Contact