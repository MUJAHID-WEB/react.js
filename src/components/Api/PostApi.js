import React, { useState } from 'react'

export default function PostApi() {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [mobile, setMobile]=useState('')

    function saveData(){
        console.warn({name, email, mobile})

        const data = {name, email, mobile}

        fetch('url', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',

            },
            body: JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn('resp',resp)
            })
        })
    }

  return (
    <div>
        <h1>POST Api</h1>

       
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name='name'/> <br/>

            <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email'/> <br/>

            <input type='text' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name='phone'/> <br/>

            <button type='submit' onClick={saveData}>Save</button>
  
    </div>
  )
}
