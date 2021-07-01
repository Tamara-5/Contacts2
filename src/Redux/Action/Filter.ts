export const SentMessinge=(value:object)=>{
    return {
        type:'SentMessinge',
        value,
    }
}
export const SaveData =(value:Array<object>)=>{
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

export const TegsSave=(value:Array<string>)=>{
    return {
        type:'TegsSave',
        value
    }
}