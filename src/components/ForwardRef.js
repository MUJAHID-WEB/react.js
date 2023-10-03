import React, { forwardRef }  from 'react'

function ForwardRef(props, refc) {

  return (
    <div>
        <h1>forwardRef in React Functional Component</h1>
        <input type='text' ref={refc}/>
    </div>
  )
}

export default forwardRef(ForwardRef)
