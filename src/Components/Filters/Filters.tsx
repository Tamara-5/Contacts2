import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReceivedMessinge, SaveData, SentMessinge } from '../../Redux/Action/Filter'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fillter.css'
import Tegs from '../Filters/Tegs/Tags'
import { stateTypes } from '../../Types/stateType';



const Filters:React.FC=()=>{
    const data=useSelector((state:stateTypes)=>state)
    const dispatch=useDispatch()
    const [MinMAxSend,setMinMAxSend]=useState({min:"",max:""})
    const [MinMAxReceived,setMinMAxReceived]=useState({min:"",max:""})
    const SentInfo=()=>{
        dispatch(SentMessinge(MinMAxSend))
        dispatch(ReceivedMessinge(MinMAxReceived))
        let sentinfo:Array<object>=[]
        //4
        if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' &&data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min &&elm.messagesReceived<=+data.filters.Received.max && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }


        //1
        else if(data.filters.sent.max!=="" && data.filters.sent.min===""  && data.filters.Received.max==='' && data.filters.Received.min===''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min===''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min==="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }

        else if(data.filters.sent.max==="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }



        //2
        else if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min===''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min){
                    sentinfo.push(elm)
                }
            })
        }


        else if(data.filters.sent.max!=="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max!=="" && data.filters.sent.min==="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }

        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesReceived<=+data.filters.Received.max && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }



        //3
        else if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }


        else if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }


        else if(data.filters.sent.max!=="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesReceived>=+data.filters.Received.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }
        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' && data.filters.Received.min!==''){
            data.contact.users.map((elm,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived>=+data.filters.Received.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }
        // if(data.filters.slectTags.length!==0){
        //     let setinfotegs:Array<object>=[]
        //     sentinfo.map((elm:object,i:number)=>{
        //         if(data.filters.slectTags===elm.tags){
        //             setinfotegs.push(elm)
        //         }
        //     })
        //     // @ts-ignore
        //     sentinfo=[...setinfotegs]

        // }
        dispatch(SaveData(sentinfo))
        
    }
    return <div className="btndiv">
         <Tegs  />
        <div className="Filterdiv">
            <p>Message Sent</p>
            <input type="number" value={MinMAxSend.min} placeholder="Min"  onChange={(e)=>{setMinMAxSend({...MinMAxSend,min:e.target.value})}} />
            <input type="number" value={MinMAxSend.max} placeholder="Max"  onChange={(e)=>{setMinMAxSend({...MinMAxSend,max:e.target.value})}}></input>
        </div>
        <div className="Filterdiv">
            <p>Message Received</p>
            <input type="number" value={MinMAxReceived.min} placeholder="Min"  onChange={(e)=>{setMinMAxReceived({...MinMAxReceived,min:e.target.value})}} />
            <input type="number" value={MinMAxReceived.max} placeholder="Max"  onChange={(e)=>{setMinMAxReceived({...MinMAxReceived,max:e.target.value})}}></input>
        </div>
        <Button className="SaveFilters"  onClick={()=>SentInfo()} variant="outline-info">Save Filters</Button>{' '}
    </div>
}
export default Filters