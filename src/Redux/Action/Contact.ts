import axios from "axios"


const endGetToken=(data:[])=>{
    return {
        type:"endGetToken",
        data,
    }
}
const startGetContact=()=>{
    return {
        type:"startGetContact"
    }
}



export const GetContact=()=>{
    console.log('sss')
    let token=sessionStorage.getItem('token')
    return (dispatch:any)=>{
        dispatch(startGetContact())
        axios.get('https://api-im.chatdaddy.tech/contacts/', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((e) => {
            dispatch(endGetToken(e.data.contacts))
        });
    }
}

export const Tegs=()=>{
    let token=sessionStorage.getItem('token')
    return (dispatch:any)=>{
        axios.get('https://api-im.chatdaddy.tech/tags/', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((e) => {
            dispatch(endGetTegs(e.data.tags))
        });
    }
}
const endGetTegs=(data:any)=>{
    return {
        type:"endGetTegs",
        data,
    }
}


export const contactToken=()=>{
    let token='059c420e-7424-431f-b23b-af0ecabfe7b8'
    return (dispatch:any)=>{
        axios.post('https://api-auth.chatdaddy.tech/oauth/token', {
            grant_type:'refresh_token',
            refresh_token: token,
        }).then((r)=>{
            sessionStorage.setItem('token', r.data.accessToken);
            dispatch(GetContact());
        })
    }
}



export const SelectDiv=()=>{
    return {
        type:"SelectDiv"
    }
}