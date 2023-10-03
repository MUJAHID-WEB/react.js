import React, { useRef } from 'react'
import ForwardRef from './ForwardRef'

export default function RefInFunc() {
    let inputRef=useRef(null)

    function getValue(){
        console.warn('Func call')
        inputRef.current.style.color='red'
        inputRef.current.style.backgroundColor='blue'
        inputRef.current.focus();
        inputRef.current.style.display='none'

    }
  return (
    <div>
        <h1>Ref in React Functional Component</h1>
        <input type='text' ref={inputRef}/>
        <ForwardRef ref={inputRef}/>
        <button onClick={getValue}>Check Ref</button>
    </div>
  )
}
