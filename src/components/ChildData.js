import React from 'react'
import { Button } from 'react-bootstrap'

export default function ChildData(p) {
    //const name='Mujahidul Islam';  // To sent data from child to parent, just pass the veriable name 
    const data = {name: 'Mujahid', email: 'muahid@gmail.com'}
  return (
    <>
        <h1>Child Data to Parent</h1>
        {/* <Button onClick={()=>p.alert(name)}> Click me </Button> */}
        <Button onClick={()=>p.alert(data)}> Click me </Button>
    </>
  )
}
 