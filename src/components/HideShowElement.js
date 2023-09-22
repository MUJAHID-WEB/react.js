import React, { useState } from 'react'

export default function HideShowElement() {


    const [print, setPrint] = useState(false)
    

  return (
    <div>

        <h1> Hide and Show Element </h1>

 
        <button onClick={()=>setPrint(false)}>Hide</button>
        <button onClick={()=>setPrint(true)}>Show</button>
        <button onClick={()=>setPrint(!print)}>Toggle</button>
        
        {
            print? 
            <h1>Mujahid</h1> 
            : null 
        }

    </div>
  )
} 
