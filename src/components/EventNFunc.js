import React from 'react'

export default function EventNFunc() {



    function apple(){
        alert('Function Called')
    }
  return (
    <div>
        <h1>Event and Function</h1>

        <h1></h1>

        <button onClick={apple}> Click Apple </button>

        <button onClick={()=>alert('Hello Hi')}> Click here direcly </button>
        <button onClick={()=>apple()}> Click here </button>


    </div>

    
  )
}
