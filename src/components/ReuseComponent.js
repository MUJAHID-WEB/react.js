import React from 'react'

export default function ReuseComponent(prop) { 

  return (
    <div>
        

      <span>{prop.data.name}</span>   {/*  data come from ReuseComponent in ArrayList.js*/}

      <span>{prop.data.email}</span>

      <span>{prop.data.mobile}</span>
    </div>
  )
}
