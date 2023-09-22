import React from 'react'

export default function Personal(prop){

    const red = ()=>{
        alert ('Function Called')
    }

    return(
        <div>
            <h1 onClick={red}> {prop.text} </h1>
        </div>
    )
}