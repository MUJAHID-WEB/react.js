import React, { useState } from 'react'

export default function StateinFunc() {

    const [data, setData] = useState('Mujahid')
    const [count, setCount] = useState(0)

    function updateData(){
        setData('Islam')
     
    }

    function updateCount(){
        
        setCount(count+1)
    }

  return (
    <div>
        <h1>Functional State</h1>

        <h1>{data}</h1>
        <h1>{count}</h1>

        <button onClick={updateData}> Update Data </button>
        <button onClick={updateCount}> Update Count </button>



    </div>
  )
}
