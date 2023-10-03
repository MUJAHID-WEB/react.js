import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function UseMemo() {
    const [count, setCount]=useState(0)
    const [item, setItem]=useState(10)

    // use useMemo to stop calling the function which is not clicked
    const multiCountMemo = useMemo(
        function multiCount(){
            console.log('multiCOunt')
            return count*3
        },[count] // set a condition to call only when count call
    )


  return (
    <div>
        <h1>useMemo Hook </h1>
        <h2>Count: {count}</h2>
        <h3>{multiCountMemo}</h3>
        <Button onClick={()=>setCount(count+1)}>UpdateCount</Button>
        <h2>Count: {item}</h2>
        <Button onClick={()=>setItem(item*10)}>Update Item</Button>
    </div>
  )
}
