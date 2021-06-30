export const SentMessinge=(value:object)=>{
    return {
        type:'SentMessinge',
        value,
    }
}
export const SaveData =(value:Array<any>)=>{
    return {
        type:"SaveData",
        value,
    }
}
export const ReceivedMessinge=(value:object)=>{
    return {
        type:"ReceivedMessinge",
        value,
    }
}

export const TegsSave=(value:any)=>{
    return {
        type:'TegsSave',
        value
    }
}