import React, { useState } from 'react'

export default function Conditional() {
    const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
        {
            loggedIn?
            <h1>Welcome Mujahid</h1>
            :<h2>Try again</h2>
        }

    </div>
  )
}
