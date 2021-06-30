import Filters from "../State/Filters";

function FilterRedcer(state=Filters,action:any){
    let temp={...state}
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
        temp.slectTags=action.value
    }
    return temp
}
export default FilterRedcer