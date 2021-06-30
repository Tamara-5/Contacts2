import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SaveData } from '../../Redux/Action/Filter'
import { ContactTypes } from '../../Types/ContactTypes'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fillter.css'
import { GetContact } from '../../Redux/Action/Contact';


const Filters:React.FC=()=>{
    const data:any=useSelector((state)=>state)

    const dispatch=useDispatch()
    const SentInfo=()=>{
        let sentinfo:Array<any>=[]
        //4
        if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' &&data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min &&elm.messagesReceived<=+data.filters.Received.max && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }


        //1
        else if(data.filters.sent.max!=="" && data.filters.sent.min===""  && data.filters.Received.max==='' && data.filters.Received.min===''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min===''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min==="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }

        else if(data.filters.sent.max==="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }



        //2
        else if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min===''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min){
                    sentinfo.push(elm)
                }
            })
        }


        else if(data.filters.sent.max!=="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max!=="" && data.filters.sent.min==="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }

        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }



        else if(data.filters.sent.max==="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesReceived<=+data.filters.Received.max && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }



        //3
        else if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' && data.filters.Received.min===''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived<=+data.filters.Received.max){
                    sentinfo.push(elm)
                }
            })
        }


        else if(data.filters.sent.max!=="" && data.filters.sent.min!=="" && data.filters.Received.max==='' && data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }


        else if(data.filters.sent.max!=="" && data.filters.sent.min==="" && data.filters.Received.max!=='' && data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent<=+data.filters.sent.max && elm.messagesReceived>=+data.filters.Received.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }
        else if(data.filters.sent.max==="" && data.filters.sent.min!=="" && data.filters.Received.max!=='' && data.filters.Received.min!==''){
            data.contact.users.map((elm:ContactTypes,i:number)=>{
                if(elm.messagesSent>=+data.filters.sent.min && elm.messagesReceived>=+data.filters.Received.min && elm.messagesReceived>=+data.filters.Received.min){
                    sentinfo.push(elm)
                }
            })
        }

        else if(data.filters.sent.max==="" && data.filters.sent.min==="" && data.filters.Received.max==='' && data.filters.Received.min==='' && data.filters.slectTags.length===0 ){
            dispatch(GetContact())
        }



        if(data.filters.slectTags.length!==0){
             // @ts-ignore
            let setinfotegs=[]
            sentinfo.map((elm:ContactTypes,i:number)=>{
                console.log(elm.tags)
                if(data.filters.slectTags===elm.tags){
                    setinfotegs.push(elm)
                }
            })
            // @ts-ignore
            sentinfo=[...setinfotegs]
        }



        dispatch(SaveData(sentinfo))
        
    }
    return <div className="btndiv">
        {/* <button onClick={()=>SentInfo()}>Save Filters</button> */}
       
        <Button onClick={()=>SentInfo()} variant="outline-success">Save Filters</Button>{' '}
    </div>
}
export default Filters