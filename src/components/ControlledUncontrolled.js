import React, { useRef, useState } from 'react'

export default function ControlledUncontrolled() {
    let [val, setVal]=useState('000')

    let inputRef1=useRef(null)
    let inputRef2=useRef(null)

    function getValue(e){
        e.preventDefault()
        console.warn('Func call 01' , inputRef1.current.value)
        console.warn('Func call 02' , inputRef2.current.value)
        let input3 = document.getElementById('input3').value
        console.warn('Func call 03' , input3)
        

    }

  return (
    <div>
         <h1>Controlled Component in React Functional Component</h1>
        <input type='text' value={val} onChange={(e)=> setVal(e.target.value)}/>

        <h1>UnControlled Component in React Functional Component</h1>
        <form onSubmit={getValue}>
        <input type='text' ref={inputRef1}/>
        <input type='text' ref={inputRef2}/>
        <input type='text' id='input3'/>

        <button>Submit</button>
        </form>
    </div>
  )
}
