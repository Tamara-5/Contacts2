import Contact from "../State/Contact";

function ContactReducer(state=Contact,action:any){
    let temp ={...Contact}


    if(action.type==="SelectDiv"){
        
    }
    if(action.type==="endGetToken"){
        temp.loading=false
        action.data.map((elm:any,i:any)=>{
            // @ts-ignore
            temp.users.push(elm)
        })
        console.log(action.data)
    }
   
    return temp

}
export default ContactReducer