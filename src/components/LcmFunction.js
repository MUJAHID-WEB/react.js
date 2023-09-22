import React, { useEffect, useState } from 'react'

export default function LcmFunction() {
  const [name, setName] = useState('Mujahid')
  const [data, setData] = useState(0)
  const [count, setCount] = useState(101)

  useEffect(()=>{
    alert('useEffect call')
  },[data]) // useEffect will show as conditioned
  return (
    <div>
      <h1>{name}</h1>

      <button onClick={()=>setName('Islam')}>Update Name</button>

      <h1>{data}</h1> 
      <button onClick={()=>setData(data+1)}>Update Data</button> 
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
        
    </div>
  )
}










// useCallback, useContext, useDebugValue, useEffect,
// useImperativeHandle, useLayoutEffect, useMemo, 
// useReducer, useRef, useState