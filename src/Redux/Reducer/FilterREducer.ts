import { dataTypes } from "../../Types/DataType";
import Filters from "../State/Filters";


type PropsTypes = {
    type:string,
    data:Array<dataTypes>,
    value:MaxMin,
    slectTags:Array<String>,
    
}
type MaxMin={
    max:string,
    min:string
}

type tempType={
    sent:MaxMin,
    Received:MaxMin,
    Tags:Array<Tags>,
    slectTags:Array<string>,
}
type Tags={
    name:string
}

function FilterRedcer(state=Filters,action:PropsTypes){
    let temp:tempType={...state}
    if(action.type==="SentMessinge"){
        temp.sent.max=action.value.max
        temp.sent.min=action.value.min
    }
    if(action.type==="ReceivedMessinge"){
        temp.Received.max=action.value.max
        temp.Received.min=action.value.min
    }
    if(action.type==="endGetTegs"){
        temp.Tags=action.data
    }
    if(action.type==="TegsSave"){
        // @ts-ignore
        temp.slectTags=action.value
    }
    return temp
}
export default FilterRedcer