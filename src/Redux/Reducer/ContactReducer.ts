import Contact from "../State/Contact";

function ContactReducer(state=Contact,action:any){
    let temp ={...state}
    if(action.type==="endGetToken"){
        temp.loading=false
        action.data.map((elm:any,i:any)=>{
            // @ts-ignore
            temp.users.push(elm)
        })
        
    }
    if(action.type==="SaveData"){
        temp.newUserData=action.value
    }

    return temp

}
export default ContactReducer