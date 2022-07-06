import React from 'react'
type Messageprops ={
    avatar:string,
    name:string,
    message:string,
    time:string
}
function Message(props:Messageprops) {
    return (
        <div>
            <img src={props.avatar}/>
            {props.name}
            {props.time}
            {props.message}
        </div>
    )
}

export default Message
