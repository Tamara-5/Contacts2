import React, { useState } from 'react'
import "./Card.css"
import { ContactTypes } from '../../Types/ContactTypes'
import { useSelector } from 'react-redux';

type PropsTypes = {
    data: ContactTypes,
    key: number,
};

const ContactCard = (props: PropsTypes ) => {
    const [active,setActive]=useState(false)

    const selectCard=(bool:Boolean)=>{
        return setActive(!bool)
    }
    const users:any=useSelector<ContactTypes>((state)=>state)
    return <div className={!active ||users.contact.select ?'card':"activcard"} onClick={()=>selectCard(active)}>
        <div>
            {active &&
                <label className="container">
                    <input className="chechinput"  checked={active} type="checkbox" name="" id="" />
                    <span className="checkmark"></span>
                </label>
            }
        </div>
        <div>
            <img />
        </div>
        <div className="cardData">
            <p>{props.data.name}</p>
            <p>{props.data.phoneNumber}</p>
        </div>
    </div>
}
export default ContactCard