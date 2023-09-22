import React, { useState } from 'react'

export default function InputBoxValueGet() {

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    
    function getData(val){
        setData(val.target.value)
        setPrint(false)
    }

  return (
    <div>

        <h1>Input Box Value Get</h1>

        <h1>{data}</h1>

        <input type='text' onChange={getData} />
        <button onClick={()=>setPrint(true)}>Print Data</button>
        
        {
            print? 
            <h1>{data}</h1> 
            : null 
        }

    </div>
  )
} 
