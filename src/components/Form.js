import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [select, setSelect] = useState('')
    const [tnc, setTnc] = useState(false)

    function getFormData(e){
        console.warn(name,select,tnc)
        e.preventDefault()
    }
  return (
    <div>
        <h1> Form </h1>

        <form onSubmit={getFormData}>
            <input type='text' placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)} /> <br />

            <select onChange={(e)=>setSelect(e.target.value)}>
                <option>Select Option</option>
                <option>Dhaka</option>
                <option>BD</option>
            </select> <br/>

            <input type='checkbox' onChange={(e)=>setTnc(e.target.value)}/> <span>Accept T&C</span> <br/>

            <button type='submit'>submit</button>



        </form>
    </div>
  )
}
