import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { contactToken, GetContact, SelectDiv, Tegs } from '../../Redux/Action/Contact';
import { ContactTypes } from '../../Types/ContactTypes';
import ContactCard from './ContactCard';
import Spinner from 'react-bootstrap/Spinner'
import { useState } from 'react';
import { useScrollBy } from "react-use-window-scroll";

const Contact: React.FC = () => {
  const scrollBy = useScrollBy();
  const dispatch=useDispatch()
  const users:any=useSelector<ContactTypes>((state)=>state)
  const [searc,serSearch]=useState('')
  const[SearchData,SetSearchData]=useState(Array)


  const SearchPeople=(value:string)=>{
      const new_data:Array<any>=[]
      users.contact.users.map((elm:ContactTypes,i:number)=>{
        if(elm.name.startsWith(value)){
            new_data.push(elm)
        }
      })
      SetSearchData(new_data)
    return serSearch(value)
  }



  useEffect(()=>{
    dispatch(contactToken())
    dispatch(Tegs())
  },[]);


const Scrol=(e:any)=>{
    if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight ) {
            dispatch(GetContact());
          }
  }
    return (
      <div className='Contact' onScroll={(e:any) =>Scrol(e)}>
          {users.contact.loading && 
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
          }
          {!users.contact.loading && 
            <div>
              <input placeholder="Search" className="search" value={searc} onChange={(e)=>SearchPeople(e.target.value)} />
            </div>
          }
          { !users.loading && SearchData.length===0 &&searc==="" && users.contact.users.map((elm:ContactTypes,i:number)=>{
             return <ContactCard key={i} data={elm} />
          })}
          {SearchData.length!==0 &&
            SearchData.map((elm:any,i:number)=>{
              return <ContactCard key={i} data={elm} />
            })
          }
          {SearchData.length===0 && searc!=="" &&
              <h1 className="NoUsers">No users</h1>
          }
      </div>
    );
  }
export default Contact