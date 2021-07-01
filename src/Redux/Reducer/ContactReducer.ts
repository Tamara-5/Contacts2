import { dataTypes } from "../../Types/DataType";
import Contact from "../State/Contact";

type PropsTypes = {
    type:string,
    data:Array<DataType>,
    value:Array<DataType>
    
}
type ContactType={
    loading:Boolean,
    select:Boolean,
    newUserData:Array<dataTypes>
    users:Array<dataTypes>
}
type DataType={
    assignee:any,
    chats:Array<any>
    id:number,
    messagesReceived:number,
    messagesSent:number,
    name:string,
    phoneNumber:string,
    tags:Array<any>
    type:string
}

function ContactReducer(state=Contact,action:PropsTypes){
    let temp:ContactType ={...state}
    if(action.type==="endGetToken"){
        temp.loading=false
        action.data.map((elm)=>{
            temp.users.push(elm)
        })
        
    }   
    if(action.type==="SaveData"){
        temp.newUserData=action.value
    }

    return temp

}
export default ContactReducer