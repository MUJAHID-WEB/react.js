import React, {useState} from 'react'

export default function Hoc() {
    
  return (
    <div>
        <HocRed cmp={Counter}/>
        <HocGreen cmp={Counter}/>
        <HocBlue cmp={Counter}/>
    </div>
  )
}

///////////////////// HOC

function HocRed(p) {
  return (
    <h1 style={{backgroundColor:'red'}}><p.cmp /></h1> 
  )
  
}
////////
function HocGreen(p) {
    return (
      <h1 style={{backgroundColor:'green'}}><p.cmp /></h1> 
    )
    
  }
/////////
  function HocBlue(p) {
    return (
      <h1 style={{backgroundColor:'blue'}}><p.cmp /></h1> 
    )
    
  }

///////////////////// Component
function Counter() {
    const [data, setData] = useState(0)
  return (
    <div>
    <h1>{data}</h1> 
      <button onClick={()=>setData(data+1)}>Update Data</button> 
    </div>
  )
}

