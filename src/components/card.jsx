import './style.css'
import React, {useState} from 'react'


function Card(props){
 
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

export default Card