import  { useState } from 'react'
import "./Card.css"
import { dataTypes } from '../../Types/DataType';

type PropsTypes = {
    data: dataTypes,
    key: number,
};

const ContactCard = (props: PropsTypes ) => {
    const [active,setActive]=useState(false)

    const selectCard=(bool:Boolean)=>{
        return setActive(!bool)
    }
    return <div className='card' onClick={()=>selectCard(active)}>
        <div>
            {active &&
                <label className="container">
                    <input className="chechinput" onChange={()=>{}} checked={active} type="checkbox" name="" id="" />
                    <span className="checkmark"></span>
                </label>
            }
        </div>
        <div className="cardData">
        <div >
            <img className="contactimg" src={'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'} />
        </div>
            <p>{props.data.name}</p>
            <p>{props.data.phoneNumber}</p>
        </div>
    </div>
}
export default ContactCard